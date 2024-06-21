import React from 'react';
import './AddPostForm.css';

const AddPostForm = () => {
  return (
    <div id="AddPostForm" className="add-post-form-container">
      <form className="add-post-form">
        <div className="form-group">
          <input type="text" placeholder="Post Title" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Post Type" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Contact" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Post Status" required />
        </div>
        <div className="form-group">
          <textarea placeholder="Post Description" required></textarea>
        </div>
        <div className="form-group">
          <input type="date" placeholder="Future Date" required />
        </div>
        <button type="submit" className="add-post-button">Add Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;
