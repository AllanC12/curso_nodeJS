const express = require("express");
const app = express();
const port = 2222;
const exphbs = require("express-handlebars");

const User = require("./models/User");
const connection = require("./database/conn");

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs.engine());

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.post('/users/update',async (req,res) => {
  const id = req.body.id
  const name = req.body.name
  const occupation = req.body.occupation
  let newsletter = req.body.newsletter

  if(newsletter === 'on'){
    newsletter = true
  }else{
    newsletter = false
  }

  const updateData = {
    id,
    name,
    occupation,
    newsletter
  }

  await User.update(updateData,{where : {id: id}})
  res.redirect('/')
})

app.get('/users/edit/:id', async (req,res) => {
  const id = req.params.id
  const user = await User.findOne({raw: true, where: {id: id}})
  res.render('edit',{user})
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
  .catch((error) => {
    console.log(error);
  });
