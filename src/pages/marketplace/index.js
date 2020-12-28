import { Row, Col, Button } from 'antd';
import { ReactComponent as MK } from '../../assets/mkplace.svg';
import selendra from '../../assets/selendra.png';
import './styles/marketplace.css';
import { ReactComponent as GitHub } from '../../assets/github.svg';
import product from '../../assets/product-mkplace.png';

export default function MKPlace() {
  return (
    <div className='mkplace'>
      <div className='mkplace__container'>
        <Row style={{padding: '4% 0'}}>
          <Col span={12}>
            <MK />
          </Col>
          <Col span={10} offset={2}>
            <Row align='middle'>
              <img src={selendra} alt={selendra}/>
              <p className='mkplace__title'>SELENDRA</p>
            </Row>
            <p className='mkplace__title'>MKPlace</p>
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
        </Row>
        <div style={{padding: '6% 0'}}></div>
        <Row justify='space-between'>
          <Col span={12}>
            <div style={{paddingTop: '4%'}}>
              <p className='mkplace__proTitle'>Decentralized Marketplace and Wallet</p>
              <p className='mkplace__proDescription'>A self-organizing marketplace of peer-to-peer buy and sell transactions where SEL tokens and other digital assets can be sent and received.</p>
              <div className='mkplace__btnGetAPK'>
                <Button size='large'>
                  <a href='https://github.com/selendra/selendra-mkplace/releases/tag/v0.1.0-rc' target='blank'>Get APK</a>
                </Button>
              </div>
            </div>
          </Col>
          <Col>
            <img src={product} alt='product' style={{width: '520px'}}/>
          </Col>
        </Row>
      </div>
    </div>
  )
}