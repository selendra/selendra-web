import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './styles/footer.css';
import { ReactComponent as Facebook } from '../../assets/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/twitter.svg';
import { ReactComponent as Medium } from '../../assets/medium.svg';
import { ReactComponent as Telegram } from '../../assets/telegram.svg';
import { ReactComponent as Linkedin } from '../../assets/linkedin.svg';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className='footer__title'>Company</p>
            <Link to='/about'>
              <p className='footer__item'>About Selendra</p>
            </Link>
            <Link to='/privacy'>
              <p className='footer__item'>Privacy & Policy</p>
            </Link>
            <Link to='/termofuse'>
              <p className='footer__item'>Term of use</p>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className='footer__title'>Solution</p>
            <p className='footer__item'>Customer Loyalty</p>
            <p className='footer__item'>Crowfunding And Vested</p>
            <p className='footer__item'>API for payment solution</p>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <p className='footer__title'>Developers</p>
            <a href='https://github.com/selendra/indracore/wiki' target='blank'>
              <p className='footer__item'>Documentation</p>
            </a>
            <a href='https://github.com/selendra' target='blank'>
              <p className='footer__item'>GitHub</p>
            </a>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <p className='footer__title'>Connect with us</p>
            <Row>
              <Col span={7}>
                <a href='https://www.facebook.com/selendraio' target='blank'>
                  <Facebook />
                </a>
              </Col>
              <Col span={7}>
                <a href='https://t.me/selendra_sel' target='blank'>
                  <Telegram />
                </a>
              </Col>
              <Col span={7}>
                <a href='https://twitter.com/selendraio' target='blank'>
                  <Twitter />
                </a>
              </Col>
            </Row>
            <div style={{padding: '1rem 0'}}></div>
            <Row>
              <Col span={7}>
                <a href='https://medium.com/selendra' target='blank'>
                  <Medium />
                </a>
              </Col>
              <Col span={7}>
                <a href='https://www.linkedin.com/company/selendra' target='blank'>
                  <Linkedin />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}