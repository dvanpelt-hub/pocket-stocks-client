import React from 'react';
import './UpdatePost.css';
import UpdateStock from '../../components/UpdateStock/UpdateStock';
import Nav from '../../components/navigation/Nav';

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
