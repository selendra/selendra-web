import React from 'react';
import { Layout, Menu, Row, Col, Button } from 'antd';
import '../../style/Nav.css';
import logo from '../../assets/selendra.png';
import { ReactComponent as Dropdown } from '../../assets/dropdown.svg';

const { Header } = Layout;
function Nav() {
  return (
    <Header>
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
  )
}

export default Nav;