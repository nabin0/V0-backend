const Doctor = require("../models/doctor")


const getAllDoctors = async (req, res) => {
  const doctorsData = await Doctor.find({});

  res.status(200).json({doctorsData });
};

const getAllTestDoctors = async (req, res) => {
  res.status(200).json({ msg: "All doctorsdata testing" });
};

module.exports = { getAllDoctors, getAllTestDoctors };
