import { Col, Row, Button } from 'antd';
import React from 'react';
import logo from '../../assets/selendra.png';
import { ReactComponent as Portfolio} from '../../assets/portfolio.svg';
import { ReactComponent as Github} from '../../assets/github.svg';

function Home() {
  return(
    <Row justify='center' className='home'>
      <div className='container'>
        <Row className='full-height'>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Row align='middle' className='full-height'>
              <div>
                <Row justify='center'>
                  <img src={logo} alt="logo" className='home_logo'></img>
                  <span className='font-45 font-bold'>
                    SELENDRA
                  </span>
                </Row>
                <Row>
                  <p className='font-29 font-bold text-gray text-center'>
                  A multi-use cases blockchain<br/>
                  super-app for the Internet 2.0
                  </p>
                </Row>
                <Row>
                  <Col span={12}>
                    <Button className='btn' block>Sign Up</Button>
                  </Col>
                  <Col span={12}>
                    <Button type='ghost' className='text-white r-6 ml-2'>
                      <Row>
                        GitHub <Github/>
                      </Row>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <Row align='middle' className='full-height'>
              <Portfolio />
            </Row>
          </Col>
        </Row>
      </div>
    </Row>
  );
}

export default Home;