import React from 'react';
import UserItem from './UserItems';

const Users = (props) => {
  // if (condition) {
  // } else {
  // }
  return (
    <div style={userStyle}>
      {props.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  textAlign: 'center',
};

export default Users;
