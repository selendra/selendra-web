import { useState } from 'react';
import { Row, Col, Input, message, Button } from 'antd';
import './styles/notify.css';
import axios from 'axios';
import { ReactComponent as Email } from '../../assets/email.svg';

export default function Notify() {
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
    <section id="notify__tab">
    <div className='notify'>
      <div className='notify__container'>
        <Row align='middle'>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className='notify__title'>Sign Up for Project Update</p>
            <p className='notify__description'>You will get update on project roadmap status, network launch, and token distribution.</p>
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
            <div className='notify__btn'>
              <Button block size='large' onClick={handleSignUp} loading={loading}>Sign Up</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
    </section>
  )
}