import MovieCard from "./components/MovieCard";
function App() {
  return (
    <>
    <h1>Hooks Checkpoint Flix</h1>
    <div className="App">
      <MovieCard title="Titre du film" source="https://cdn.sortiraparis.com/images/58/77381/742135-ima-le-film-avec-dadju-djimo-et-karidja-toure-la-bande-annonce.jpg" rating="4,5"/>
    </div>
    </>
  );
}

export default App;


// Instructions:
// Create the following components:
// MovieCard
// MovieList
// Filter ( title, rate)
// Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// Able to add a new movie.
// Filter the movies with title/rating.