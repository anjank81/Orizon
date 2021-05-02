import React, { Component } from 'react';
import './App.css';
import pang from './Images/pan.png';
export default class SecondSection extends Component {
  render() {
    return (
      <div className={'secsectionBase'} style={{ background: '#F7F7F7' }}>
        <div className={'secondContainer'}>
          <img src={pang} className="secondImage" alt="" />
        </div>
        <div className="aboutContent">
          <div className={'questionContainer'}>
            <div className={'secondSection'}>
              Welcome to{' '}
              <span style={{ color: '#007bff' }}>Orizon Technologies</span>
            </div>
          </div>
          <div className={'secAnswer'}>
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
            the founders, who each of them has a common end objective to
            innovate new creations by making the most of the ever-growing
            information technology through{' '}
            <span style={{ color: '#007bff' }}>DSI</span>’s distinct front-end
            based application concept.
            <br />
            <br />
            Managed by a team of professional experts with extensive experience
            and impressive track records,{' '}
            <span style={{ color: '#007bff' }}>DSI</span> believes that
            continuous improvements and innovations assure your business to run
            effectively and efficiently.
          </div>
        </div>
      </div>
    );
  }
}
