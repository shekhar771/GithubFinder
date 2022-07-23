import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import UserItems from './components/users/UserItems';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <UserItems />
      </div>
    );
  }
}

export default App;
