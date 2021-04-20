const projects = [
  {
    name: "My Community",
    img: "my-community",
    page_link: "my-community",
    github_link: "#",
    figma_link:
      "https://www.figma.com/proto/eFgbvjN4Hf6YA0SFumL8NS/my-Community?scaling=contain&node-id=259%3A2293",
    website_link: "#",
    desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    name: "Lifestraw",
    img: "lifestraw",
    page_link: "lifestraw",
    github_link: "#",
    figma_link: "#",
    website_link: "#",
    desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    name: "Journal",
    img: "journal-app",
    page_link: "journal-app",
    github_link: "#",
    figma_link: "#",
    website_link: "#",
    desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
  {
    name: "Notes",
    img: "notes-logo",
    page_link: "notes-app",
    github_link: "#",
    figma_link: "#",
    website_link: "#",
    desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
  },
];

const express = require("express");
const app = express();
const path = require("path");
// set up the template engine
app.set("views", "public/views");
app.set("view engine", "pug");
// sets port 8080 to default or unless otherwise specified in the environment
app.set("port", process.env.PORT || 8080);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.pug", { projects: projects });
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
