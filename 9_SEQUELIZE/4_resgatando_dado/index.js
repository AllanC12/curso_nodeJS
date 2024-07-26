const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 1000;

const Car = require("./models/Car");
const conn = require("./database/conn");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());

app.get("/", async (req, res) => {
  const listCars = await Car.findAll({raw: true})
  res.render("home",{listCars});
});

app.get("/cars/:id", async (req,res) => {
    const id = req.params.id
    const car = await Car.findOne({raw: true, where: {id: id}})
    console.log(car)
    res.render('cars',{car})
})

conn
  .sync()
  .then(() => {
    app.listen(port, (err) => {
      console.log(`app running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });