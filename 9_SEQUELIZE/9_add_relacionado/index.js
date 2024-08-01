const express = require("express");
const app = express();
const port = 1212;

const exphbs = require("express-handlebars");

const People = require('./models/People')
const connection = require("./database/conn");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.get("/", async (req, res) => {
  const people = await People.findAll({raw: true})
  res.render('people',{people});
});

connection
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`app running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
