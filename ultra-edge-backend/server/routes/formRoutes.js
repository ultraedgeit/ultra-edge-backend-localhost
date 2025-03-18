const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

// get
router.get("/", formController.getForm);

// post
router.post("", formController.submitForm);

module.exports = router;