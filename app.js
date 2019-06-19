// app.js
// include packages and define server related variables
const express = require("express");
const exphbs = require("express-handlebars");
const customHelpers = require("./handlebars-helpers");

const bodyParser = require("body-parser");
const generateTrashTalk = require("./generateTrashTalk");
const app = express();
const port = 3000;

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// setting routes
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const job = req.body.jobs;
  console.log("job:", job);
  const talkTrash = generateTrashTalk(job);
  res.render("index", { talkTrash: talkTrash, job: job });
});

// starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`);
});
