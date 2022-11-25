import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import './BasketPage.css'

const BasketPage = () => {
  return (
<>
    <div className='container'>
    <div className='text-center p-3'>
        <h1 className='display-5'>Your Basket</h1>
        </div>
        <div className='d-flex justify-content-center align-items-between flex-column card-cont'>
    {
      JSON.parse(window.localStorage.getItem('data')).map((x)=>(
      <div className='text-center'>
        <h3 className='fw-bold mt-3'>{x.title}</h3>
        {x.movies.map(y=>(
          <div className='d-flex align-items-between film-card' key={y.imdbid}>
          <img src={y.poster} className='basket-img' />
          <h2 className='basket-film-title ms-4'>{y.title} ({y.year})</h2>
        </div>
        ))}
      </div>
      ))
    }
    </div>
    </div>
    </>
  )
}

export default BasketPage;


