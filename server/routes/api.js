const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Expense = require("../models/Expense");
const moment = require("moment");

mongoose.connect("mongodb://localhost/expensesDB", { useNewUrlParser: true });

const jsonFile = require("../../expenses.json");

// jsonFile.forEach((jf) =>
//   new Expense({
//     name: jf.name,
//     amount: jf.amount,
//     date: jf.date,
//     group: jf.group,
//   }).save()
// );

router.get("/expenses", function (req, res) {
  Expense.find({}, null, { sort: { date: -1 } }, function (err, expenses) {
    res.send(expenses);
  });
});

module.exports = router;
