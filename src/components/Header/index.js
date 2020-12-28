import { Row, Col, Dropdown, Card, Button } from 'antd';
import selendra from '../../assets/selendra.png';
import './styles/header.css';
import { DownOutlined } from '@ant-design/icons';
import mkplace from '../../assets/mkplace.png';
import { Link } from 'react-router-dom';


export default function Header() {
  const menu = (
    <Card className='header__card'>
      <Row>
        <Col md={12} lg={12} xl={12}>
          <p className='header__cardTitle'>Consumer App</p>
          <a href='/wallet'>
            <Row align='middle'>
              <img src={selendra} alt="logo" className='header__cardImg'></img>
              <span className='header__cardItem'>
                Wallet
              </span>
            </Row>
          </a>
          <br />
          <a href='/mkplace'>
            <Row align='middle'>
              <img src={mkplace} alt="logo" className='header__cardImg'></img>
              <span className='header__cardItem'>
                Market Place
              </span>
            </Row>
          </a>
        </Col>
        <Col md={12} lg={12} xl={12}>
          <p className='header__cardTitle'>Businesses</p>
          <p className='header__cardItem'>Customer Loyalty</p>
          <p className='header__cardItem'>Vested Shares</p>
          <p className='header__cardItem'>Payment</p>
        </Col>
      </Row>
    </Card>
  )

  return (
    <div className='header'>
      <div className='header__container'>
        <Row justify='space-between' align='middle' style={{height: '80px'}}>
          <Col>
            <Link to='/'>
              <Row align='middle'>
                <img src={selendra} alt='selendra' className='header__logo'/>
                <span className='header__title'>SELENDRA</span>
              </Row>
            </Link>
          </Col>
          <Col>
            <Row justify='center'>
              <Dropdown overlay={menu}>
                <span className='header__item'>Products <DownOutlined /></span>
              </Dropdown>
              <span style={{marginLeft: '28px'}} className='header__item'>Company</span>
            </Row>
          </Col>
          <Col>
            <Row>
              <Button type='text' style={{color: '#fff'}} className='header__item'>
                <a href='https://wallet.selendra.com/login' target='blank'>Login</a>
              </Button>
              <div className='header__btn'>
                <Button>
                  <a href='https://wallet.selendra.com/signup' target='blank'>Sign Up</a>
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}
