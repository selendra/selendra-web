import product from '../../assets/wallet.png';
import { Row, Col, Button, Carousel } from 'antd';
import './styles/wallet.css';
import selendra from '../../assets/selendra.png';
import phone from '../../assets/wallet-phone.png';
import laptop from '../../assets/laptop-wallet.png';

export default function Wallet() {
  return (
    <div className='wallet'>
      <div className='wallet__bg'>
        <div className='wallet__container'>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={10}>
              <Row align='middle'>
                <img src={selendra} alt='selendra' className='wallet__selLogo'/>
                <p className='wallet__title'>SELENDRA</p>
              </Row>
              <p className='wallet__title'>WALLET</p>
              <p className='wallet__description'>
                A wallet to spend and earn SEL token and other assets of Selendra blockchain echo system.
              </p>
              <Row className='wallet__btn'>
                <Col span={12} className='wallet__btnSignup'>
                  <Button size='large'>
                    <a href='https://wallet.selendra.com/signup' target='blank'>Sign Up</a>
                  </Button>
                </Col>
                <Col span={11} offset={1}>
                  <Button size='large' type='ghost'>Get APK</Button>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={{span: 10, offset: 2}} xl={{span: 10, offset: 2}}></Col>
          </Row>
        </div>
      </div>
      <div className='wallet__container'>
        <Row>
          <Col xs={24} sm={24} md={24} lg={14} xl={14}>
            <Carousel autoplay>
              <div>
                <Row justify='center'>
                  <img src={phone} alt='wallet-phone' className='wallet__phone'/>
                </Row>
              </div>
              <div>
                <Row justify='center' align='middle' style={{height: '100%'}}>
                  <img src={laptop} alt='wallet-phone' className='wallet__phone'/>
                </Row>
              </div>
            </Carousel>
          </Col>
          <Col xs={24} sm={24} md={24} lg={10} xl={10}>
            <p className='wallet__phoneDescription'>Selendra Wallets are used to store and transact SEL tokens and multiple other cryptocoins. Wallets can be integrated into any application where a use case exists, connecting the application to the Selendra main chain.</p>
            <Row>
              <Col span={12} className='wallet__phoneBtn'>
                <Button size='large'>Get APK</Button>
              </Col>
              <Col span={12} className='wallet__phoneBtn'>
                <Button size='large'>
                  <a href='https://wallet.selendra.com/login' target='blank'>Web Wallet</a>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}