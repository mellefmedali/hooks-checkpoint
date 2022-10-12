import MovieCard from "./components/MovieCard";
import { movieList } from "./components/MovieList";
import { Button, CardGroup, Col, Container, Row } from "react-bootstrap";
import "./App.css"
import { useState } from "react";


const listOfMovies = movieList;
function App() {
  return (
    <>
      <h1>Hooks Checkpoint Flix</h1>
      <Button>Add movie</Button>
      <Container >
        <Row className="justify-content-md-center card-group">
          {listOfMovies.map(e => {
            return (
              <MovieCard title={e.title} description={e.description}
                posterURL={e.posterURL}
                rating={e.rating} />
            )
          })}
        </Row>
      </Container>
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