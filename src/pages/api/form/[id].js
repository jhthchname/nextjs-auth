import formController from "../../../server/controller/form.controller";
import dbConnect from "../../../server/common/db";

export default async function handler(req, res) {
    dbConnect()
    if (["GET", "DELETE"].includes(req.method)) {
        try {
            let result = null
            if(req?.method === "DELETE") {
                result = await formController.delete(req.query)
            } else {
                result = await formController.form(req.query)
            }
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}