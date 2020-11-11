import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on: http://localhost:${PORT}`);

const handlehome = (req, res) => res.send("Hello from Home");

const handleprofile = (req, res) => res.send("This is profile page");

const betweenHome = (req, res, next) => {
  console.log("I'm between");
  next();
};

app.listen(PORT, handleListening);

app.get("/", handlehome);

app.get("/profile", handleprofile);
