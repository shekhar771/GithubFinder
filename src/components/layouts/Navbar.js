import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'F:\\projects\\github-finder\\src\\App.css';

let Navbar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={props.icon}></i>
        {props.title}
      </h1>
      <div style={navLast}>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
      </div>
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
const navLast = {
  justifyContent: 'space-between',
  display: 'flex',
};
export default Navbar;
