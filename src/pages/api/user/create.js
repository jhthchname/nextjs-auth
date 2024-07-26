import userController from "../../../server/controller/user.controller";
import dbConnect from "../../../server/common/db";

export default async function handler(req, res) {
    dbConnect()
    if (req.method === 'POST') {
        try {
            let result = await userController.create(req?.body);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}