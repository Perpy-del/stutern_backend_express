const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 8080;

app.get("/api", function (req, res) {
  res.send("Welcome to Dad Jokes");
});

// Create a get request to get a random joke using the API URL
const fetchDadJokes = {
  // Get method
  method: "GET",
  // API URL
  url: "https://dad-jokes.p.rapidapi.com/random/joke",
  // Headers containing the content type, API key and API Host
  headers: {
    "content-type": "application/json",
    "X-RapidAPI-Key": "85e4497a49msh78d19b288d2c227p1592c6jsn862d0f708ac1",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

app.get("/api/jokes", async function getDadJokes(req, res) {
  try {
    const response = await axios.request(fetchDadJokes);

    res.status(200).json({
      message: "Joke generated successfully",
      status: "success",
      data: {
        Title: `${response.data.body[0].type}`,
        Joke: `${response.data.body[0].setup}`,
        Punchline: `${response.data.body[0].punchline}`,
      },
    });
    // return (
    //   `Title: ${response.data.body[0].type} \n Joke: ${response.data.body[0].setup}, ${response.data.body[0].punchline}`
    //   );
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
