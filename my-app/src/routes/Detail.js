import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  console.log("id : ", id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    console.log(json.data.movie.genres);
    setMovie(json.data.movie);
    setLoading(false);
  };
  console.log(id);
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.floater}>
      <div className={styles.box}>
        {loading ? (
          <div className={styles.loader}>
            <span>Loading...</span>
          </div>
        ) : (
          <MovieDetail
            title={movie.title}
            rating={movie.rating}
            cover={movie.medium_cover_image}
            year={movie.year}
            desc={movie.description_full}
            genres={movie.genres}
          />
        )}
      </div>
    </div>
  );
}

export default Detail;
