import "./MovieList.css";
function MovieList({ movie }) {
  return (
    <div className="movie-card">
      <img className="movie-card-img" src={movie.image} />
      <div className="movie-desc">
        <p>Movie: {movie.title}</p>
        <p>Year: {movie.year}</p>
        <p>Runtime: {movie.runtime}</p>
        <p>
          Genres:{" "}
          {movie.genres.map((genre) => (
            <span className="btn-genres">{genre}</span>
          ))}
        </p>
        <p>IMDB Ratings: {movie.imdbRating}</p>
        <p>IMDB Votes: {movie.imdbVotes}</p>
      </div>
    </div>
  );
}

export default MovieList;
