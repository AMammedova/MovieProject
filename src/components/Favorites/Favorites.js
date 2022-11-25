import React, { createElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBasket } from '../../actions/basketActions';
import './Favorites.css';


function Favorites() {
    let demostate = {
        title: 'New list'
    }

    const basket = useSelector(state=>state.basket);

    let inputChangeHandler = (e) => {
        setState({ title: e.target.value });
    }

    const handleClick = (e) => {
        if(basket.data.length>0)
        {
            let el = document.createElement('a');
            el.innerText='Go to basket';
            el.classList.add('btn'); el.classList.add('btn-info'); el.classList.add('p-2'); el.classList.add('text-white');
            el.setAttribute('href','/basket');
            el.setAttribute('title',title);
            document.querySelector('.favorites').insertBefore(el,e.target);
            e.target.remove();
            if(window.localStorage.hasOwnProperty("data"))
            {
                let arr = JSON.parse(window.localStorage.getItem('data'));
                arr.push({title:title, movies:basket.data})
                window.localStorage.setItem('data', JSON.stringify(arr))
            }
            else
            {
                window.localStorage.setItem('data', JSON.stringify([{title:title, movies:basket.data}]))
            }
            document.querySelectorAll('.btn-danger').forEach(x=>x.classList.add('disabled'));
            document.querySelectorAll('.movie-item__add-button').forEach(x=>x.disabled=true);

        }
        else {
            console.log('Please select minimum 1 film!')
        }
    }

    const dispatch = useDispatch();
    
    const deleteItem = (id) => {
        dispatch(removeFromBasket(id))
    }

    const [state, setState] = React.useState(demostate)

    const {title} = state;

    return (
        <div className="favorites">
            <input className="favorites__name" onChange={inputChangeHandler} value={title} />
            <ul className="favorites__list">
                {basket.data.map((item) => {
                    return <div className='d-flex justify-content-between align-items-center p-2' key={item.imdbid}><li>{item.title} ({item.year})</li> <button type='button' className='btn btn-danger d-flex justify-content-center align-items-center p-0' onClick={()=>deleteItem(item.imdbid)}><i className='bx bx-x bx-sm'></i></button></div>; 
                })}
            </ul>
            <button type="button" onClick={(e)=>handleClick(e)} className="favorites__save">Save</button>
        </div>
    );

}

export default Favorites;