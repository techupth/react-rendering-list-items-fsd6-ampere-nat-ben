import "./App.css";
import MovieList from "./Components/MovieList";
import movies from "./data/movies.jsx";
function App() {
  return (
    <div className="App">
      <h1>Movie List Section</h1>
      <section className="movie-list-section">
        {movies.map((movie, index) => (
          <MovieList index={index} movie={movie} />
        ))}
      </section>
    </div>
  );
}

export default App;
