import React from 'react';
const UserItems = ({ user: { id, login, avatar_url, html_url } }) => {
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

export default UserItems;
