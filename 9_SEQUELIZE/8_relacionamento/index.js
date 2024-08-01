const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 3333;

const addresses = require('./models/Address')
const People = require("./models/People");
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
  res.render('persons',{people})
});

connection
//   .sync()
  .sync({force: true})
  .then(() => {
    app.listen(port, () => {
      console.log(`app running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err)
  });
