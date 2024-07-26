import authController from "../../../server/controller/auth.controller";
import dbConnect from "../../../server/common/db";
import { verifyToken } from "../../../server/auth/auth.service";
import { serialize } from 'cookie';

export default async function handler(req, res) {
    dbConnect()
    if (req.method === 'POST') {
        try {
            const user = await verifyToken(req?.headers?.authorization);
            let result = await authController.signout(user);
            res.setHeader('Set-Cookie', [
                serialize('user', '', {
                    maxAge: -1, // Remove the cookie
                    path: '/'
                }),
                serialize('token', '', {
                    maxAge: -1, // Remove the cookie
                    path: '/'
                })
            ]);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}