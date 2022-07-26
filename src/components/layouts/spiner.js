import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const spiner = () => {
  <Fragment>
    <img src={spinner} alt='loading...' className={spinnerl} />
  </Fragment>;
};
let spinnerl = {
  display: 'block',
  width: '200px',
  margin: 'auto',
};

export default spiner;
