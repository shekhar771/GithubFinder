import React from 'react';
import UserItems from './UserItems';
import spiner from '../layouts/spiner';

let Users = ({ users, loading }) => {
  // if (loading) {
  //    <spiner />
  // } else {
  <div style={userStyle}>
    {users.map((user) => (
      <UserItems key={user.id} user={user} />
    ))}
  </div>;
};
// };

let userStyle = {
  display: 'grid',
  // gridTemplateColumns: 'repeat(3, 1fr)',
  // gridGap: '1rem',
  // textAlign: 'center',
};
export default Users;
