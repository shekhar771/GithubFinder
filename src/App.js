import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/search';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text || ' '}&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items });
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
