import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = (props) => {
  useEffect(() => {});
  const { login } = useParams();
  this.props.getUser(login);
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
};
//
export default User;
