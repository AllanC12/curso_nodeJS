const express = require("express");
const app = express();
const mysql = require("mysql");
const exphbs = require("express-handlebars");

const port = 5000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/books/insert_books", (req, res) => {
  const title = req.body.title;
  const pages = req.body.pages;

  const query = `INSERT INTO books (title,pages) VALUES ('${title}', '${pages}')`;
  conn.query(query, (err) => {
    console.log(err);
  });

  res.redirect("/books");
});

app.get("/books", (req, res) => {
  const sql = `SELECT * FROM books`;

  conn.query(sql, (err, data) => {
    if (err) {
      throw new Error(err);
    }

    const books = data;

    console.log(books);

    res.render("books", { books });
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(sql, (err, data) => {
    if (err) {
      throw new Error(err);
    }

    const book = data[0];

    res.render("book", { book });
  });
});

app.get('/books/edit/:id',(req,res) => {
  const id = req.params.id;

  const sql = `SELECT * FROM books WHERE id = ${id}`

  conn.query(sql,(err,data) => {
    if(err){
      throw new Error(err)
    }

    const book = data[0]

    res.render('editbook',{book})
  })
})

app.post('/books/updatebook', (req,res) => {
  const id = req.body.id
  const title = req.body.title
  const pages = req.body.pages

  const sql = `UPDATE books SET title = '${title}', pages = '${pages}' WHERE id = ${id}`

  conn.query(sql,(err) => {
    if(err){
      throw new Error(err)
    }

    res.redirect('/books')
  })
})

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "database_01",
});

conn.connect((err) => {
  if (err) {
    throw new Error(err);
  }

  app.listen(port, () => {
    console.log(`app rodando na porta ${port}`);
  });
});
