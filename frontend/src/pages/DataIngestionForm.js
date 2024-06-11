// DataIngestionForm.js

import React, { useState } from "react";
import "../App.css";
import axios from "axios";

const DataIngestionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    totalSpends: "",
    visits: "",
    lastVisit: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data submitted successfully");
        setFormData({
          name: "",
          email: "",
          totalSpends: "",
          visits: "",
          lastVisit: "",
        });
      } else {
        alert("Failed to submit data");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the data");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='data-ingestion-form'>
        <h2>Data Ingestion Form</h2>
        <div>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='totalSpends'>Total Spends</label>
          <input
            type='number'
            id='totalSpends'
            name='totalSpends'
            value={formData.totalSpends}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='visits'>Visits</label>
          <input
            type='number'
            id='visits'
            name='visits'
            value={formData.visits}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='lastVisit'>Last Visit</label>
          <input
            type='date'
            id='lastVisit'
            name='lastVisit'
            value={formData.lastVisit}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default DataIngestionForm;
