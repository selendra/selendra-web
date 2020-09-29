import React from 'react';
import {Row, Col } from 'antd';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Telegram } from '../../assets/telegram.svg';
import { ReactComponent as Medium } from '../../assets/medium.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { Link, useHistory } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer justify-center'>
      <div className='container py-2'>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className='font-29 font-bold'>Company</p>
            <div className='font-22'>
              <Link to='/about'>
                <p className='text-gray'>About Selendra</p>
              </Link>
              <Link to='/privacy'>
                <p className='text-gray'>Privacy & Policy</p>
              </Link>
              <Link to='/termofuse'>
                <p className='text-gray'>Term of use</p>
              </Link>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className='font-29 font-bold'>Solution</p>
            <div className='font-22 text-gray'>
              <p>Customer Loyalty</p>
              <p>Crowfunding And Vested</p>
              <p>API for payment solution</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className='font-29 font-bold'>Developers</p>
            <div className='font-22 text-gray'>
              <a href='https://github.com/selendra/indracore/wiki' target='blank'>
                <p className='text-gray'>Documentation</p>
              </a>
              <a href='https://github.com/selendra' target='blank'>
                <p className='text-gray'>GitHub</p>
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className='font-29 font-bold'>Connect with us</p>
            <Row>
              <Col span={7}>
                <a href='https://www.facebook.com/selendraio' target='blank'>
                  <Facebook className='footer-icon'/>
                </a>
              </Col>
              <Col span={7}>
                <a href='https://t.me/selendra_sel' target='blank'>
                  <Telegram className='footer-icon'/>
                </a>
              </Col>
              <Col span={7}>
                <a href='https://twitter.com/selendraio' target='blank'>
                  <Twitter className='footer-icon'/>
                </a>
              </Col>
            </Row>
            <div style={{padding: '1rem 0'}}></div>
            <Row>
              <Col span={7}>
                <a href='https://medium.com/selendra' target='blank'>
                  <Medium className='footer-icon'/>
                </a>
              </Col>
              <Col span={7}>
                <a href='https://www.linkedin.com/company/selendra' target='blank'>
                  <Linkedin className='footer-icon'/>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer;