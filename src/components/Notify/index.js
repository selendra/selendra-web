import React from 'react';
import { ReactComponent as Email} from '../../assets/email.svg';
import {Row, Col, Input, Button} from 'antd';

function Notify() {
  return (
    <div className='bg-gray-light justify-center notify'>
      <div className='container'>
        <Row className='py-2 bg-gray-light' align='middle'>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className='font-45 font-bold'>Sign Up For Project Update</p>
            <p className='font-29'>
              We’ll update you on our project status 
              & let you know when we’ve launched.
            </p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Input prefix={<Email className="email_icon"/>} placeholder='Email' size='large'></Input>
            <div style={{padding: '1rem 0'}}></div>
            <Button className="btn" block size='large'>Sign Up</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Notify;