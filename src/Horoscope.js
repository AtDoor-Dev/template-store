import React from 'react';
import { table1, table2 } from './horoscopeTables';
import data from './data.json';
import images from './images/logo.svg';
import image from './images/'
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
      <table className="horoscope-table" style={{ width: '41%' }}>
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
      <table className="horoscope-table" style={{ width: '41%' }}>
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

  const getName = () => {
    return selectedGender === 'male' ? 'Sri Math Punya Kumara Selvan' : 'Sri Math Punya Kumari Selvi';
  };

  return (
    <div className="a4">
      <div className="inner-border">
        <div className="main-header">
          <div className="top-heading">
            <div className="heading">
              <img src={images} alt="Canvas Logo" className="logo-image" />
              Sri Pachaivaiyamman Thunai
            </div>
            <div className="sub-heading">
              Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
              Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
            </div>
          </div>
          <div className="details-container">
            <div className="personal-detail left">
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Date of Birth</th>
                    <td>{birthDetails.dob.dateOfBirth}</td>
                  </tr>
                  <tr>
                    <th scope="row" >Tamil Year</th>
                    <td>{birthDetails.tamilYear}</td>
                  </tr>
                  <tr>
                    <th scope="row">Tamil Month</th>
                    <td>{birthDetails.tamilMonth}</td>
                  </tr>
                  <tr>
                    <th scope="row" >Tamil Date</th>
                    <td>{birthDetails.tamilDate}</td>
                  </tr>
                  <tr>
                    <th scope="row" >Day</th>
                    <td>{birthDetails.dob.day}</td>
                  </tr>
                  <tr>
                    <th scope="row" >Birth Time</th>
                    <td>{birthDetails.dob.time}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="personal-detail right">
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Naaligai</th>
                    <td>{horoscopeDetails.naaligai}</td>
                  </tr>
                  <tr>
                    <th scope="row">Birth Star</th>
                    <td>{horoscopeDetails.BirthStar}</td>
                  </tr>
                  <tr>
                    <th scope="row">Rasi</th>
                    <td>{horoscopeDetails.rasi}</td>
                  </tr>
                  <tr>
                    <th scope="row">Thithi</th>
                    <td>{horoscopeDetails.thithi}</td>
                  </tr>
                  <tr>
                    <th scope="row">Lagnam</th>
                    <td>{horoscopeDetails.lagnam}</td>
                  </tr>
                  <tr>
                    <th scope="row">Place Of Birth</th>
                    <td>{birthDetails.dob.placeOfBirth}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="divider1"></div>
          <div className="below-heading">
            Thirunelveli District
          </div>
          <div className="second-name">
            S/o Late <b> Mr. Ponmani - Mrs. Porselvi</b>
          </div>
          <div className="third-line">
            <p className="name">{getName()}.<b> Kamalesh P</b></p>
          </div>
          <hr className="table-divider" />
        </div>
        <div className="mid-heading">
          <h3><span className="blue-text">Mars </span> <span className="brown-text">Dasa Balance : 6months</span></h3>
        </div>
        <Horoscope />
        <div className="middle">
          <h3>Namadhayam : Kamalesh . P</h3>
        </div>
        <div className="third">
          <p>Gothram : Shiva Gothram &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Madhulam : dfdfdsa</p>
        </div>
        <div className="divider"></div>
        <div className="family-details">
          <div className="family-detail left">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Father</b> : {familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}
                  </td>
                </tr>
                <tr>
                  <td><b>Height</b> : {formatHeight(familyDetails.height)}</td>
                </tr>
                <tr>
                  <td><b>Blood Group</b> : {personalInfo.bloodGroup}</td>
                </tr>
                <tr>
                  <td><b>Complexion</b> : {personalInfo.complextion}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="family-detail right">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Brother</b>  : {familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})
                  </td>
                </tr>
                <tr>
                  <td><b>Education</b> : {qualification.Education}</td>
                </tr>
                <tr>
                  <td><b>Profession</b> : {personalInfo.Profession}</td>
                </tr>
                <tr>
                  <td><b>Income</b> : {occupation.Income}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="divider2"></div>
      <div className="address">
        Address
      </div>
      <div className='name'>
      <p>{personalInfo.name}.{qualification.Education}.{qualification.fieldOfStudy}.({personalInfo.Profession})</p>
      </div>
      <div className="residential-address">
          <p className="address"> {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown}, {residentialAddress.city}, {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}</p>
        </div>
        <div className="contact-details">
          <p className="address">&nbsp;&nbsp;&nbsp;&nbsp;Mobile : {contactDetails.contactNumber} &nbsp;&nbsp; &nbsp;&nbsp; WhatsApp Number : {contactDetails.whatsappNumber}</p>
        </div> 
    </div>
  );
};

export default DataTable;
