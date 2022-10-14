import MovieCard from "./components/MovieCard";
import { movieList } from "./components/MovieList";
import { Button, CardGroup, Col, Container, Form, Row } from "react-bootstrap";
import "./App.css"
import { useState } from "react";
import NewMovie from "./components/NewMovie";
import Filter from "./components/Filter";

function App() {
  const [name, setName] = useState("default name");
  const [description, setDescription] = useState("");
  const [posterURL, setposterURL] = useState("");
  const [rating, setRating] = useState(0);
  const [listOfMovies, setList] = useState(movieList)
  const handleList = () => {
    setList(previous => [...previous,
    {
      title: name, description: description, posterURL: posterURL, rating: rating
    }]
    )
  }


  const handleName = variable => setName(variable.target.value);
  const handleDescription = event => setDescription(event.target.value);
  const handlephotoURL = event => setposterURL(event.target.value);
  const handleRating = event => setRating(event.target.value);

  return (
    <>
      <h1>Hooks Checkpoint Flix</h1>
      <NewMovie
        handleDescription={handleDescription}
        handleName={handleName}
        handlephotoURL={handlephotoURL}
        handleRating={handleRating}
      />
      <Button onClick={handleList}>Add movie</Button>
      <Filter list={listOfMovies} />
    </>
  );
}

export default App;


// Instructions:
// Create the following components:
// OK MovieCard
// OK MovieList
// Filter ( title, rate)
// OK Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// OK Able to add a new movie.
// Filter the movies with title/rating.