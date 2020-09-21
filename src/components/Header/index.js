import React, { useState } from 'react';
import logo from '../../assets/selendra.png';
import { Row, Col, Button, Dropdown, Card, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ReactComponent as MenuBar } from '../../assets/menu.svg';
import { ReactComponent as Close } from '../../assets/close.svg';
import { Link } from 'react-router-dom';

function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  const handleClose = () => {
    setNav(false);
  }

  const menu = (
    <Card className='pa-2 bg-gray-light r-12 text-white md-width'>
      <Row>
        <Col md={12} lg={12} xl={12}>
          <p className='font-22 font-bold'>Consumer App</p>
          <Link to='/wallet'>
            <Row>
              <img src={logo} alt="logo" className='icon ml-1'></img>
              <span className='font-16 font-bold text-white hover ml-1'>
                SELENDRA
              </span>
            </Row>
          </Link>
        </Col>
        <Col md={12} lg={12} xl={12}>
          <p className='font-22 font-bold'>Businesses</p>
          <p className='font-16 font-bold ml-1'>Customer Loyalty</p>
          <p className='font-16 font-bold ml-1'>Vested Shares</p>
          <p className='font-16 font-bold ml-1'>Payment</p>
        </Col>
      </Row>
    </Card>
  )
  return(
    <>
      <div className='header justify-center'>
        <div className='container'>
          <Row align='middle'>
            <Col xs={0} sm={8} md={8} lg={8} xl={8}>
              <Link to='/'>
                <Row align='middle'>
                  <img src={logo} alt="logo" className='home_logo'></img>
                  <span className='font-45 font-bold text-white'>
                    SELENDRA
                  </span>
                </Row>
              </Link>
            </Col>
            <Col xs={0} sm={8} md={8} lg={8} xl={8}>
              <Row justify='center'>
                <Dropdown overlay={menu}>
                  <span className='font-16 font-bold hover'>Products <DownOutlined /></span>
              </Dropdown>
                <span className='font-16 font-bold hover ml-2'>Company</span>
              </Row>
            </Col>
            <Col xs={0} sm={8} md={8} lg={8} xl={8}>
              <Row justify='end'>
                <Col>
                  <span className='font-16 font-bold hover'>Login</span>
                  <Button size='large' className='btn ml-2'>Sign Up</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    {/* Mobile */}
      <div className='mobile_nav'>
        <div className='mobile_header'>
          <Row align='middle' style={{height: '80px'}}>
            <MenuBar className='menu_icon' onClick={handleNav}/>
            <Row justify='center' align='middle' style={{width: '100vw', position: 'absolute'}}>
              <img src={logo} alt="logo" className="home_logo"/>
              <span className="font-22 font-bold">SELENDRA</span>
            </Row>
          </Row>
        </div>
      {
        nav &&
        <div className='navItem'>
          {/* <Row justify='end'><Close onClick={handleClose} className='close-icon'/></Row> */}
          <Row justify='center' align='middle' style={{height: '100vh', width: '100vw'}}>
            <ul>
              <li>
                <a href='/'>
                  <span className='font-22 font-bold text-white'>Home</span>
                </a>
              </li>
              <li className='pt-1'>
                <span className='font-22 font-bold'>Company</span>
              </li>
              <li className='pt-1'>
                <a href='/wallet'>
                  <span className='font-22 font-bold text-white'>Products</span>
                </a>
              </li>
              <li className='pt-1'>
                <span className='font-22 font-bold'>About Us</span>
              </li>
              <li className='pt-1'>
                <span className='font-22 font-bold'>Privacy & Policy</span>
              </li>
              <li className='pt-1'>
                <span className='font-22 font-bold'>Login</span>
              </li>
              <li className='pt-1'>
                <Button className='btn' size='large'>Sign Up</Button>
              </li>
            </ul>
          </Row>
        </div>
      }
      </div>
    </>
  );
}

export default Header;