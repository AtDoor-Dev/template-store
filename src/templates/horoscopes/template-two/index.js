import React, { useState } from 'react';
import HoroscopeTwo from './template-two';
import englishData from '../data/english.json';
import tamilData from '../data/tamil.json';
import './template-two.css';

const IndexTwo = () => {
  const [selectedData, setSelectedData] = useState(englishData);


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
      <select onChange={handleLanguageChange}>
        <option value="english">English</option>
        <option value="tamil">Tamil</option>
      </select>

      <HoroscopeTwo
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

export default IndexTwo;
