import React, { Component } from 'react';
import { useDispatch } from 'react-redux';
import { filter } from '../../actions/dataActions';
import './SearchBox.css';

function SearchBox() {
    const dispatch = useDispatch();
    const [state,setState]=React.useState({
        searchLine: ''
    })
    
    let searchLineChangeHandler = (e) => {
        setState({ searchLine: e.target.value });
    }
    let searchBoxSubmitHandler = (e) => {
        dispatch(filter(state.searchLine))
        e.preventDefault();
    }
    const { searchLine } = state;
    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        value={searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
    );
    
}
 
export default SearchBox;