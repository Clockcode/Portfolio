const express = require("express");
const app = express();
const path = require("path");
// set up the template engine
app.set("views", "./views");
app.set("view engine", "pug");
// sets port 8080 to default or unless otherwise specified in the environment
app.set("port", process.env.PORT || 8080);

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

app.listen(app.get("port"));
