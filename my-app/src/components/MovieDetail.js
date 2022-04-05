import PropTypes from "prop-types";
import styles from "./MovieDetail.module.css";

function MovieDetail({ title, rating, cover, year, desc, genres }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <h2>{`(${rating} / 10)`}</h2>
      </div>
      <div className={styles.contents_wrapper}>
        <div>
          <img className={styles.cover} src={cover}></img>
          <div className={styles.year}>{year}</div>
        </div>
        <div className={styles.description}>{desc}</div>
      </div>
      <div>
        <ul className={styles.genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  cover: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
