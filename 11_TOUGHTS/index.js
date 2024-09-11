const express = require("express");
const app = express();
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const flash = require("express-flash");
const exphbs = require("express-handlebars");

const port = 3000;

const conn = require("./db/conn");

//routes
const toughtRoutes = require('./routes/toughtRoutes')

//models
const User = require('./models/User')
const Tought = require('./models/Tought')

//controller
const ToughtController = require('./controllers/ToughtController')

//template engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

//body response
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json())

//session middleware
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret',
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function(){},
            path: require('path').join(require('os').tmpdir(),'sessions')
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 360000),
            httpOnly: true
        }
    })
)

//flash messages
app.use(flash())

//public path
app.use(express.static('public'))

//set session to res
app.use((req,res, next) => {
    if(req.session.userid){
        res.locals.session = req.session
    }

    next()
})

app.use('/toughts',toughtRoutes)
app.get('/',ToughtController.showToughts)


conn
//   .sync({force: true})
  .sync()
  .then(() => {
    app.listen(port);
  })
  .catch((error) => {
    console.log(error);
  });
