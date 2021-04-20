import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import './index.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
