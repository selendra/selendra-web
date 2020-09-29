import React, { useState } from 'react';
import { ReactComponent as Email} from '../../assets/email.svg';
import {Row, Col, Input, Button, message} from 'antd';
import axios from 'axios';

function Notify() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    if(email) {
      setLoading(true);
      axios.post('https://sheet.best/api/sheets/5e68144d-ab55-4dcb-a1ac-097aeed04d31', {
        Email: email
      })
      .then(_=> {
        message.success('Thank you for sign up!!');
        setLoading(false);
        setEmail('');
      })
    }
  }

  return (
    <div className='bg-gray-light justify-center notify'>
      <div className='container'>
        <Row className='py-2 bg-gray-light' align='middle'>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className='font-45 font-bold'>Sign Up For Update</p>
            <p className='font-29'>
              You will get update on project roadmap status, network launch, and token distribution.
            </p>
          </Col>
          <Col xs={24} sm={24} md={{span: 10, offset:2}} lg={{span: 10, offset:2}} xl={{span: 10, offset:2}}>
            <Input 
              type='text'
              value={email}
              onChange={ e => setEmail(e.target.value) } 
              prefix={<Email className="email_icon"/>} 
              placeholder='Email' 
              size='large'
            ></Input>
            <div style={{padding: '1rem 0'}}></div>
            <Button className="btn" block size='large' onClick={handleSignUp} loading={loading}>Sign Up</Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Notify;