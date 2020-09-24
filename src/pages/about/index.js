import React from 'react';
import {Row, Col} from 'antd';

function About() {
  return (
    <div className='about'>
      <Row justify='center' className='home'>
        <div className='container'>
          <Row className='py-2'>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <span className='font-45 font-bold text-gray'>About</span>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <div className='font-22'>
                <span>Selendra is a new generation of trusted global solutions for creating a digital asset. Customer Loyalty, Real Estate, Vested Shares and Payment Solution based on blockchain.</span>
                <hr/>
                <span>The platform is designed to bring collectively a set of logistics, private equity, food, and hospitality transaction more efficiency. We have built a risk-free infrastructure established for security/utility token offerings on Selendra to maximize the safety and security of transactions on the Platform.</span>
                <p>Selendra Platform currently built on top of the Stellar network and engages with advanced blockchain technology to extended capabilities as fast transaction processing at low cost, enhanced the security of all processes-from issuance to storage to transfers of tokens for swap, trading on the market.</p>
              </div>
            </Col>
          </Row>
          <Row>

          </Row>
        </div>
      </Row>
    </div>
  )
}

export default About
