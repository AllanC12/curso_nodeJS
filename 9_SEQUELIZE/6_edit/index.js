const express = require("express");
const app = express();
const port = 1500;
const exphbs = require("express-handlebars");

const connection = require("./database/connection");
const User = require("./models/User");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.use(express.json());

app.get('/users/edit/:id', async (req,res) => {
    const id = req.params.id
    const user = await User.findOne({raw: true, where: {id: id}})
    console.log(user)
    res.render('edit',{user})
})

app.get('/',async (req,res) => {
   const users = await User.findAll({raw: true})
   res.render('home',{users})
})

connection
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("listening on port " + port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
