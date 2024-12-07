import React, { useState } from 'react';
import TemplateOne from './templates/horoscopes/template-one/index.js';
import TemplateTwo from './templates/horoscopes/template-two/index.js';
import TemplateThree from './templates/horoscopes/template-three/index.js';
import TemplateFour from './templates/horoscopes/template-four/index.js';
import TemplateFive from './templates/horoscopes/template-five/index.js';
import englishData from './data/english.json';
import tamilData from './data/tamil.json'; 
import './App.css';

const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english'); 

  const handleTemplateChange = (event) => {
    setSelectedTemplate(event.target.value);
  };


  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const jsonData = selectedLanguage === 'english' ? englishData : tamilData;


  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'templateOne':
        return <TemplateOne {...jsonData} />;
      case 'templateTwo':
        return <TemplateTwo {...jsonData} />;
      case 'templateThree':
        return <TemplateThree {...jsonData} />;
      case 'templateFour':
        return <TemplateFour {...jsonData} />;
      case 'templateFive':
        return <TemplateFive {...jsonData} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="language-selection">
        <label>
          <input
            type="radio"
            value="english"
            checked={selectedLanguage === 'english'}
            onChange={handleLanguageChange}
          />
          English
        </label>
        <label>
          <input
            type="radio"
            value="tamil"
            checked={selectedLanguage === 'tamil'}
            onChange={handleLanguageChange}
          />
          Tamil
        </label>
      </div>

      <div className="template-dropdown">
        <label htmlFor="template-select">Choose a template: </label>
        <select
          id="template-select"
          onChange={handleTemplateChange}
          value={selectedTemplate}
        >
          <option value="">Select a template</option>
          <option value="templateOne">Template One</option>
          <option value="templateTwo">Template Two</option>
          <option value="templateThree">Template Three</option>
          <option value="templateFour">Template Four</option>
          <option value="templateFive">Template Five</option>
        </select>
      </div>

      {renderTemplate()}
    </div>
  );
};

export default App;
