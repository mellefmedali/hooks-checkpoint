// Instructions
// Create the following components:
// MovieCard
// MovieList
// Filter ( title, rate)
// Every movie should have the following attributes: title, description, posterURL, rating
// The user should be:
// Able to add a new movie.
// Filter the movies with title/rating.
import "./MovieCard.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
export default function MovieCard(props) {
    return (
        <CardGroup>
            <Card className="card">
                <Card.Img className="photoCard" variant="top" src={props.source} />
                <Card.Body>
                    <Card.Title className="titleCard">{props.title}</Card.Title>
                </Card.Body>
                <Card.Footer><span>Rating : </span>{props.rating}/5</Card.Footer>
            </Card>
        </CardGroup>
    )
}

