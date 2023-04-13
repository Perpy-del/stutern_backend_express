const express = require("express");

const app = express();

// Add a user object using the request params with the keys: name, age and sex
// Using a get route for the '/.user' endpoint
app.get("/user/:name/:age/:sex", (req, res) => {
  // using req.query to extract the query parameters.
  // using destructuring to get the name, age and sex values from the query parameters.
  const { name, age, sex } = req.params;

  // Using object literal to create a user object with the keys assigning it to the variable 'userObject'
  const userObject = { name, age, sex };
  // Adding the user object to the request object using req.user.
  req.user = userObject;
  // Task 5: Returning the user object as a json object as a response
  res.send(JSON.stringify(userObject));
});

// Listening for a response from the server
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
