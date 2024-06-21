// src/Components/EmployeeCard.js
import React from 'react';
import './Cards.css';

const EmployeeCard = ({ employee }) => {
  return (
    <div className="employee-card">
      <div className="card-body">
        <p><strong>Name:</strong> {employee.name}</p>
        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Post Title:</strong> {employee.postTitle}</p>
        <p><strong>Post Description:</strong> {employee.postDescription}</p>
        <p><strong>Future Date:</strong> {employee.futureDate}</p>
        <p><strong>Post Type:</strong> {employee.postType}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Mobile No:</strong> {employee.mobileNo}</p>
      </div>
    </div>
  );
};

export default EmployeeCard;
