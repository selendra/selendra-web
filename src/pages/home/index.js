import React from 'react';
import '../../style/Home.css';
import { Row, Col, Button, Input } from 'antd';
import logo from '../../assets/selendra.png';
import promo from '../../assets/promo.png';
import { ReactComponent as Github} from '../../assets/github.svg';
import { ReactComponent as Portfolio} from '../../assets/portfolio.svg';
import { ReactComponent as Email} from '../../assets/email.svg';

function Home() {
  return (
    <div className='container'>
      <div className="content">
      <Row align='middle' style={{minHeight: '92vh'}}>
        <Col span={'12'}>
          <span className="selendra_title">
            <img src={logo} alt="logo" className='home_logo'></img> selendra
          </span>
          <p className='description'>
            A multi-use cases blockchain <br/>
            super-app for the Internet 2.0
          </p>
          <Row>
            <Button className="button home_button" size='large'>Sign Up</Button>
            <Button className='github_button' size='large'>
              <Row justify='center'>
                GitHub <Github />
              </Row>
            </Button>
          </Row>
        </Col>
        <Col span={'12'}>
          <Row justify='center'>
            <Portfolio />
          </Row>
        </Col>
      </Row>
      <Row align='middle' style={{minHeight: '100vh'}}>
        <Col span={'12'}>
          <Row justify='start'>
            <img src={promo} alt="promo" />
          </Row>
        </Col>
        <Col span={'12'}>
          <Row justify="end">
            <span className="selendra_title">
              <img src={logo} alt="logo" className='home_logo'></img> selendra <br/>
              walletapp
            </span>
            <p className='description'>
              Available both Mobile and <br/>
              WebApp
            </p>
            <Row>
              <Button className="button home_button" size='large'>Sign Up</Button>
              <Button className='github_button' size='large'>
                <Row justify='center'>
                  Get APK <Github />
                </Row>
              </Button>
            </Row>
          </Row>
        </Col>
      </Row>
      </div> 
      <div style={{paddingTop: "6rem"}}></div>
      <Row className='notify'>
        <Col span={12}>
          <div style={{padding: '1rem 0'}}>
            <span className="home_title">Sign Up for Project Updates</span>
            <p className='notify_sub'>We’ll update you on our project status <br/>
              & let you know when we’ve launched.
            </p> 
          </div>
        </Col>
        <Col span={12}>
          <div style={{padding: '2rem 0'}}>
            <Input prefix={<Email className="email_svg"/>} placeholder='Email' size='large'></Input>
            <div style={{padding: '1rem 0'}}></div>
            <Button className="button" block size='large'>Sign Up</Button>
          </div>
        </Col>
      </Row>
      <div style={{padding: '1rem 0'}}></div>
    </div>
  )
}

export default Home;