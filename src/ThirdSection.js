import React, { Component } from 'react';
import './App.css';
import Product from './Images/product.png';
import Service from './Images/service.png';
import Tech from './Images/tech.png';
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
export default class ThirdSection extends Component {
  render() {
    return (
      <div className={'sectionBase'} style={{ display: 'block' }}>
        <div className="sectionHeading">Product and Services</div>
        <div className={'thirdContainer'}>
          {product.map((val) => {
            return (
              <div className="thirdItem">
                <div className="thirdImage">
                  <img src={val.image} height="100px" alt="" />
                </div>
                <div className="thirdTitle">{val.title}</div>
                <div className="thirdDesc">{val.desc}</div>
                <div
                  className={'thirdButtonContainer'}
                  style={{
                    marginTop: val.title === 'Our Product' && '57px',
                  }}
                >
                  <div className={'button'}>Read More</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
