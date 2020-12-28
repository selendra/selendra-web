import { Row, Col, Card } from 'antd';
import './styles/about.css';
import saing from '../../assets/our-team/saing-sab.png';
import rithy from '../../assets/our-team/rithy-thol.png';
import yuth from '../../assets/our-team/sokhomoliyuth-tea.png';
import daveat from '../../assets/our-team/daveat.png';
import nath from '../../assets/our-team/nath.png';
import piset from '../../assets/our-team/piset.png';

export default function About() {
  return (
    <div className='about'>
      <div className='about__container'>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className='about__title'>About Selendra</p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <p className='about__description'>
              Selendra is a new generation of trusted global solutions for creating a digital asset. 
              Customer Loyalty, Real Estate, Vested Shares and Payment Solution based on blockchain.
            </p>
            <hr />
            <p className='about__description'>
              The platform is designed to bring collectively a set of logistics, private equity, food, and hospitality transaction more efficiency. We have built a risk-free infrastructure established for security/utility token offerings on Selendra to maximize the safety and security of transactions on the Platform.
              Selendra Platform currently built on top of the Stellar network and engages with advanced blockchain technology to extended capabilities as fast transaction processing at low cost, enhanced the security of all processes-from issuance to storage to transfers of tokens for swap, trading on the market.
            </p>
          </Col>
        </Row>
        <Row>
          <Col style={{width: '100%'}}>
            <p className='about__title'>Our Team</p>
            <Row justify='space-between'>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Card className='about__card'>
                  <img src={saing} alt='saing-sab' />
                  <p className='about__cardName'>Saing Sab</p>
                  <p className='about__cardP'>Co-Founder</p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={{span: 6, offset: 1}} xl={{span: 6, offset: 1}}>
                <Card className='about__card'>
                  <img src={rithy} alt='saing-sab' />
                  <p className='about__cardName'>Rithy Thol</p>
                  <p className='about__cardP'>Advisor</p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={{span: 6, offset: 1}} xl={{span: 6, offset: 1}}>
                <Card className='about__card'>
                  <img src={yuth} alt='saing-sab' />
                  <p className='about__cardName'>Sokhomoliyuth Tea</p>
                  <p className='about__cardP'>Technical Advisor</p>
                </Card>
              </Col>
            </Row>
            <br />
            <Row justify='space-between'>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Card className='about__card'>
                  <img src={nath} alt='saing-sab' />
                  <p className='about__cardName'>Nath Lay</p>
                  <p className='about__cardP'>Blockchain Developer</p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Card className='about__card'>
                  <img src={daveat} alt='saing-sab' />
                  <p className='about__cardName'>Daveat Corn</p>
                  <p className='about__cardP'>Mobile Developer</p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                <Card className='about__card'>
                  <img src={piset} alt='saing-sab' />
                  <p className='about__cardName'>Piset Heang</p>
                  <p className='about__cardP'>Web Developer</p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}