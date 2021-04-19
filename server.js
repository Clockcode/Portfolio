const express = require("express");
const app = express();
const path = require("path");
// set up the template engine
app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.pug");
});
app.get("/my-community", (req, res) => {
  res.render("my-community.pug");
});
app.get("/journal", (req, res) => {
  res.render("journal.pug");
});
app.get("/lifestraw", (req, res) => {
  res.render("lifestraw.pug");
});
app.get("/notes", (req, res) => {
  res.render("notes.pug");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}!`);
});
