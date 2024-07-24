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
      <div className="inner-border">
        <div className="main-header">
          <div className="top-heading">
            <div className="heading-container">
              <div className="heading">
                <img src={logoImage} alt="Canvas Logo" className="logo-image" />
                Subamasthu<br/>
                Sri Vasavi Sagayam
              </div>
            </div>
            <div className="sub-heading">
              Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
              Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
            </div>
            <div className="family-details">
            <div className="family-detail left">
              <table>
                <tbody>
                  <tr className="dotted-row">
                    <th scope="row">Date of Birth : </th>
                    <td>{birthDetails.dob.dateOfBirth}</td>
                  </tr>
                  <hr className="divider"></hr>
                  <tr className="dotted-row">
                    <th scope="row" >Tamil Year : </th>
                    <td>{birthDetails.tamilYear}</td>
                  </tr>
                  <hr className="divider"></hr>
                  <tr className="dotted-row">
                    <th scope="row">Tamil Month : </th>
                    <td>{birthDetails.tamilMonth}</td>
                  </tr>
                  <hr className="divider"></hr>
                  <tr className="dotted-row">
                    <th scope="row" >Tamil Date : </th>
                    <td>{birthDetails.tamilDate}</td>
                  </tr>
                  <hr className="divider"></hr>
                  <tr className="dotted-row">
                    <th scope="row" >Day : </th>
                    <td>{birthDetails.dob.day}</td>
                  </tr>
                  <hr className="divider"></hr>
                  <tr className="dotted-row">
                    <th scope="row" >Birth Time : </th>
                    <td>{birthDetails.dob.time}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="family-detail right">
              <table>
                <tbody>
                  <tr className="dotted-row">
                    <th scope="row">Naaligai : </th>
                    <td>{horoscopeDetails.naaligai}</td>
                  </tr>
                  <hr className="divider-one"></hr>
                  <tr className="dotted-row">
                    <th scope="row">Birth Star : </th>
                    <td>{horoscopeDetails.BirthStar}</td>
                  </tr>
                  <hr className="divider-one"></hr>
                  <tr className="dotted-row">
                    <th scope="row">Rasi : </th>
                    <td>{horoscopeDetails.rasi}</td>
                  </tr>
                  <hr className="divider-one"></hr>
                  <tr className="dotted-row">
                    <th scope="row">Thithi : </th>
                    <td>{horoscopeDetails.thithi}</td>
                  </tr>
                  <hr className="divider-one"></hr>
                  <tr className="dotted-row">
                    <th scope="row">Lagnam : </th>
                    <td>{horoscopeDetails.lagnam}</td>
                  </tr>
                  <hr className="divider-one"></hr>
                  <tr className="dotted-row">
                    <th scope="row">Place Of Birth : </th>
                    <td>{birthDetails.dob.placeOfBirth}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
         </div>

     <div className="additional-data">
        <p className='name'>
        <b> Mr <span >{familyDetails.fatherName}- Mrs.{familyDetails.motherName}</span></b>
        </p>
        <p className='name-one'>
        For Them  {selectedGender === 'male' ? 'Kumaran' : 'Kumari'}. <b><span >{personalInfo.name}</span></b>
        </p>
        <p className='name-two'>
        Mars Dasa balance -<span>{horoscopeDetails.dasaBalance}</span>
        </p>
      </div>
      <Horoscope />
      <div>
      <div className='name'>
      <p> Name:<b>{personalInfo.name}.{qualification.Education}</b></p>
      </div>
      <div className="family-details">
     <div className="family-detail left">
    <table>
      <tbody>
        <tr>
          <th><b>Father</b> :</th>
          <td className="dotted-row">
            {familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}
          </td>
        </tr>
        <hr/>
        <tr>
          <th><b>Height</b> :</th>
          <td className="dotted-row">{formatHeight(familyDetails.height)}</td>
        </tr>
        <hr/>
        <tr>
          <th><b>Blood Group</b> :</th>
          <td className="dotted-row">{personalInfo.bloodGroup}</td>
        </tr>
        <hr/>
        <tr>
          <th><b>Complexion</b> :</th>
          <td className="dotted-row">{personalInfo.complextion}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div className="family-detail right">
    <table>
      <tbody>
        <tr>
          <th><b>Brother</b> :</th>
          <td className="dotted-row">{familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})</td>
        </tr>
        <hr/>
        <tr>
          <th><b>Education</b> :</th>
          <td className="dotted-row">{qualification.Education}</td>
        </tr>
        <hr/>
        <tr>
          <th><b>Profession</b> :</th>
          <td className="dotted-row">{personalInfo.Profession}</td>
        </tr>
        <hr/>
        <tr>
          <th><b>Income</b> :</th>
          <td className="dotted-row">{occupation.Income}</td>
        </tr>
      </tbody>
    </table>
          </div>
          </div>
        </div>
      </div>
      <div className="address">
        Address
      </div>
      <div className='bottom'>
        <div className='name-one'>
          <p>{personalInfo.name}.{qualification.Education}.{qualification.fieldOfStudy}.({personalInfo.Profession})</p>
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
  );
};

export default DataTable;