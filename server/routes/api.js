onst express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Expense = require("../models/Expense");
const moment = require("moment");

mongoose.connect("mongodb://localhost/expensesDB", { useNewUrlParser: true });



module.exports = router;