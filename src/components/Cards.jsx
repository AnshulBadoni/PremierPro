import React, { useState, useEffect } from "react";
import { fetchData } from "./api/apiCall"; // Import the fetchData function
import { Link } from "react-router-dom";
import { FaPlayCircle, FaClock, FaStar } from "react-icons/fa";

const Cards = () => {
  const [poster, setPoster] = useState([]);
  const [category, setCategory] = useState("Movies");

  useEffect(() => {
    const fetchDataForCategory = async () => {
      try {
        const response = await fetchData(category); // Fetch data based on the selected category
        setPoster(response);
      } catch (error) {
        console.error(error);
        setPoster([]);
      }
    };

    fetchDataForCategory();
  }, [category]); // Fetch data whenever the category changes

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };


  return (
    <section className="top-rated">
      <div className="container">
        <p className="section-subtitle">Online Streaming</p>
        <h2 className="h2 section-title">All {category}</h2>
        <ul className="filter-list">
          <li>
            <button
              className="filter-btn"
              onClick={() => handleCategoryChange("Movies")}
            >
              Movies
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={() => handleCategoryChange("Shows")}
            >
              TV Shows
            </button>
          </li>
          
        </ul>
        <ul className="movies-list">
          {poster.map((image) => (
            <li key={image.id}>
              <div className="movie-card">
              <Link to={`/${category}/${image.id}`}>
                  <figure className="card-banner">
                    <button className="play-btn cards">
                      <FaPlayCircle />
                    </button>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`}
                      alt={image.title}
                    />
                  </figure>
                </Link>
                <div className="title-wrapper">
                  {/* <Link to={`/person/${image.id}`}> */}
                    <h3 className="card-title">{image.title}</h3>
                  {/* </Link> */}
                  <time dateTime={category === "Movies" ? image.release_date : image.first_air_date}>
                  {/* Check if the date exists before splitting */}
                  {category === "Movies" && image.release_date ? image.release_date.split("-")[0] : ''}
                  {category === "Shows" && image.first_air_date ? image.first_air_date.split("-")[0] : ''}
                </time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">
                    {image.original_language}
                  </div>
                  <div className="duration">
                    <FaClock />
                    <time dateTime="PT122M">NA</time>
                  </div>
                  <div className="rating">
                    <FaStar />
                    <data>{image.vote_average}</data>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Cards;
