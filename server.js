const express = require("express");
const path = require("path");
const api = require("./server/routes/api");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use("/", api);

const port = 3030;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
