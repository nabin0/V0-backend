require("dotenv").config();
const connectDB = require("../db/connect");
const Doctor = require("../models/doctor");

const DoctorJson = require("./doctors.json");

const start = async () => {
  try {
    await connectDB("");
    await Doctor.create(DoctorJson);
    console.log("Doctor data POST success");
  } catch (error) {
    console.log(error);
  }
};


start();