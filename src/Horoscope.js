import React from 'react';
import { table1, table2 } from './horoscopeTables';
import imageBetweenTables from './images/imageBetweenTables.svg';
import data from './data.json';
import images from './images/logo.svg';
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

const Horoscope = ({ imageSrc }) => {
  return (
    <div className="horoscope-container">
      <table className="horoscope-table" style={{ width: '34%' }}>
        <tbody>
          {table1.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table" colSpan={cell.colspan} rowSpan={cell.rowspan}>
                  {renderCellContent(cell.value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <img src={imageBetweenTables} alt="Image Between Tables" />
      <table className="horoscope-table" style={{ width: '33%' }}>
        <tbody>
          {table2.map((row, rowIndex) => (
            <tr key={rowIndex}>
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
        <div className="main-header">
          <div className="top-heading">
            <div className="heading">
              <img src={images} alt="Canvas Logo" className="logo-image" />
              Vasavi Sahayam <br /> Angala Parameshwari Amman Thunai
            </div>
            <div className="sub-heading">
              Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
              Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
            </div>
          </div>
          <div className="personal-details">
            <table>
              <tbody className="table">
                <tr>
                  <th scope="row">Date of Birth</th>
                  <td>{birthDetails.dob.dateOfBirth}</td>
                  <th scope="row">Naaligai</th>
                  <td>{horoscopeDetails.naaligai}</td>
                </tr>
                <tr>
                  <th scope="row">TamilYear</th>
                  <td>{birthDetails.tamilYear}</td>
                  <th scope="row">Birth Star</th>
                  <td>{horoscopeDetails.BirthStar}</td>
                </tr>
                <tr>
                  <th scope="row">Tamil Month</th>
                  <td>{birthDetails.tamilMonth}</td>
                  <th scope="row">Rasi</th>
                  <td>{horoscopeDetails.rasi}</td>
                </tr>
                <tr>
                  <th scope="row">Tamil Date</th>
                  <td>{birthDetails.tamilDate}</td>
                  <th scope="row">Thithi</th>
                  <td>{horoscopeDetails.thithi}</td>
                </tr>
                <tr>
                  <th scope="row">Day</th>
                  <td>{birthDetails.dob.day}</td>
                  <th scope="row">Lagnam</th>
                  <td>{horoscopeDetails.lagnam}</td>
                </tr>
                <tr>
                  <th scope="row">Birth Time</th>
                  <td>{birthDetails.dob.time}</td>
                  <th scope="row">Place Of Birth</th>
                  <td>{birthDetails.dob.placeOfBirth}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="below-heading">
            S/o Late <b> Mr. Ponmani - Mrs. Porselvi</b>
          </div>
          <div className="second-name">
            <p className="name">{selectedGender === 'male' ? 'Kumaran' : 'Kumari'}.<b> Kamalesh P</b></p>
          </div>
          <div className="third-line">
            <h5>Gothram : Shiva Gothram &nbsp;&nbsp; Madhulam : dfdfdsa</h5>
          </div>
        </div>
        <Horoscope imageSrc="path_to_image" />
        <div className="mid-heading">
          <h3><span className="blue-text">Mars </span> <span className="brown-text">Dasa Balance : 6months</span></h3>
        </div>
        <div className="family-details">
          <table className="family-table">
            <tbody>
              <tr>
                <td>
                  <b>Father</b> : {familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}
                </td>
                <td><b>Height</b>: {formatHeight(familyDetails.height)}</td>
                <td><b>Blood Group</b> : {personalInfo.bloodGroup}</td>
              </tr>
              <tr>
                <td>
                  <b>Brother</b> : {familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})
                </td>
                <td><b>Complextion</b> : {personalInfo.complextion}</td>
                <td><b>OwnHouse</b> : {ownHouse}</td>
              </tr>
              <tr>
                <td><b>Education</b>: {qualification.Education}</td>
                <td><b>Profession</b> : {personalInfo.Profession}</td>
                <td><b>Income</b> : {occupation.Income}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="residential-address">
          <p className="address">Address: {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown}, {residentialAddress.city}, {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}</p>
        </div>
        <div className="contact-details">
          <p className="address">Mobile : {contactDetails.contactNumber} &nbsp;&nbsp; &nbsp;&nbsp; WhatsApp Number : {contactDetails.whatsappNumber}</p>
        </div>
        <div className="email-address">
          <p className="address">Email: {contactDetails.emailId}</p>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
