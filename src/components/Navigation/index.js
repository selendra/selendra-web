import React, {useState} from 'react'
import './styles/nav.css';
import { ReactComponent as Menu } from '../../assets/menu.svg';
import { ReactComponent as Close } from '../../assets/close.svg';
import {Row, Col} from 'antd';

function Navigation() {
  const [ shrink, setShrink ] = useState(false);  
  const handleOpen = () => {
    if(!shrink) setShrink(true)
    else setShrink(false);
  }

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={0} xl={0}>
        <Menu onClick={handleOpen} className='nav__menu'/>
        { shrink && (
        <div className="navigation">
          <Close onClick={handleOpen} />
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="/wallet">wallet</a></li>
            <li><a href="/mkplace">Market Place</a></li>
            <li><a href="/privacy">policy</a></li>
          </ul>
        </div>
        )}
      </Col>
    </Row>
  )
}

export default Navigation