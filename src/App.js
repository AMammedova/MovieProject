import React from 'react';
import { BrowserRouter as Router,  Routes,  Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import BasketPage from './pages/BasketPage/BasketPage';

import './reset.css';
import './common.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
          <Route path='/' element={<MainPage/>} />
          <Route path="/list/:id" element={<ListPage/>} />
          <Route path="/basket" element={<BasketPage/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
