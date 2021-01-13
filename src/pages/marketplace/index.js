import { Row, Col, Button } from 'antd';
import selendra from '../../assets/selendra.png';
import './styles/marketplace.css';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import { ReactComponent as Mkplace } from '../../assets/mkplace.svg';

import product from '../../assets/product-mkplace.png';

export default function MKPlace() {
  return (
    <div className='mkplace'>
      <Mkplace className='mkplace__bg'/>
      <div className='mkplace__container'>
        <Row style={{padding: '4% 0'}}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Row align='middle'>
              <img src={selendra} alt={selendra} className='mkplace__selLogo'/>
              <p className='mkplace__title'>SELENDRA</p>
            </Row>
            <p className='mkplace__title'>Market Place</p>
            <p className='mkplace__description'>
              A Decentralized Marketplace that connect community of users together to trade and exchange goods and services freely, securely and fairly. Powered by Selendra Public Blockchain built with Substrates. 
            </p>
            <Row className='mkplace__btn'>
              <Button type='ghost' size='large'>
                <Row justify='center'>
                  GitHub <GitHub />
                </Row>
              </Button>
            </Row>
          </Col>
          <Col xs={0} sm={0} md={0} lg={{span: 10, offset: 2}} xl={{span: 10, offset: 2}}></Col>
        </Row>
        <div style={{padding: '6% 0'}}></div>
        <Row justify='space-between'>
          <Col>
            <img src={product} alt='product' className='mkplace__product' />
          </Col>
          <Col span={12}>
            <div style={{paddingTop: '4%'}}>
              <p className='mkplace__proTitle'>Decentralized Marketplace and Wallet</p>
              <p className='mkplace__proDescription'>A self-organizing marketplace of peer-to-peer buy and sell transactions where SEL tokens and other digital assets can be sent and received.</p>
              <Row>
                <Col xs={0} sm={0} md={0} lg={24} xl={24} className='mkplace__btnGetAPK'>
                  <Button size='large'>
                    <a href='https://github.com/selendra/selendra-mkplace/releases/tag/v0.1.0-rc' target='blank'>Get APK</a>
                  </Button>
                  <Button size='large' style={{marginLeft: '20px'}}>
                    <a href='https://market.selendra.com/' target='blank'>Web App</a>
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row justify='center'>
          <Col xs={24} sm={24} md={24} lg={0} xl={0} className='mkplace__btnGetAPK'>
            <Button size='large'>
              <a href='https://github.com/selendra/selendra-mkplace/releases/tag/v0.1.0-rc' target='blank'>Get APK</a>
            </Button>
            <Button size='large' style={{marginLeft: '20px'}}>
              <a href='https://market.selendra.com/' target='blank'>Web App</a>
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}