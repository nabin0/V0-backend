const getAllDoctors = async (req, res) => {
  res.status(200).json({ msg: "All doctorsdata" });
};

const getAllTestDoctors = async (req, res) => {
  res.status(200).json({ msg: "All doctorsdata testing" });
};

module.exports = { getAllDoctors, getAllTestDoctors };
