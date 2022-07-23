import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserItems extends Component {
  state = {
    id: 'id',
    user: 'mojombo',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  };
  static propTypes = {};

  render() {
    return <div>UserItems</div>;
  }
}

export default UserItems;
