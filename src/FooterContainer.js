import React, { Component } from 'react';
import './App.css';
import logo from './Images/Vector.png';
import logoText from './Images/ORIZON.png';
import Image1 from './Images/1.png';
import Image2 from './Images/2.png';
import Image3 from './Images/3.png';
import Image4 from './Images/4.png';
import Image5 from './Images/5.png';
import Image6 from './Images/6.png';
const footerImages = [
  { image: Image1 },
  { image: Image2 },
  { image: Image3 },
  { image: Image4 },
  { image: Image5 },
  { image: Image6 },
];
export default class FooterContainer extends Component {
  render() {
    return (
      <div className="footerContainer">
        <div className="footerContent">
          <div className="logoContainer">
            <div
              className="logoImage"
              style={{ height: '40px', width: '40px' }}
            >
              <img src={logo} alt="" />
            </div>
            <div className="logoText" style={{ paddingLeft: '10px' }}>
              <img src={logoText} alt="" />
            </div>
          </div>
          <div className="footerCompany">Orizon Technologies Ltd</div>
          <div className="footerAddress">
            Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323
          </div>
        </div>
        <div className="footerContent">
          <div className="contactContainer">
            <div className="contact">Contact</div>
            <div className="contactInfo">
              Phone : +62.21.5314.1135
              <br />
              Fax : +62.21.5314.1135
              <br /> Email : community@orizon.com
            </div>
          </div>
        </div>
        <div className="footerContent">
          <div className="fimageContainer">
            {footerImages.map((val) => {
              return (
                <div className="fItem">
                  <img src={val.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
