import React from 'react';
import './UpdatePost.css';
import UpdateStock from '../../components/UpdateStock/UpdateStock';

const UpdatePost = () => {
  return (
    <>
      <h1 className="edit-position">
        Update Position
      </h1>
      <UpdateStock />
    </>
  )
}

export default UpdatePost;
