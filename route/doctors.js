const express = require("express");
const router = express.Router();

const{
    getAllDoctors, getAllTestDoctors
} = require("../controller/doctors")

router.route("/").get(getAllDoctors)
router.route("/testRoute").get(getAllTestDoctors)


module.exports = router;