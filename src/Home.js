import React, { Component } from 'react';
import './App.css';
import profileStatic from './Images/pana.png';
import pang from './Images/pan.png';
import logo from './Images/Vector.png';
import logoText from './Images/ORIZON.png';
import Home from './Images/Union.png';
import Mail from './Images/mail.png';
import Shuffle from './Images/shuffle.png';
import Product from './Images/product.png';
import Service from './Images/service.png';
import Tech from './Images/tech.png';
import Image1 from './Images/1.png';
import Image2 from './Images/2.png';
import Image3 from './Images/3.png';
import Image4 from './Images/4.png';
import Image5 from './Images/5.png';
import Image6 from './Images/6.png';
const navItems = [
  {
    name: 'Services',
    link: '',
  },
  {
    name: 'Product',
    link: '',
  },
  {
    name: 'Technology',
    link: '',
  },
  {
    name: 'About',
    link: '',
  },
  {
    name: 'Client',
    link: '',
  },
  {
    name: 'Login',
    link: '/login',
  },
];
const navImages = [{ image: Home }, { image: Mail }, { image: Shuffle }];
const product = [
  {
    image: Product,
    title: 'Our Product',
    desc:
      'Our product is made on the base of our team’s careful research and analyses, ranging from internet based application.',
  },
  {
    image: Service,
    title: 'Our Service',
    desc:
      'DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.',
  },
  {
    image: Tech,
    title: 'Our Technology',
    desc:
      'First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices.',
  },
];
const footerImages = [
  { image: Image1 },
  { image: Image2 },
  { image: Image3 },
  { image: Image4 },
  { image: Image5 },
  { image: Image6 },
];
export default class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="base">
          <div className="header">
            <div className="logoContainer">
              <div className="logoImage">
                <img src={logo} />
              </div>
              <div className="logoText">
                <img src={logoText} />
              </div>
            </div>
            <div className="menuContainer">
              {navItems.map((val) => {
                return (
                  <div
                    className="menuItem"
                    onClick={() => {
                      this.props.history.push(val.link);
                    }}
                  >
                    {val.name}
                  </div>
                );
              })}
              <div className="menuImageContainer">
                {navImages.map((val) => {
                  return (
                    <div className="menuImage">
                      <img src={val.image} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="sectionBase">
            <div className="aboutConatiner">
              <div className="aboutContent">
                <div className={'questionContainer'}>
                  <div className={'question'}>
                    Making the most of the ever-growing
                  </div>
                  <div className={'quetionWithColor'}>
                    Information Technology
                  </div>
                </div>
                <div className={'answer'}>
                  Managed by a team of professional experts with extensive
                  experience and impressive track records
                </div>
                <div className={'buttonContainer'}>
                  <div className={'button'}>Read More</div>
                </div>
              </div>
            </div>
            <div className={'imageContainer'}>
              <img src={profileStatic} className="imageSize" />
            </div>
          </div>
          <div className={'secsectionBase'} style={{ background: '#F7F7F7' }}>
            <div className={'secondContainer'}>
              <img src={pang} className="secondImage" />
            </div>
            <div className="aboutContent">
              <div className={'questionContainer'}>
                <div className={'secondSection'}>
                  Welcome to{' '}
                  <span style={{ color: '#007bff' }}>Orizon Technologies</span>
                </div>
              </div>
              <div className={'secAnswer'}>
                Dwidasa Samsara Indonesia (DSI) was firstly established in 2010
                by the founders, who each of them has a common end objective to
                innovate new creations by making the most of the ever-growing
                information technology through{' '}
                <span style={{ color: '#007bff' }}>DSI</span>’s distinct
                front-end based application concept.
                <br />
                <br />
                Managed by a team of professional experts with extensive
                experience and impressive track records,{' '}
                <span style={{ color: '#007bff' }}>DSI</span> believes that
                continuous improvements and innovations assure your business to
                run effectively and efficiently.
              </div>
            </div>
          </div>
          <div className={'sectionBase'} style={{ display: 'block' }}>
            <div className="sectionHeading">Product and Services</div>
            <div className={'thirdContainer'}>
              {product.map((val) => {
                return (
                  <div className="thirdItem">
                    <div className="thirdImage">
                      <img src={val.image} height="100px" />
                    </div>
                    <div className="thirdTitle">{val.title}</div>
                    <div className="thirdDesc">{val.desc}</div>
                    <div
                      className={'thirdButtonContainer'}
                      style={{
                        marginTop: val.title == 'Our Product' && '57px',
                      }}
                    >
                      <div className={'button'}>Read More</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footerContainer">
            <div className="footerContent">
              <div className="logoContainer">
                <div
                  className="logoImage"
                  style={{ height: '40px', width: '40px' }}
                >
                  <img src={logo} />
                </div>
                <div className="logoText" style={{ paddingLeft: '10px' }}>
                  <img src={logoText} />
                </div>
              </div>
              <div className="footerCompany">Orizon Technologies Ltd</div>
              <div className="footerAddress">
                Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang
                15323
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
                      <img src={val.image} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="copyrightContainer">
          <div className="copyrightText">
            Copyright © 2021- - Orizon Technologies Ltd
          </div>
        </div>
      </div>
    );
  }
}
