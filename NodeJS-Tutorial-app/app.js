var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Add a user object using the request params with the keys: name, age and sex
// Using a get route for the '/.user' endpoint
app.get("/user", (req, res) => {
  // using req.query to extract the query parameters.
  // using destructuring to get the name, age and sex values from the query parameters.
  const { name, age, sex } = req.query;

  // Using object literal to create a user object with the keys assigning it to the variable 'userObject'
  const userObject = { name, age, sex };
  // Adding the user object to the request object using req.user.
  req.user = userObject;
  // Task 5: Returning the user object as a json object as a response
  res.send(JSON.stringify(userObject));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
