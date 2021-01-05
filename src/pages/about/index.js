import { Row, Col, Card } from 'antd';
import './styles/about.css';
import saing from '../../assets/our-team/saing-sab.png';
import rithy from '../../assets/our-team/rithy-thol.png';
import yuth from '../../assets/our-team/sokhomoliyuth-tea.png';
import daveat from '../../assets/our-team/daveat.png';
import nath from '../../assets/our-team/nath.png';
import piset from '../../assets/our-team/piset.png';
import chay from '../../assets/our-team/bunchay.png';

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
              The Selendra platform is used to build, deploy, and employ decentralized, peer-2-peer applications, as simple as the web and mobile applications we use today.
            </p>
            <hr />
            <p className='about__description'>
              Selendra presents an innovative solution to the problem of mass-user adoption in blockchain applications.We are rethinking the nature of web and mobile application development, incorporating blockchain for both developer and user benefit.The coming digital economy will be profoundly molded and impacted by the great recent innovation of blockchain technology.Selendra is built upon blockchain technology as an add-on feature to KOOMPI, forming a new economic micro-community. Selendra leverages the power and scope of KOOMPI, while KOOMPI leverages the power and scope of Selendra to form a positive feedback loop.
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
              <Col xs={24} sm={24} md={24} lg={{span:5, offset:0}} xl={{span:5, offset:0}}>
                <Card className='about__card'>
                  <img src={nath} alt='saing-sab' />
                  <p className='about__cardName'>Nath Lay</p>
                  <p className='about__cardP'>Blockchain Developer</p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={{span:5, offset:1}} xl={{span:5, offset:1}}>
                <Card className='about__card'>
                  <img src={daveat} alt='saing-sab' />
                  <p className='about__cardName'>Daveat Corn</p>
                  <p className='about__cardP'>Mobile Developer</p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={{span:5, offset:1}} xl={{span:5, offset:1}}>
                <Card className='about__card'>
                  <img src={chay} alt='saing-sab' />
                  <p className='about__cardName'>Bunchay Ouk</p>
                  <p className='about__cardP'>Mobile Developer</p>
                </Card>
              </Col>
              <Col xs={24} sm={24} md={24} lg={{span:5, offset:1}} xl={{span:5, offset:1}}>
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