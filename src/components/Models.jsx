import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlayCircle,
  FaStar,
  FaClock,
  FaShareAlt,
  FaPlay,
  FaDownload,
  FaTimes,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const Models = () => {
  const { name } = useParams();
  const [videos, setVideos] = useState([]);
  const [backgroundImage, setBackgroundImage] = useState("");
  console.log(name);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/characters/name/${name}`
        );
        if (response.ok) {
          const data = await response.json();
          setVideos(data);

          // Select a random video
          const randomIndex = Math.floor(Math.random() * data.length);
          const randomVideo = data[randomIndex];

          // Set the background image
          setBackgroundImage(encodeURI(randomVideo.image));
        } else {
          throw new Error("Failed to fetch videos");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <section className="top-rated">
      <div
        style={{
          background: `linear-gradient(90deg, rgba(18,16,24,1) 0%, rgba(18,16,24,0.9507) 31%, rgba(18,16,24,0.8240546218487395) 53%, rgba(18,16,24,0.6111694677871149) 75%, rgba(18,16,24,0.1601890756302521) 100%),url(${backgroundImage}) `,
          position:"fixed",
          backgroundSize:"cover",
          top:"0",
          left:"0",
          width:"100vw",
          height:"100vw",
          zIndex:"-1"
        }}
      ></div>
      <br />
      <br />
      <div className="container">
        <p className="section-subtitle">{name}</p>
        <br />
        <ul className="movies-list">
          {videos.map((video) => (
            <li key={video._id}>
              <div className="movie-card">
                <Link to={`/person/${video._id}`}>
                  <figure className="card-banner">
                    <button className="play-btn cards">
                      <FaPlayCircle />
                    </button>
                    <img
                      src={video.image}
                      alt="Sonic the Hedgehog 2 movie poster"
                    />
                  </figure>
                </Link>
                <div className="title-wrapper">
                  <Link to={`/person/${video._id}`}>
                    <h3 className="card-title">{video.title}</h3>
                  </Link>
                  <time dateTime={2022}>2022</time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">{video.quality}</div>
                  <div className="duration">
                    <FaClock />
                    <time dateTime="PT122M">NA</time>
                  </div>
                  <div className="rating">
                    <FaStar />
                    <data>{video.rating}</data>
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

export default Models;
