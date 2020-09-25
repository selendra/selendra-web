import React from 'react';
import {Row, Col, Card, Carousel} from 'antd';
import saingSab from '../../assets/saing-sab.jpg'
import rithyThol from '../../assets/rithy-thol.png'
import yuth from '../../assets/Sokhomoliyuth-Tea.jpg'
import piset from '../../assets/piset-heang.jpg'
import daveat from '../../assets/daveat-corn.jpg'
import nath from '../../assets/nath-lay.jpg'
import shing from '../../assets/shenshing-ly.png';

function About() {
  return (
    <div className='about'>
      <Row justify='center' className='home'>
        <div className='container'>
          <Row className='py-2'>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <span className='font-45 font-bold text-gray'>About Selendra</span>
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
          {/* <p className='font-45 font-bold text-gray'>Our Team</p>
            <div>
              <Row className='py-2' justify='center'>
                <Col xs={24} sm={24} md={{span: 6, offset: 0}} lg={{span: 6, offset: 0}} xl={{span: 6, offset: 0}}>
                  <Card className='text-center text-white bg-gray border-none' style={{width: 300}}>
                    <img src={saingSab}></img>
                    <p className='font-29'>Saing Sab</p>
                    <p className='font-22'>Co-Founder</p>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={{span: 6, offset: 2}} lg={{span: 6, offset: 2}} xl={{span: 6, offset: 2}}>
                  <Card className='text-center text-white bg-gray border-none' style={{width: 300}}>
                    <img src={rithyThol}></img>
                    <p className='font-29'>Rithy Thol</p>
                    <p className='font-22'>Advisor</p>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={{span: 6, offset: 2}} lg={{span: 6, offset: 2}} xl={{span: 6, offset: 2}}>
                  <Card className='text-center text-white bg-gray border-none' style={{width: 300}}>
                    <img src={yuth}></img>
                    <p className='font-29'>Sokhomoliyuth Tea</p>
                    <p className='font-22'>Technical Advisor</p>
                  </Card>
                </Col>
              </Row>
            </div>
            <div>
              <Row className='py-2' justify='center'>
                <Col xs={24} sm={24} md={{span: 6, offset: 0}} lg={{span: 6, offset: 0}} xl={{span: 6, offset: 0}}>
                  <Card className='text-center text-white bg-gray border-none' style={{width: 300}}>
                    <img src={daveat}></img>
                    <p className='font-29'>Daveat Corn</p>
                    <p className='font-22'>Mobile Developer</p>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={{span: 6, offset: 2}} lg={{span: 6, offset: 2}} xl={{span: 6, offset: 2}}>
                  <Card className='text-center text-white bg-gray border-none' style={{width: 300}}>
                    <img src={piset}></img>
                    <p className='font-29'>Piset Heang</p>
                    <p className='font-22'>Web Developer</p>
                  </Card>
                </Col>
                <Col xs={24} sm={24} md={{span: 6, offset: 2}} lg={{span: 6, offset: 2}} xl={{span: 6, offset: 2}}>
                  <Card className='text-center text-white bg-gray border-none' style={{width: 300}}>
                    <img src={nath}></img>
                    <p className='font-29'>Nath Lay</p>
                    <p className='font-22'>Blockchain Developer</p>
                  </Card>
                </Col>
              </Row>
            </div>
            <div>
              <Row className='py-2' justify='center'>
                <Col xs={24} sm={24} md={{span: 6, offset: 0}} lg={{span: 6, offset: 0}} xl={{span: 6, offset: 0}}>
                  <Card className='text-center text-white bg-gray border-none' style={{width: 300}}>
                    <img src={shing}></img>
                    <p className='font-29'>ShenShing Ly</p>
                    <p className='font-22'>Blockchain Developer</p>
                  </Card>
                </Col>
              </Row>
            </div> */}
        </div>
      </Row>
    </div>
  )
}

export default About
