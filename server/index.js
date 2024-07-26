import express from "express";
import next from "next";
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";
import session from "express-session";
import { v4 } from "uuid";
import baseRoute from "./route/index.js";
import { PORT, NODE_ENV, JWT_SECRET } from "./common/settings.js";
import "./common/db.js";

const dev = NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

app
  .prepare()
  .then(async () => {
    server
      .use(
        session({
          genid: (_) => v4(),
          secret: JWT_SECRET,
          resave: false,
          saveUninitialized: false,
          cookie: {
            secure: !dev,
          },
        })
      )
      .use(express.json({ limit: "100mb" }))
      .use(express.urlencoded({ extended: true }))
      .use(
        cors({
          credentials: true,
          origin: ['http://localhost:3000', 'https://manage-next-13-nf9i.vercel.app'],
          methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
          exposedHeaders: "*",
        })
      )
      .use(cookieParser())
      .use(bodyParser.json())
      .use(passport.initialize())
      .use(passport.session())
      .use("/", express.static("src"))
      .use(baseRoute)
      .options('*', cors())
      .use((req, res, next) => {
        console.log(`Received ${req.method} request for ${req.url}`);
        next();
      });

    server.all("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`🚀 Server ready at http://localhost:${PORT}`);
      // console.log(`🚀 Database ready at PORT 27017`)
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
