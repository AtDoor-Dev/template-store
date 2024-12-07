import React, { useState } from 'react';
import HoroscopeThree from './template-three';
import englishData from '../data/english.json';
import tamilData from '../data/tamil.json';
import './template-three.css';

const IndexThree = () => {
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

      <HoroscopeThree
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

export default IndexThree;
