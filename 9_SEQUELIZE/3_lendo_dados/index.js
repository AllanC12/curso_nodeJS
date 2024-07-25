const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const conn = require("./database/conn");
const port = 4000;

const User = require("./models/User");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get('/',async (req,res) => {

    const users = await User.findAll({raw: true})
    console.log(users)
    res.render("home",{users})
})

conn
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("app running on port " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
