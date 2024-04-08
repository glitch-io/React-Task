// components/MoviesPage.js
import React, { useState, useEffect } from "react";
import styles from "./Page.module.css";
import Title from "./Title";
const MoviesPage = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const fetchMoviesData = async () => {
    try {
      const response = await fetch("sample.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const filteredMovies = data.entries.filter(
        (entry) => entry.programType === "movie" && entry.releaseYear >= 2010
      );
      const sortedMovies = filteredMovies.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setMoviesData(sortedMovies.slice(0, 21));
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Title title={"Movies"} />
      <div className={styles.page}>
        <ul className={styles.container}>
          {moviesData.map((movie) => (
            <li key={movie.title}>
              <img src={movie.images["Poster Art"].url} alt={movie.title} />
              <p>{movie.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MoviesPage;
