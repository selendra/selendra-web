import React from 'react';
import { Card, Row, Button } from 'antd';
import { ReactComponent as Failed } from '../../assets/failed.svg';

function Failedverified() {
  return (
    <div className='success'>
      <Row justify='center'>
        <Card className='success__card'>
          <Failed className='success__logo'/>
          <p className='success__title'>User Verification Failed</p>
          <p className='success__description'>The user verification was not successful.<br/> Please contact our support at support@selendra.com</p>
        </Card>
      </Row>
    </div>
  )
}

export default Failedverified;
