import React, { Component } from 'react';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      avatar_url,
      html_url,
      starred_url,
      id,
      type,
      location,
      bio,
      blog,
      email,
      followers,
      following,
      piblic_reops,
      public_gists,
      hireable,
      name,
    } = this.props.user;
    return <div>{this.name}</div>;
  }
}

export default User;
