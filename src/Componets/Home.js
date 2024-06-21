// src/Components/Home.js
import React from 'react';
import EmployeeCard from './Cards';
import './Home.css';

const employees = [
  {
    name: 'John Doe',
    id: '53504',
    postTitle: 'Senior Developer',
    postDescription: 'Working on backend systems',
    futureDate: '2025-12-31',
    postType: 'Full-time',
    email: 'johndoe@example.com',
    mobileNo: '9420713364'
  },
  {
    name: 'Jane Smith',
    id: '5452',
    postTitle: 'UI/UX Designer',
    postDescription: 'Designing user interfaces',
    futureDate: '2025-12-31',
    postType: 'Full-time',
    email: 'janesmith@example.com',
    mobileNo: '7620402633'
  },
  {
    name: 'Joy Janer',
    id: '5789',
    postTitle: 'Salesforce Developer',
    postDescription: 'Cloud Expert Solution',
    futureDate: '2025-12-31',
    postType: 'Full-time',
    email: 'joyjaner44@example.com',
    mobileNo: '7498278473'
  },
  
];

const Home = () => {
  return (
    <div className="home-container">
      <h1>Collaboration with Excellence...!</h1>
      <p>Connecting the best talents in the industry.......</p>
      <div className="employee-cards-container">
        {employees.map((employee, index) => (
          <EmployeeCard key={index} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default Home;
