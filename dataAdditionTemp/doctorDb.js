require("dotenv").config();
const connectDB = require("../db/connect");
const Doctor = require("../models/doctor");

const DoctorJson = require("./doctors.json");

const start = async () => {
  try {
    await connectDB("mongodb+srv://nabinbhatt62:fWorWdxclnsdaTAu@v0.hfizt.mongodb.net/?retryWrites=true&w=majority&appName=V0");
    await Doctor.create(DoctorJson);
    console.log("Doctor data POST success");
  } catch (error) {
    console.log(error);
  }
};


start();