const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const conn = require("./db/conn");

const User = require("./models/User")

const port = 2000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());


app.get('/users/create',(req,res) => {
  res.render('addUsers')
})

app.post('/users/create', async (req,res) => {
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if(newsletter === "on"){
    newsletter = true
  }else{
    newsletter = false
  }

   await User.create({name,occupation,newsletter})
  res.redirect('/')
})

app.get("/", (req, res) => {
  res.render("home");
});


conn
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
