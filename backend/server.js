const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");

const app = express();

dotenv.config();
app.use(cors()); // Enable CORS

const port = process.env.PORT || 5000;
const apiNews = process.env.NEWS_API;

app.get("/news", async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiNews}`
    );
    res.json(response.data.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch news data" });
  }
});

app.get("/weather", async (req, res) => {
  const apiKey = process.env.WEATHER;
  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Chicago?unitGroup=metric&key=${apiKey}&contentType=json`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    // Send the weather data as a JSON response
    res.json(weatherData);
  } catch (error) {
    // Handle any errors that occur during the API request
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching weather data." });
  }
});

app.listen(port, () => {
  console.log("Running on port for backend");
});
