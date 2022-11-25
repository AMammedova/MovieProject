import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ListPage.css';

function ListPage() {
    const [state, setState] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?i=${params.id}&apikey=fc1fef96`)
        .then(data=>setState(data.data));
    },[]);
    
    let link = `https://www.imdb.com/title/${params.id}/`;
    return (
        <div className="list-page w-100 container">
            <div className='film-card'>
                <h1 className="list-page__title fw-light">{state.Title} ({state.Year})</h1>
                <ul>
                    <li>
                        <img className='poster' src={state.Poster} />
                        <a href={link} className='btn btn-warning p-2 text-light' target="_blank">Go to "{state.Title}"</a>
                    </li>
                </ul>
            </div>
        </div>
    );

}

export default ListPage;