import React from 'react'
import phone from '../../assets/phone-success.png';
import { Row, Col, Button } from 'antd';
import './styles/success.css'

export default function Success() {
  return (
    <div className='success'>
      <div className='success__container'>
        <Row justify='center' align='middle'>
          <Col>
            <img src={phone} alt='phone' />
          </Col>
          <Col>
            <p className='success__title'>Successfully Verified</p>
            <div className='success__btn'>
              <Button size='large'>
                <a href='https://wallet.selendra.com/login'>Login</a>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}