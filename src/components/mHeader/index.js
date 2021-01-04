import React from 'react';
import { Row, Col } from 'antd';
import './styles/mHeader.css';
import { ReactComponent as Menu } from '../../assets/menu.svg';

export default function  MHeader() {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={24} lg={0} xl={0}>
          <Menu />
        </Col>
      </Row>
    </div>
  )
}