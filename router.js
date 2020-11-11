import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("Hi"));
userRouter.get("/edit", (req, res) => res.send("edit page"));
userRouter.get("/Password", (req, res) => res.send("Password page"));
