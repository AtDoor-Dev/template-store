import React, { useState } from 'react';
import HoroscopeOne from './template-one';
import englishData from '../data/english.json';
import tamilData from '../data/tamil.json';
import './template-one.css';

const IndexOne = () => {
  // State to manage the current language selection
  const [selectedData, setSelectedData] = useState(englishData);

  // Function to handle language change (English or Tamil)
  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage === 'english') {
      setSelectedData(englishData);
    } else if (selectedLanguage === 'tamil') {
      setSelectedData(tamilData);
    }
  };

  return (
    <div>
      {/* Dropdown for selecting language */}
      <select onChange={handleLanguageChange}>
        <option value="english">English</option>
        <option value="tamil">Tamil</option>
      </select>

      {/* Render HoroscopeOne with the selected language data */}
      <HoroscopeOne
        birthDetails={selectedData.birthDetails}
        horoscopeDetails={selectedData.horoscopeDetails}
        familyDetails={selectedData.familyDetails}
        contactDetails={selectedData.contactDetails}
        personalInfo={selectedData.personalInfo}
        ownHouse={selectedData.ownHouse}
        qualification={selectedData.qualification}
        occupation={selectedData.occupation}
        residentialAddress={selectedData.residentialAddress}
      />
    </div>
  );
};

export default IndexOne;
