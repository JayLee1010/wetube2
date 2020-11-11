import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";
const app = express();

const handleHome = (req, res) => res.send("Hello from Home");

const handleProfile = (req, res) => res.send("This is profile page");

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter); // "/user"로 들어가면 userRouter의 밑으로 들어가게됨

export default app;
