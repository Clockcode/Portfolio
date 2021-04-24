const projects = [
  {
    name: "My Community",
    img: "my-community",
    page_link: "my-community",
    github_link: "#",
    figma_link:
      "https://www.figma.com/proto/eFgbvjN4Hf6YA0SFumL8NS/my-Community?scaling=contain&node-id=259%3A2293",
    website_link: "#",
    desc: "Side project that I am working to bring to life.",
  },
  {
    name: "Lifestraw",
    img: "lifestraw",
    page_link: "lifestraw",
    github_link: "#",
    figma_link:
      "https://www.figma.com/proto/ExTcf28THDNrPqXo7AUJz3/Product-Landing-Page-Day-3?page-id=0%3A1&node-id=2%3A21&viewport=-205%2C256%2C0.3363185524940491&scaling=scale-down",
    website_link: "#",
    desc: "Home page redesign of an existing product that I love",
  },
  {
    name: "Journal",
    img: "journal-app",
    page_link: "journal-app",
    github_link: "#",
    figma_link:
      "https://www.figma.com/proto/2khf7C5fWWXfo84ub9Wm76/Journal-Home-Screen?page-id=0%3A1&node-id=3%3A2&viewport=399%2C228%2C0.8290854692459106&scaling=scale-down",
    website_link: "#",
    desc: "Welcome screen designed for a customer project.",
  },
  {
    name: "Notes",
    img: "notes-logo",
    page_link: "notes-app",
    github_link: "#",
    figma_link:
      "https://www.figma.com/file/dKVuLrjE2kRU3ZyNGuVOB8/App-Logo-Design?node-id=0%3A1",
    website_link: "#",
    desc: "An icon designed for a freelance project",
  },
  {
    name: "Punica",
    img: "punica",
    page_link: "punica",
    github_link: "#",
    figma_link: "#",
    website_link: "punica.ca",
    desc: "Freelance wordpress project for an accountant.",
  },
  {
    name: "Tuber Support",
    img: "tuber-support",
    page_link: "tuber-support",
    github_link: "#",
    figma_link: "#",
    website_link: "tubersupport.com",
    desc: "Freelance wordpress project for a youtuber service team.",
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
