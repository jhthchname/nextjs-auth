import userController from "../../../server/controller/user.controller";
import dbConnect from "../../../server/common/db";
import { verifyToken } from "../../../server/auth/auth.service";

export default async function handler(req, res) {
  dbConnect();
  if (["GET", "DELETE", "PUT"].includes(req.method)) {
    try {
      let result = null;
      if (req.method === "DELETE") {
        await verifyToken(req.headers.authorization);
        result = await userController.delete(req.query);
      } else if (req.method === "PUT") {
        await verifyToken(req.headers.authorization);
        result = await userController.update(req.query, req.body);
      } else {
        result = await userController.user(req.query);
      }
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
