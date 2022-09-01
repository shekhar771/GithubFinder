import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/search';
import axios from 'axios';
import Alert from './components/layouts/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  SearchUsers = async (text) => {
    this.setState({ loading: true || Boolean });
    // if ((text = '')) {
    //   this.props.setAlert('please enter correct', 'light');
    // } else {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text || ' '}&client_id=${
        process.env.REACT_APP_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ loading: false, users: res.data.items });
    //   }
    // };
    // ClearUsers = () => {
    //   this.setState({ loading: false, users: [] });
    // };
    // SetAlert = (msg, type) => {
    //   this.setAlert({ alert: { msg: msg, type: type } });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar />
        {/* <Alert alert={this.state.alert} /> */}
        <Search
          searchUsers={this.SearchUsers}
          // ClearUsers={this.ClearUsers}
          // ClearBtn={users.length > 0 ? true : false}
          // SetAlert={this.setAlert}
        />
        <div className='container'>
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
// App.propTypes = {
//   SearchUsers: PropTypes.func.isRequired,
//   ClearUsers: PropTypes.func.isRequired,
// };
export default App;
