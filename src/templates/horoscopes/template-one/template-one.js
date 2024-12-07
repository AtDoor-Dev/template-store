import React from 'react';
import HoroscopeBoxes from '../horoscope-boxes/horoscope-boxes';
import '../horoscope-boxes/horoscope-boxes.css';
import {
  MainContainer,
  Header,
  MidHeading,
  HeadingText,
  SubHeadingText,
  Table,
  BelowHeading,
  SecondName,
  ThirdLine,
  FamilyDetails,
  Address,
  ContactDetails,
  EmailAddress,
  LogoImage,
  BlueText,
  BrownText,
  LineText,
  UnboldText,
  PersonalDetails,
} from './template-one.styled';
import logoImageSrc from './images/logo.svg';

const formatHeight = (height) => {
  const [feet, inches] = height.split('.');
  return `${feet}'${inches}"`;
};
const HoroscopeOne = ({
  birthDetails,
  horoscopeDetails,
  familyDetails,
  contactDetails,
  personalInfo,
  ownHouse,
  qualification,
  occupation,
  residentialAddress
}) => {
  return (
    <div className='a4-template-one'>
      <MainContainer className='backgroundImage'>
        <Header>
        <HeadingText>
            <LogoImage src={logoImageSrc} alt="Canvas Logo" /> 
          </HeadingText>
        <LineText>
        Vasavi Sahayam
       <br/> Angala Parameshwari Amman Thunai
      </LineText>
          <SubHeadingText>
            Janani Janma Sowkyanam Varathanee Kulasumbathaam<br />
            Padhavi Pooorva Punyanaam Likyathe Janma Pathrika
          </SubHeadingText>
        </Header>
          <PersonalDetails>
          <Table className='tablet1'>
            <tbody className='tbodyt1'>
              <tr className='trt1'>
                <th className="rowt1">Date of Birth</th>
                <td className='columnt1'>{birthDetails.dob.dateOfBirth}</td>
                <th className="rowt1">Naaligai</th>
                <td  className='columnt1'>{horoscopeDetails.naaligai}</td>
              </tr>
              <tr  className='trt1'>
                <th className="rowt1">TamilYear</th>
                <td className='columnt1'>{birthDetails.tamilYear}</td>
                <th className="rowt1">Birth Star</th>
                <td  className='columnt1'>{horoscopeDetails.BirthStar}</td>
              </tr>
              <tr className='trt1'>
                <th className="rowt1">Tamil Month</th>
                <td  className='columnt1'>{birthDetails.tamilMonth}</td>
                <th className="rowt1">Rasi</th>
                <td  className='columnt1'>{horoscopeDetails.rasi}</td>
              </tr>
              <tr className='trt1'>
                <th className="rowt1">Tamil Date</th>
                <td className='columnt1'>{birthDetails.tamilDate}</td>
                <th className="rowt1">Thithi</th>
                <td className='columnt1'>{horoscopeDetails.thithi}</td>
              </tr>
              <tr  className='trt1'>
                <th className="rowt1">Day</th>
                <td  className='columnt1'>{birthDetails.dob.day}</td>
                <th className="rowt1">Lagnam</th>
                <td className='columnt1'>{horoscopeDetails.lagnam}</td>
              </tr>
              <tr className='trt1'>
                <th  className="rowt1">Birth Time</th>
                <td className='columnt1'>{birthDetails.dob.time}</td>
                <th className="rowt1">Place Of Birth</th>
                <td className='columnt1'>{birthDetails.dob.placeOfBirth}</td>
              </tr>
            </tbody>
          </Table>
       </PersonalDetails>
        <BelowHeading>
          S/o Late <b> Mr. Ponmani - Mrs. Porselvi</b>
        </BelowHeading>
        <SecondName>
         <UnboldText>Kumaran.</UnboldText><b> Kamalesh P</b>
        </SecondName>
        <ThirdLine>
          <h5>Gothram : Shiva Gothram &nbsp;&nbsp; Madhulam : dfdfdsa</h5>
        </ThirdLine>
        <HoroscopeBoxes />
        <MidHeading>
          <h3><BlueText>Mars </BlueText> <BrownText>Dasa Balance : 6months</BrownText></h3>
        </MidHeading>
        <FamilyDetails>
          <Table className='tablet1'>
            <tbody  className='tbodyt1'>
              <tr className='trt1'>
                <td className='columnt1'>
                  <b>Father</b> : {familyDetails.fatherAlive} - <b>Mother</b> : {familyDetails.motherAlive}
                </td>
                <td className='columnt1'><b>Height</b>: {formatHeight(familyDetails.height)}</td>
                <td className='columnt1'><b>Blood Group</b> : {personalInfo.bloodGroup}</td>
              </tr>
              <tr>
                <td className='columnt1'>
                  <b>Brother</b> : {familyDetails.siblings.brother.number} (Elder-{familyDetails.siblings.brother.marriageNum})
                </td>
                <td className='columnt1'><b>Complextion</b> : {personalInfo.complextion}</td>
                <td className='columnt1'><b>OwnHouse</b> : {ownHouse}</td>
              </tr>
              <tr>
                <td className='columnt1'><b>Education</b>: {qualification.Education}</td>
                <td className='columnt1'><b>Profession</b> : {personalInfo.Profession}</td>
                <td className='columnt1'><b>Income</b> : {occupation.Income}</td>
              </tr>
            </tbody>
          </Table>
        </FamilyDetails>
        <Address>
          Address: {residentialAddress.address} {residentialAddress.landmark} {residentialAddress.hometown}, {residentialAddress.city}, {residentialAddress.stateName} {residentialAddress.pincode} {residentialAddress.nationality}
        </Address>
        <ContactDetails>
          Mobile : {contactDetails.contactNumber} &nbsp;&nbsp; &nbsp;&nbsp; WhatsApp Number : {contactDetails.whatsappNumber}
        </ContactDetails>
        <EmailAddress>
          Email: {contactDetails.emailId}
        </EmailAddress>
      </MainContainer>
    </div>
  );
};

export default HoroscopeOne;
