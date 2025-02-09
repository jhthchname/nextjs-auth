import User from "../model/user.model.js";
import { hashedPassword } from "../auth/auth.service.js";

const findUserById = async (id) => {
  let user = await User.findById(id);
  if (!user) throw new Error("ไม่พบผู้ใช้งานนี้ในระบบ");
  return user;
};

const matchQuery = (args) => {
  let where = {};
  if (args?.query) {
    where = {
      $or: [
        { firstName: { $regex: args?.query, $options: "i" } },
        { lastName: { $regex: args?.query, $options: "i" } },
        { email: { $regex: args?.query, $options: "i" } },
        { phone: { $regex: args?.query, $options: "i" } },
      ],
    };
  }
  return where;
};

const userController = {
  users: async (args) => {
    const user = await User.aggregate([
      {
        $match: matchQuery(args),
      },
      {
        $lookup: {
          from: "users",
          localField: "approveBy",
          foreignField: "_id",
          as: "approveByUser",
        },
      },
      {
        $unwind: {
          path: "$approveByUser",
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $facet: {
          metadata: [
            {
              $count: "total",
            },
          ],
          results: [
            { $skip: Number(args?.skip) || 0 },
            { $limit: Number(args?.limit) || 10 },
            { $sort: { createdOn: -1 } },
          ],
        },
      },
      {
        $project: {
          total: {
            $arrayElemAt: ["$metadata.total", 0],
          },
          results: 1,
        },
      },
    ]);
    return user?.length > 0 ? user[0] : { total: 0, results: [] };
  },
  user: async (args) => {
    return await findUserById(args?.id);
  },
  create: async (args) => {
    let user = await User.findOne({ email: args?.email });
    if (user) throw new Error("มีผู้ใช้งาน email นี้อยู่ในระบบอยู่แล้ว");
    if (!args?.password) throw new Error("กรุณากรอกรหัสผ่าน");
    const { newPwd, salt } = hashedPassword(args?.password);
    return await User.create({
      ...args,
      password: newPwd,
      salt: salt,
    });
  },
  update: async (args, data) => {
    let user = await findUserById(args?.id);
    delete args?.id;
    Object.keys(data).forEach((key) => {
      if (key !== "id") {
        user[key] = data[key];
      }
    });

    user.updatedOn = Date.now();

    return await user.save();
  },
  approve: async (args, data) => {
    const newUser = await User.findOneAndUpdate(
      { _id: args?.id },
      {
        verify: { status: args?.status },
        approveBy: data?.id || data?._id,
      }
    );
    return newUser;
  },
  delete: async (args) => {
    return await User.findByIdAndDelete(args?.id);
  },
};

export default userController;
