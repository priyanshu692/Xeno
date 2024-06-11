// AudienceForm.js

import React, { useState } from "react";
import axios from "axios";

const AudienceForm = ({ onSaveAudience }) => {
  const [rules, setRules] = useState([]);
  const [size, setSize] = useState(null);

  const handleAddRule = () => {
    setRules([...rules, { field: "", operator: "", value: "" }]);
  };

  const handleChangeRule = (index, field, value) => {
    const newRules = [...rules];
    newRules[index][field] = value;
    setRules(newRules);
  };

  const handleCheckSize = async () => {
    const response = await axios.post(
      "http://localhost:5000/check-audience-size",
      { rules }
    );
    setSize(response.data.size);
  };

  const handleSaveAudience = async () => {
    await axios.post("http://localhost:5000/save-audience", { rules, size });
    onSaveAudience();
  };

  return (
    <div>
      <h2>Create Audience</h2>
      {rules.map((rule, index) => (
        <div key={index}>
          <select
            onChange={e => handleChangeRule(index, "field", e.target.value)}
          >
            <option value=''>Select Field</option>
            <option value='totalSpends'>Total Spends</option>
            <option value='visits'>Visits</option>
            <option value='lastVisit'>Last Visit</option>
          </select>
          <select
            onChange={e => handleChangeRule(index, "operator", e.target.value)}
          >
            <option value=''>Select Operator</option>
            <option value='>'></option>
            <option value='<'></option>
            <option value='='>=</option>
            <option value='!='>!=</option>
          </select>
          <input
            type='text'
            onChange={e => handleChangeRule(index, "value", e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleAddRule}>Add Rule</button>
      <button onClick={handleCheckSize}>Check Audience Size</button>
      {size !== null && <div>Audience Size: {size}</div>}
      <button onClick={handleSaveAudience}>Save Audience</button>
    </div>
  );
};

export default AudienceForm;
