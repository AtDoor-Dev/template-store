import React from 'react';
import data from './data.json';
import { table1, table2 } from './horoscopeTables';
import logoImage from './images/logo.svg';
import './App.css';

const renderCellContent = (value) => {
  if (Array.isArray(value)) {
    return (
      <div>
        {value.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    );
  }
  return value;
};

const formatHeight = (height) => {
  const [feet, inches] = height.split('.');
  return `${feet}'${inches}"`;
};

const Horoscope = () => {
  return (
    <div className="horoscope-container">
      <table className="horoscope-table" style={{ width: '46%' }}>
        <tbody>
          {table1.map((row, rowIndex) => (
            <tr key={rowIndex} className="dotted-row">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table" colSpan={cell.colspan} rowSpan={cell.rowspan}>
                  {renderCellContent(cell.value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <table className="horoscope-table" style={{ width: '46%' }}>
        <tbody>
          {table2.map((row, rowIndex) => (
            <tr key={rowIndex} className="dotted-row">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table" colSpan={cell.colspan} rowSpan={cell.rowspan}>
                  {renderCellContent(cell.value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const DataTable = ({ selectedGender }) => {
  const { birthDetails, horoscopeDetails, familyDetails, contactDetails, personalInfo, ownHouse, qualification, occupation, residentialAddress } = data;

  

return (
    <div className="a4">
   <div className="background-image">
   <div className="inner-border">
    <div className="main-header">
    <div className="top-heading">
    <div className="heading-container">
              <div className="heading">
                <img src={logoImage} alt="Canvas Logo" className="logo-image" />
                Sri Pachaivaiyamman Thunai
              </div>
              </div>
            <div className="sub-heading">
              Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
              Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
            </div>
            <div className='third-heading'>
           <h3><strong><u>Janma Pathrika</u></strong></h3> 
            </div>
            <div>
            <p>
            Born in the auspicious Veguthanya year, in the month of Aadi, on the 4th date, which corresponds to the 20th of July, 1998 (Monday), during the Shukla Paksha, on the Thuvadasi tithi. The exact birth time was
            at 1:56 AM, with 44 Naaligai and 00 Vinaadi elapsed. The individual was born under
            the Rohini nakshatra, in the Taurus (Rishaba) rasi, specifically the 4th pada. The
            ascendant (lagna) at the time of birth was Libra (Thulam). The place of birth is
            Thindukal (Dindigul)  Mr <b><span>{familyDetails.fatherName}- Mrs.{familyDetails.motherName}</span></b> For Them.{selectedGender === 'male' ? 'Kumaran' : 'Kumari'}   <b><span className="dotted-underline">{personalInfo.name}</span></b> suba jananam.
          </p>
       </div>
       <hr className="table-divider" />
       <div className="mid-heading">
          <h3><span className="blue-text">Mars </span> <span className="brown-text">Dasa Balance : 6months</span></h3>
      </div>
      <Horoscope />   
      <div className="third">
        <p>Name- {personalInfo.name}</p>
          <p>Gothram -{horoscopeDetails.gothram} </p>
          <p>Madhulam -{horoscopeDetails.mathulam}</p>
       </div>
       <div className="family-details">
  <div className="family-detail left">
    <table>
      <tbody>
        <tr>
          <th><b>Father</b> :</th>
          <td>{familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}</td>
        </tr>
        <tr>
          <th><b>Height</b> :</th>
          <td>{formatHeight(familyDetails.height)}</td>
        </tr>
        <tr>
          <th><b>Blood Group</b> :</th>
          <td>{personalInfo.bloodGroup}</td>
        </tr>
        <tr>
          <th><b>Complexion</b> :</th>
          <td>{personalInfo.complextion}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="family-detail right">
    <table>
      <tbody>
        <tr>
          <th><b>Brother</b> :</th>
          <td>{familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})</td>
        </tr>
        <tr>
          <th><b>Education</b> :</th>
          <td>{qualification.Education}</td>
        </tr>
        <tr>
          <th><b>Profession</b> :</th>
          <td>{personalInfo.Profession}</td>
        </tr>
        <tr>
          <th><b>Income</b> :</th>
          <td>{occupation.Income}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
<div className="address">
        Address
      </div>
      <div className="residential-address">
          <p className="full-address">{residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown} {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}</p>
        </div>
        <div className="contact-details">
          <p className="phone-number">&nbsp;&nbsp;&nbsp;&nbsp;Mobile: {contactDetails.contactNumber} &nbsp;&nbsp;&nbsp;&nbsp; WhatsApp Number: {contactDetails.whatsappNumber}</p>
        </div>
      </div>
        </div>
        </div>
          </div>
  );
};

export default DataTable;


