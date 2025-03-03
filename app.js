require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 3000;

const doctor_routes = require("./route/doctors");

app.get("/", (req, res) => {
  res.send("🥳Welcome");
});

app.use("/api/doctors", doctor_routes);

const start = async () => {
  try {
    await connectDB("mongodb+srv://nabinbhatt62:fWorWdxclnsdaTAu@v0.hfizt.mongodb.net/?retryWrites=true&w=majority&appName=V0");
    app.listen(PORT, () => {
      console.log("Connected To PORT Successfully.");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
