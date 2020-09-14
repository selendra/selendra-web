import React, { useState } from 'react';
import { Layout, Menu, Row, Col, Button } from 'antd';
import '../../style/Nav.css';
import logo from '../../assets/selendra.png';
import { ReactComponent as Dropdown } from '../../assets/dropdown.svg';
import { ReactComponent as MenuBar } from '../../assets/menu.svg';

const { Header } = Layout;

function Nav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <>
      <Header className='header'>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">
            <img src={logo} alt="logo" className="logo"/>
            <span className="title">selendra</span>
          </Menu.Item>
          <Menu.Item key="2">
            <span>Company <Dropdown className="dropdown"/></span>
          </Menu.Item>
          <Menu.Item key="3">Product</Menu.Item>
          <Menu.Item className='signup'>
            <Button className="button">Sign Up</Button>
          </Menu.Item>
          <Menu.Item className='login'>
            <span style={{color: '#08B952'}}>Login</span>
          </Menu.Item>
        </Menu>
      </Header>
      <div className='mobile_nav'>
        <div className='mobile_header'>
          <Row align='middle' style={{height: '80px'}}>
            <MenuBar className='menu_icon' onClick={handleNav}/>
            <Row justify='center' style={{width: '100vw', position: 'absolute'}}>
            <img src={logo} alt="logo" className="logo"/>
            <span className="title">selendra</span>
            </Row>
          </Row>
        </div>
      {
        nav && 
        <div className='navItem'>
          <Row justify='center' style={{height: '100vh', width: '100vw'}}>
          <ul>
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Company</span>
            </li>
            <li>
              <span>Products</span>
            </li>
            <li>
              <span>About Us</span>
            </li>
            <li>
              <span>Privacy & Policy</span>
            </li>
            <li>
              <span>Login</span>
            </li>
            <li>
              <Button className='button nav_btn' size='large'>Sign Up</Button>
            </li>
          </ul>
          </Row>
        </div>
      }
      </div>
    </>
  )
}

export default Nav;