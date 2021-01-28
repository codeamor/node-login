"use strict";

const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);

app.get("/", (req, res) => {
  res.render("home/index");
});

app.get("/login", (req, res) => {
  res.render("home/login");
});

module.exports = app;
