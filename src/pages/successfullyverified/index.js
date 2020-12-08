import React from 'react';
import { Card, Row, Button } from 'antd';
import { ReactComponent as Success } from '../../assets/tick.svg';

function Successfullyverified() {
  return (
    <div className='success'>
      <Row justify='center'>
        <Card className='success__card'>
          <Success className='success__logo'/>
          <p className='success__title'>User Successfully Activated</p>
          <p className='success__description'>Congratulations your user successfully activated.<br/> Please login to perform other operations.</p>
          <a href='https://wallet.selendra.com'>
            <Button size='large' className='btn'>Go to The Platform</Button>
          </a>
        </Card>
      </Row>
    </div>
  )
}

export default Successfullyverified;
