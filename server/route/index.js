import express from "express";
import userRoute from "./user.route.js";
import authRoute from "./auth.route.js";
import typeFormRoute from "./typeform.route.js";
import formRoute from "./form.route.js";

const baseRoute = express.Router();

baseRoute.use("/user", userRoute);
baseRoute.use("/auth", authRoute);
baseRoute.use("/type-form", typeFormRoute);
baseRoute.use("/form", formRoute);

export default baseRoute;
