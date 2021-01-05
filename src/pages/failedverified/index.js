import React from 'react'
import phone from '../../assets/phone-failed.png';
import { Row, Col, Button } from 'antd';
import './styles/failed.css'

export default function Failedverified() {
  return (
    <div className='failed'>
      <div className='failed__container'>
        <Row justify='center' align='middle'>
          <Col>
            <img src={phone} alt='phone' />
          </Col>
          <Col>
            <p className='failed__title'>Failed Verified</p>
            <div className='failed__btn'>
              <Button size='large'>
                <a href='/'>Back</a>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}