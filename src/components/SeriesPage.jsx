// components/SeriesPage.js
import React, { useState, useEffect } from "react";
import styles from "./Page.module.css";
import Title from "./Title";
const SeriesPage = () => {
  const [seriesData, setSeriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSeriesData();
  }, []);

  const fetchSeriesData = async () => {
    try {
      const response = await fetch("sample.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const filteredSeries = data.entries.filter(
        (entry) => entry.programType === "series" && entry.releaseYear >= 2010
      );
      const sortedSeries = filteredSeries.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setSeriesData(sortedSeries.slice(0, 21));
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
      <Title title={"Series"} />
      <div className={styles.page}>
        <ul className={styles.container}>
          {seriesData.map((series) => (
            <li key={series.title}>
              <div>
                <img src={series.images["Poster Art"].url} alt={series.title} />
              </div>
              <p>{series.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SeriesPage;
