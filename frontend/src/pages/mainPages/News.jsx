import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../offScreen/Header.jsx";
import Sidebar from "../offScreen/Sidebar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faFlag,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import data from "./data.js";
import RightBar from "../offScreen/RightBar.jsx";

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/news");
        setNews(response.data);
      } catch (error) {
        console.error("error");
      }
    };

    fetchNews();
  }, []);

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get("http://localhost:5000/weather");
        setWeather(response.data);
      } catch (error) {
        console.error("There was an error processing this request.");
      }
    };

    fetchWeather();
  }, []);

  return (
    <div style={{ overflow: "hidden", height: "100vh" }}>
      <Header />
      <div className="mainForHome">
        <Sidebar />
        <div className="homeMain">
          <br></br>
          <div className="makeAPost">
            <h2>Weather</h2>
            {weather ? (
              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  borderRadius: "5px",
                }}
                key={weather.currentConditions.source}
              >
                <h3>
                  Temperature: {weather.currentConditions.temp} &#8451; OR{" "}
                  {weather.currentConditions.temp * 2 + 30} &#8457;
                </h3>
                <h3>
                  Feels Like: {weather.currentConditions.feelslike} &#8451; OR{" "}
                  {weather.currentConditions.feelslike * 2 + 30} &#8457;
                </h3>
                <p>Condition: {weather.currentConditions.conditions}</p>
              </div>
            ) : (
              <p>Loading weather...</p>
            )}
            <p style={{ fontSize: "10px", fontWeight: "bold" }}>
              Weather data from visualcrossing.com
            </p>
            <h2>Here is News for You:</h2>
            {console.log(news)}
            {news != "" ? (
              news.map((article, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    gap: "10px",
                    padding: "20px",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                >
                  <h3>{article.title}</h3>
                  <h4 style={{ color: "gray" }}>
                    Published By: {article.source.name}
                  </h4>
                  <div
                    style={{ width: "100%", borderBottom: "2px solid gray" }}
                  ></div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                      gap: "10px",
                      padding: "20px",
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }}
                  >
                    <h4>
                      Author:{" "}
                      {article.author == null
                        ? "Not Specified"
                        : article.author}
                    </h4>
                    <h6>Published on {article.publishedAt}</h6>
                    <p>{article.description}</p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find Out More
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading news...</div>
            )}
            <p style={{ fontSize: "10px", fontWeight: "bold" }}>
              News data from newapi.org
            </p>
          </div>

          <br></br>
          <br></br>
          <h3>&copy; 2023 HS Social</h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <RightBar />
      </div>
    </div>
  );
}
