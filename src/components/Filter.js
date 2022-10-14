import { movieList } from "./MovieList";
import MovieCard from "./MovieCard";
import { useState } from "react";
import "./Filter.css"

const Filter = (props) => {
    const [ratingSearch , setratingSearch] =useState(0);
    const handleRatingSearch = e => setratingSearch(e.target.value);
    const [titleSearch , setTitleSearch] =useState("");
    const handleTitleSearch = e => setTitleSearch(e.target.value)

    return (
        <>
            <form style={{backgroundColor:"red"}}>
                <label htmlFor="rateValue">Filter by rating :</label>
                <input
                    type="number"
                    name="rateValue"
                    // value={props.name}
                    onChange={handleRatingSearch}
                />
            </form>

            <form style={{backgroundColor:"blue"}}>
                <label htmlFor="titleValue">Filter by Title :</label>
                <input
                    type="text"
                    name="titleValue"
                    // value={props.name}
                    onChange={handleTitleSearch}
                />
            </form>

            {console.log(ratingSearch)}
            <div className="card-group">
            {
            props.list.filter(
                x=>x.title.toLocaleLowerCase().includes(titleSearch.toLocaleLowerCase())
            ).filter(
                e=>e.rating>=ratingSearch).map(
                    v=> <MovieCard posterURL={v.posterURL} title={v.title} description={v.description} rating={v.rating} />)
            }
            </div>
        </>
    )
}
export default Filter