import React from 'react';
import UserItems from './UserItems';
import Spinner from '../layouts/spiner';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  if (loading === true) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  textAlign: 'center',
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default Users;
