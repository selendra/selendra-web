import { Row, Col, Button, Card } from 'antd';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as OnChain } from '../../assets/on-chain.svg';
import { ReactComponent as WASM } from '../../assets/wasm.svg';
import { ReactComponent as POS } from '../../assets/pos.svg';
import { ReactComponent as Down } from '../../assets/down.svg';
import { ReactComponent as HomeImage } from '../../assets/950.svg';
import { ReactComponent as Program } from '../../assets/program.svg';
import { ReactComponent as Roadmap } from '../../assets/roadmap.svg';
import { Link as ScrollTo } from 'react-scroll';
import Koompi from '../../assets/koompi.png';
import selendra from '../../assets/selendra.png';
import va from '../../assets/va.png';
import grood from '../../assets/grood.png';
import rust from '../../assets/rust.png';
import substrate from '../../assets/substrate.png';
import ipfs from '../../assets/ipfs.png';
import './styles/home.css';

export default function Home() {
  return (
    <div className='home'>
      <div>
        <HomeImage className='home__image'/>
        <div className='home__container'>
          <Row align='middle' className='home__handleRes'>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify='start'>
                <div className='home__right'>
                  <Row align='middle'>
                    <img src={selendra} alt='selendra' className='home__selLogo'/>
                    <p className='home__title'>SELENDRA</p>
                  </Row>
                  <p className='home__description'>
                    Selendra is a platform for building, deploy, and employ decentralized, peer-2-peer applications, as simple as the web and mobile applications we use today.
                  </p>
                  <Row>
                    <Col span={12} className='home__btn'>
                      <Button size='large'>
                        <a href='https://wallet.selendra.com/signup' target='blank'>Sign Up</a>
                      </Button>
                    </Col>
                    <Col span={11} offset={1}>
                      <Button size='large' type='ghost'>
                        <a href='https://github.com/selendra' target='blank'>
                          <Row justify='center'>
                            GitHub <Github/>
                          </Row>
                        </a>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
          </Row>
          <Row justify='center'>
            <Col>
              <div className='home__btnScroll'>
                <ScrollTo to='feature__tab' smooth={true} duration={1000}>
                  <Down />
                </ScrollTo>
              </div>
            </Col>
          </Row>
        </div>
        <section id='feature__tab'>
          <div className='home__container'>
            <Row style={{padding: '10% 0'}}>
              <Row justify='center' style={{width: '100%'}}>
                <p className='home__mainFeature'>Features</p>
              </Row>
              <Row style={{width: '100%'}}>
                <Col className='home__featureCard' xs={24} sm={24} md={24} lg={{span: 7, offset: 0}} xl={{span: 7, offset: 0}}>
                  <OnChain />
                  <p className='home__featureTitle'>On-Chain-Governance</p>
                  <p className='home__feature'>A system for managing and implementing changes to the blockchain where rules are encoded into the blockchain protocol. </p>
                </Col>
                <Col className='home__featureCard' xs={24} sm={24} md={24} lg={{span: 7, offset: 1}} xl={{span: 7, offset: 1}}>
                  <WASM />
                  <p className='home__featureTitle'>WASM Smart Contract Runtime</p>
                  <p className='home__feature'>Allows developers to deploy decentralized applications into the blockchain using a multitude of languages.</p>
                </Col>
                <Col className='home__featureCard' xs={24} sm={24} md={24} lg={{span: 7, offset: 1}} xl={{span: 7, offset: 1}}>
                  <POS />
                  <p className='home__featureTitle'>Proof-of-Stake (PoS)</p>
                  <p className='home__feature'>Provides unique revenue generating capabilities to incentivize the community without the need for high computational resources and electricity costs.</p>
                </Col>
              </Row>
            </Row>
          </div>
        </section>
        <Row className='home__container' align='middle'>
          <Col>
            <Row>
              <p className='home__technologyTitle'>Technology</p>
            </Row>
            <Row style={{paddingBottom: '10%'}} align='middle'>
              <img src={rust} alt='rust' className='home__technologyLogo'/>
              <p className='home__technologyLang'>Rust</p>
            </Row>
            <Row style={{paddingBottom: '10%'}} align='middle'>
              <img src={ipfs} alt='ipfs' className='home__technologyLogo'/>
              <div style={{marginLeft: '10px'}}>
                <p className='home__technologyLang'>IPFS</p>
                <p className='home__technologyLangDes'>(Interplanetary File System)</p>
              </div>
            </Row>
            <Row style={{paddingBottom: '10%'}} align='middle'>
              <img src={substrate} alt='substrate' className='home__technologyLogo'/>
              <p className='home__technologyLang'>Substrate</p>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Program />
          </Col>
        </Row>
        <Row className='home__container'>
          <Col>
            <Row>
              <p className='home__partnerTitle'>Real World Use Case Partners</p>
            </Row>
            <Row className='home__partnerContainer'>
              <Col>
                <Row className='home__partner'>
                  <Col>
                    <img src={Koompi} alt='koompi' className='home__partnerImg'/>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={{span: 12, offset: 2}} xl={{span: 12, offset: 2}}>
                    <p className='home__partnerDes'>Wifi Hotspot services at schools and communities KOOMPI Online schools sala.koompi.com KOOMPI Appstore and others service applications</p>
                  </Col>
                </Row>
                <Row className='home__partner'>
                  <Col>
                    <img src={va} alt='va' className='home__partnerImg'/>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={{span: 12, offset: 2}} xl={{span: 12, offset: 2}}>
                    <p className='home__partnerDes'>Real Estate Investment Trust Cropland Investment Carbon Credit Trading Real World Asset Management Programs</p>
                  </Col>
                </Row>
                <Row className='home__partner'>
                  <Col>
                    <img src={grood} alt='grood' className='home__partnerImg'/>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={{span: 12, offset: 2}} xl={{span: 12, offset: 2}}>
                    <p className='home__partnerDes'>Rental & Ride sharing Power/battery swapping program Incentivized for behavioral change</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='home__container'>
          <Col>
            <Row>
              <p className='home__roadmap'>Technology Roadmap</p>
            </Row>
            <Row style={{padding: '10% 0'}}>
              <Roadmap />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}