import React, { Component, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToBasket } from '../../actions/basketActions';
import './MovieItem.css';
let imageStyle={
    objectFit:"cover",
    width:'50%'
}

function MovieItem({ Title, Year, Poster, imdbID }) {
    const dispatch = useDispatch();
    return (
        <article className="movie-item">
            <img  id='user_src_input' className="movie-item__poster" style={imageStyle} src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button onClick={()=>{dispatch(addToBasket({imdbid:imdbID, title:Title, year:Year, poster:Poster}))}} type="button" className="movie-item__add-button">Добавить в список</button>
                <Link className='p-2 mt-2 d-block d-flex justify-content-center align-items-center' to={`/list/${imdbID}`}><span>Details </span><i className='bx bx-detail ms-3'></i></Link>
            </div>
        </article>
    );

}
export default MovieItem;