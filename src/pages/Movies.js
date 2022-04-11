import React, { useState } from "react";
import MovieForm from "../components/MovieForm";
import Movie from "../components/Movie";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    const removeMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    };

    const renderMovies =
        movies.length > 0
            ? movies.map((movie) => {
                  return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
              })
            : "추가된 영화가 없습니다.";

    return (
        <>
            <div>
                <MovieForm addMovie={addMovie} />
                {renderMovies}
            </div>
        </>
    );
};

export default Movies;
