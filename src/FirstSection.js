import React, { Component } from 'react';
import './App.css';
import profileStatic from './Images/pana.png';
export default class FirstSection extends Component {
  render() {
    return (
      <div className="sectionBase" style={{ marginTop: '40px' }}>
        <div className="aboutConatiner">
          <div className="aboutContent">
            <div className={'questionContainer'}>
              <div className={'question'}>
                Making the most of the ever-growing
              </div>
              <div className={'quetionWithColor'}>Information Technology</div>
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
          <img src={profileStatic} className="imageSize" alt="" />
        </div>
      </div>
    );
  }
}
