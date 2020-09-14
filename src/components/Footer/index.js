import React from 'react';
import { Row, Col } from 'antd';
import '../../style/Footer.css';
import { ReactComponent as Facebook} from '../../assets/facebook.svg';
import { ReactComponent as Telegram} from '../../assets/telegram.svg';
import { ReactComponent as Medium} from '../../assets/medium.svg';
import { ReactComponent as Linkedin} from '../../assets/linkedin.svg';

function Footer() {
  return (
    <Row className="footer">
      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
        <p className='footer_title'>Company</p>
        <div className='footer_sub'>
          <p>About Selendra</p>
          <p>Privacy & Policy</p>
          <p>Term of use</p>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
        <p className='footer_title'>Solution</p>
        <div className='footer_sub'>
          <p>Customer Loyalty</p>
          <p>Crowfunding And Vested</p>
          <p>API for payment solution</p>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
        <p className='footer_title'>Developers</p>
        <div className='footer_sub'>
          <p>Documentation</p>
          <p>GitHub</p>
        </div>
      </Col>
      <Col xs={12} sm={12} md={6} lg={6} xl={6}>
        <p className='footer_title'>Connect with us</p>
        <Row>
          <Col span={12}>
            <Facebook className='footer_social'/>
          </Col>
          <Col span={12}>
            <Telegram className='footer_social'/>
          </Col>
        </Row>
        <div style={{padding: '1rem 0'}}></div>
        <Row>
          <Col span={12}>
            <Medium className='footer_social'/>
          </Col>
          <Col span={12}>
            <Linkedin className='footer_social'/>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Footer;