import { Button, Col, Row } from 'antd';
import React from 'react';
import logo from '../../assets/selendra.png';
import promo from '../../assets/promo.png';
import { ReactComponent as Android } from '../../assets/android.svg';
import { Link } from 'react-scroll';

function Wallet() {
  return (
    <Row justify='center'>
      <div className='container'>
        <div className='wallet'>
          <Row className='full-height' align='middle'>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row>
                <div>
                  <Row justify='center' align='middle'>
                    <img src={logo} alt="logo" className='home_logo'></img>
                    <span className='font-45 font-bold'>
                      SELENDRA
                    </span>
                  </Row>
                  <Row justify='center'>
                    <span className='font-45 font-bold'>Wallet App</span>
                  </Row>
                  <Row>
                    <p className='font-29 text-gray'>Available both Mobile and
                      WebApp
                    </p>
                  </Row>
                  <Row>
                    <Col span={12}>
                      <Link to="notify__tab" smooth={true} duration={1000}>
                        <Button className='btn' block>Sign Up</Button>
                      </Link>
                    </Col>
                    <Col span={12}>
                      <Button type='ghost' className='text-white r-6 ml-2'>
                        <Row>
                          Get APK <Android/>
                        </Row>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row align='middle'>
                <img src={promo} alt="promo" className='wallet-promo'/>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Row>
  )
}

export default Wallet;