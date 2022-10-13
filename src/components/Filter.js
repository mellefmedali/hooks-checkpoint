import { movieList } from "./MovieList";

const RatingFilter = (props) => {

    return (
        <>
            <form>
                <label htmlFor="frateValue">Filter by rating :</label>
                <input
                    type="number"
                    name="rateValue"
                    // value={props.name}
                    // onChange={props.handleFilterRating}
                />
                <button onClick={props.handleFilterRating}>Filter</button>
            </form>
        </>
    )
}

export default RatingFilter