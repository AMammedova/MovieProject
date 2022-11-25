import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../actions/dataActions';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies = () => {

    const data = useSelector(state=>state.data.data);
    const error = useSelector(state=>state.data.error);
    return (
        <>
            <ul className="movies">
                {data?data.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                )):<div>Not found {error}</div>}
            </ul>
        </>

    );
}

export default Movies;