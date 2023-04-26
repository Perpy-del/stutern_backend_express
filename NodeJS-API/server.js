const axios = require("axios");

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

//   Using aync-await keywords and the try-catch block to get the response from the server
async function getDadJokes() {
  try {
    const response = await axios.request(fetchDadJokes);
    // console.log(response.data);
    console.log(
      `Title: ${response.data.body[0].type} \n Joke: ${response.data.body[0].setup}, ${response.data.body[0].punchline}`
    );
  } catch (error) {
    console.error(error);
  }
}

getDadJokes();

// Everytime you run node(node server.js), it comes up with a new random dadjoke in the format below.

/* Title: period
 Joke: What did the Scottish lass say when she heard there would be universal free period products? Everyone! All together now!, “It’s about bloody time!” 
 */
