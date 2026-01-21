const express = require("express");
const path = require("path");
const pagesRoutes = require("./routes/Pages");

const app = express();

app.use(express.static(path.join(process.cwd(), "public")));
app.use("/", pagesRoutes);

module.exports = app;
