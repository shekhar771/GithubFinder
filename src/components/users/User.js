import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

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
    const { loading } = loading;
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>
          back to search
        </Link>
        hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger ' />
        )}
      </Fragment>
    );
  }
}

export default User;
