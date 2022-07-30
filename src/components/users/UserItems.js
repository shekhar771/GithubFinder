import React from 'react';
import PropTypes from 'prop-types';

const UserItems = ({ user: { id, login, avatar_url, html_url, loading } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt='imagqe'
        className='round-img  centerImg'
        style={{ width: '60px' }}
      />
      <h3> {login}</h3>
      <a href={html_url} className='btn btn-dark btn-sm my-1'>
        Github
      </a>
    </div>
  );
};

UserItems.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItems;
