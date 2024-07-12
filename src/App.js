import React, { useState } from 'react';
import DataTable from './Horoscope'; 
import './App.css';

function App() {
  const [selectedGender, setSelectedGender] = useState('male');

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  return (
    <div className="App">
      <div className="gender-dropdown">
        <label htmlFor="gender-select">Select Gender: </label>
        <select id="gender-select" value={selectedGender} onChange={handleGenderChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <DataTable selectedGender={selectedGender} />
    </div>
  );
}

export default App;
