const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const port = 5555;

const taskRoutes = require('./routes/taskRoutes')

const conn = require("./db/conn");

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static('public'))

app.use(express.json());

app.use('/tasks',taskRoutes)

conn
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`app running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
