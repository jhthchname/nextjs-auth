import Form from "../model/form.js";

const findTypeFormById = async (id) => {
  let form = await Form.findById(id);
  if (!form) throw new Error("ไม่พบชื่อ Form นี้ในระบบ");
  return form;
};

const matchQuery = (args) => {
  let where = {};
  if (args?.query) {
    where = {
      $or: [
        { title: { $regex: args?.query, $options: "i" } },
        { detail: { $regex: args?.query, $options: "i" } },
      ],
    };
  }
  return where;
};

const formController = {
  forms: async (args) => {
    const forms = await Form.aggregate([
      {
        $match: matchQuery(args),
      },
      {
        $lookup: {
          from: "users",
          localField: "createdBy",
          foreignField: "_id",
          as: "createdByUser",
        },
      },
      {
        $unwind: {
          path: "$createdByUser",
          preserveNullAndEmptyArrays: true,
        },
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
    return forms?.length > 0 ? forms[0] : { total: 0, results: [] };
  },
  form: async (args) => {
    return await findTypeFormById(args?.id);
  },
  create: async (args, user) => {
    return await Form.create({ ...args, createdBy: user?.id || user?._id });
  },
  update: async (args, user) => {
    let form = await findTypeFormById(args?.id);
    if (typeof args?.status === "boolean") {
      form.status = args?.status;
      form.approveOn = new Date();
      form.approveBy = user?.id || user?._id;
    }
    if (args?.title) form.title = args?.title;
    if (args?.detail) form.detail = args?.detail;
    if (args?.type) form.type = args?.type;
    form.updatedOn = new Date();
    form.updatedBy = user?.id || user?._id;
    let newForm = await form.save();
    return newForm;
  },
  delete: async (args) => {
    return await Form.findByIdAndDelete(args?.id);
  },
};

export default formController;
