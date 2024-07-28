const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 2300;

const User = require('./models/User')
const connection = require("./database/conn");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());

app.use(
 express.urlencoded({
    extended: true
}))

app.use(express.json())

app.post("/users/delete/:id", async (req,res) => {
    const id = req.params.id
    await User.destroy({where: {id: id}})
    res.redirect('/')
})

app.get("/", async (req, res) => {
  const users = await User.findAll({raw: true})
  res.render("home",{users});
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
