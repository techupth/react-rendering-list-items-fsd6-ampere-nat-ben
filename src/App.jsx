/** @jsxImportSource @emotion/react */
import "./App.css";
import movies from "./data/movies";
import { css } from "@emotion/react";

function App() {
  return (
    <div className="App">
      <h1>Movie List Section</h1>
      <section className="movie-list-section">
        {movies.map((movie, index) => {
          return (
            <div
              key={index}
              css={css`
                padding: 14px;
                background-color: white;
                margin: 32px;
                display: flex;
                gap: 30px;
                width: 400px;
                height: 250px;
                border-radius: 10px;
                display: flex;
                color: black;
                border: solid;
              `}
            >
              <div
                css={css`
                  width: 100px;
                  height: 100px;
                `}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                  css={css`
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                  `}
                />
              </div>
              <div
                css={css`
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                `}
              >
                <div>Title: {movie.title}</div>
                <div>Year: {movie.year}</div>
                <div>Runtime: {movie.runtime}</div>
                <div>
                  Genre:
                  <span
                    css={css`
                      margin-left: 5px;
                    `}
                  >
                    {movie.genres.map((genre, index) => (
                      <span
                        key={index}
                        css={css`
                          background-color: #eaac99;
                          color: black;
                          padding: 2px 5px;
                          border-radius: 10px;
                          margin-right: 5px;
                        `}
                      >
                        {genre}
                      </span>
                    ))}
                  </span>
                </div>
                <div>IMDB Ratings: {movie.imdbRating}</div>
                <div>IMDB Votes: {movie.imdbVotes}</div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
