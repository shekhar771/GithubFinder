import React from 'react';
import PropTypes from 'prop-types';

let Navbar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={props.icon}></i>
        {props.title}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  title: ' github-Finder',
  icon: 'fab fa-github',
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
