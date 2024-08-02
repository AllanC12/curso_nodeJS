const express = require("express");
const app = express();
const port = 1212;

const exphbs = require("express-handlebars");

const People = require('./models/People')
const Address = require('./models/Address')
const connection = require("./database/conn");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static("public"));

app.post("/person/add_person", async (req,res) => {
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if(newsletter ===  "on"){
    newsletter = true
  }else{
    newsletter = false
  }

  await People.create({name,occupation,newsletter})
  res.redirect("/")
})

app.post("/person/add_address", async (req,res) => {
  const PersonId = req.body.PersonId
  const street = req.body.street
  const number = req.body.number
  const city = req.body.city

  await Address.create({street,number,city,PersonId})
  res.redirect("/")
})

app.get("/add_person", (req, res) => {
  res.render("addPerson");
});

app.get("/person/:id", async (req, res) => {
  const id = req.params.id;
  const people = await People.findOne({ raw: true, where: { id: id } });
  res.render("peopleAddress", {people});
});

app.get("/", async (req, res) => {
  const people = await People.findAll({ raw: true });
  res.render('people',{people})
});

connection
  // .sync()
  .sync({force: true})
  .then(() => {
    app.listen(port, () => {
      console.log(`app running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
