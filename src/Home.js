import React, { Component } from 'react';
import './App.css';
import logo from './Images/Vector.png';
import logoText from './Images/ORIZON.png';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import FooterContainer from './FooterContainer';
import Home from './Images/Union.png';
import Mail from './Images/mail.png';
import Shuffle from './Images/shuffle.png';
import menu from './Images/square.png';
import PreviousButton from './Images/prev.svg';
import NextButton from './Images/next.svg';

const Carousel = [
  {
    data: <FirstSection />,
    step: 1,
  },
  {
    data: <SecondSection />,
    step: 2,
  },
  {
    data: <ThirdSection />,
    step: 3,
  },
];
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

export default class App extends Component {
  state = { menu: false, carouselStep: 1 };

  render() {
    console.log(this.state.carouselStep);
    return (
      <div>
        <div className="base">
          <div className="header">
            <div className="logoContainer">
              <div className="logoImage">
                <img src={logo} alt="logo" />
              </div>
              <div className="logoText">
                <img src={logoText} alt="logo Text" />
              </div>
            </div>
            <div>
              <img
                src={menu}
                className="menuIcon"
                onClick={() => {
                  this.setState({ menu: !this.state.menu });
                }}
                alt=""
              />
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
                      <img src={val.image} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
            {this.state.menu && (
              <div className={'menuContainerMobile'}>
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
              </div>
            )}
          </div>
          <div className="sectionBase">
            <div className="carouselContainer">
              <div
                className="prevButton"
                onClick={() => {
                  this.setState({
                    carouselStep:
                      this.state.carouselStep > 1
                        ? this.state.carouselStep - 1
                        : Carousel.length,
                  });
                }}
              >
                <img src={PreviousButton} alt="" height="40px" width="40px" />
              </div>
              {Carousel.map((val, i) => {
                return val.step == this.state.carouselStep && val.data;
              })}
              <div
                className="nextButton"
                onClick={() => {
                  this.setState({
                    carouselStep:
                      this.state.carouselStep < Carousel.length
                        ? this.state.carouselStep + 1
                        : 1,
                  });
                }}
                style={{ position: 'absolute' }}
              >
                <img src={NextButton} alt="" height="40px" width="40px" />
              </div>
            </div>
          </div>
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FooterContainer />
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
