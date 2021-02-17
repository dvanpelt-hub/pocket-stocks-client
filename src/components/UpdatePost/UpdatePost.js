import React from 'react';
import './UpdatePost.css';
import UpdateStock from '../UpdateStock/UpdateStock';
import Nav from '../navigation/Nav';

const UpdatePost = () => {
  return (
    <>
      <Nav />
      <h1 className="edit-position">
        Update Position
      </h1>
      <UpdateStock />
    </>
  )
}

export default UpdatePost;
