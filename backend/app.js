var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const adminRouter = require("./routes/admin")
const session = require("express-session")
const cors = require("cors")
const FileStore = require("session-file-store")(session);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  name: "session-id",
  secret: "Sample Cookie Parser Key",
  saveUninitialized: false,
  resave: false,
  store: new FileStore({ path: "./sessions/", retries: 0 })
}));

const corsOptions = {
  origin: 'http://local.host:3000',  //Your Client, do not write '*'
  credentials: true,
};
app.use(cors(corsOptions));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use("/api/admin", adminRouter)

app.all("*", (req, res, next)=>{
  res.send({ msg: "Landed on a 404"})
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;