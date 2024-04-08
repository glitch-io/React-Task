import Title from "./Title";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
const data = [
  {
    id: 1,
    name: "Popular Movies",
    imgUrl:
      "https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo=",
  },
  {
    id: 2,
    name: "Popular Series",
    imgUrl:
      "https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo=",
  },
];
function HomePage() {
  return (
    <div>
      <Title title={"Titles"} />
      <div className={styles.hero}>
        <ul className={styles.container}>
          {data.map((item) => (
            <Link to="/series" key={item.id}>
              <div>
                <img src={item.imgUrl} />
              </div>
              <p>{item.name}</p>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
