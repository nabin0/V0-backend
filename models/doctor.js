const mongoose = require("mongoose");

const defaultImageUrl = "https://i.imgur.com/po02swl.jpeg";
const contactIconURl = "https://i.imgur.com/gKcZHiKb.jpg";

const AppointmentDetailsSchema = new mongoose.Schema({
  description: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now },
  time: {
    type: String,
    required: true,
    default: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }),
  },
});

const DoctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  appointmentDetails: { type: AppointmentDetailsSchema, required: true },
  imageUrl: { type: String, required: true, default: defaultImageUrl },
  contactIconUrl: { type: String, required: true, default: contactIconURl },
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
