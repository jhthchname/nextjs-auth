import userController from "../../../server/controller/user.controller";
import dbConnect from "../../../server/common/db";
import { verifyToken } from "../../../server/auth/auth.service";

export default async function handler(req, res) {
    dbConnect()
    if (req.method === 'PUT') {
        try {
            await verifyToken(req?.headers?.authorization);
            let result = await userController.update(req?.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}