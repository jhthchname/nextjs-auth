import typeFormController from "../../../server/controller/typeform.controller";
import dbConnect from "../../../server/common/db";

export default async function handler(req, res) {
    dbConnect()
    if (["DELETE"].includes(req.method)) {
        try {
            let result = await typeFormController.delete(req.query)
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}