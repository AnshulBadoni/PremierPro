import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaPlayCircle,
  FaCalendarAlt,
  FaClock,
  FaShareAlt,
  FaPlay,
  FaDownload,
  FaTimes,
} from "react-icons/fa";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { fetchtvDetails } from "./api/detailApi";

const Details = ({ category }) => {
    const { id } = useParams();
    console.log(category);
    console.log(id);
    const [person, setPerson] = useState(null);
  
    useEffect(() => {
      // Fetch details based on the category
      const fetchData = async () => {
        try {
          let response;
          if (category === "tvshow") {
            response = await fetchtvDetails(id);
          }
          setPerson(response);
        } catch (error) {
          console.error(error);
          setPerson(null);
        }
      };
  
      fetchData();
    }, [id]);
    console.log(person)
  
    if (!person) {
      return <div>Loading...</div>;
    }
   return (
    <main>
      <article>
        {/* Movie Detail */}
        <section
          style={{
            background: `linear-gradient(90deg, rgba(18,16,24,1) 0%, rgba(18,16,24,0.9507) 31%, rgba(18,16,24,0.8240546218487395) 53%, rgba(18,16,24,0.6111694677871149) 75%, rgba(18,16,24,0.1601890756302521) 100%),url(${`https://image.tmdb.org/t/p/w500/${person.poster_path}`})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
          className="movie-detail"
        >
          <div className="container">
            <figure className="movie-detail-banner">
              <img
                src={`https://image.tmdb.org/t/p/w500/${person.poster_path}`}
                alt={person.title}
              />
              <button className="play-btn small">
                <FaPlayCircle />
              </button>
            </figure>
            <div className="movie-detail-content">
              <p className="detail-subtitle">Latest Season: {person.number_of_seasons}</p>
              <Link to={`/person/${id}/${person.name}`}>
                <h1 className="h1 detail-title">
                    {person.original_name}
                  {/* {firstName} <strong>{restNames.join(" ")}</strong> */}
                </h1>
              </Link>

              <div className="meta-wrapper">
                <div className="badge-wrapper">
                  <div className="badge badge-fill">18+</div>
                  <div className="badge badge-outline">
                    {person.original_language}
                  </div>
                </div>

                <div className="ganre-wrapper">
                  {person.genres.map((genre) => (
                    <a key={genre.id} href="#">
                      {genre.name},
                    </a>
                  ))}
                </div>
                <div className="date-time">
                  <div>
                    <FaCalendarAlt />
                    <time>
                      {person.first_air_date.split("-")[0]}
                    </time>{" "}
                  </div>
                </div>
                <Rating vote_average={person.vote_average} />
              </div>
              <p className="storyline">{person.overview}</p>
              <div className="details-actions">
                <button className="share">
                  <FaShareAlt />
                  <span>Share</span>
                </button>
                <div className="title-wrapper">
                  <p className="title">Prime Video</p>
                  <p className="text">Streaming Channels</p>
                </div>
                <button className="btn btn-primary">
                  <FaPlay />
                  <span>Watch Now</span>
                </button>
              </div>
              <a target="_blank" href={`https://image.tmdb.org/t/p/w500/${person.poster_path}`} download="" className="download-btn">
                <span>Download</span>
                <FaDownload />
              </a>
            </div>
          </div>
        </section>
      </article>
      
    </main>
   );
  };
  
  export default Details;