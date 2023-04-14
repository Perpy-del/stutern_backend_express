const express = require("express");

const app = express();

// Add a user object using the request params with the keys: name, age and sex
// Using a get route for the '/.user' endpoint
app.get("/user/:name/:age/:sex", (req, res) => {
  // using req.params to extract the query parameters.
  // using destructuring to get the name, age and sex values from the query parameters.
  const { name, age, sex } = req.params;

  // Using object literal to create a user object with the keys assigning it to the variable 'userObject'
  const userObject = { name, age, sex };
  // Task 5: Returning the user object as a json object as a response
  // res.send(JSON.stringify(userObject));
  // OR
  res.json(userObject);
});

// Listening for a response from the server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// Passing the value of the keys in the url
// localhost:3000/user/name/age/sex
// localhost:3000/user/Perpetual/18/Female would return {"name":"Perpetual","age":"18","sex":"Female"} to the browser
