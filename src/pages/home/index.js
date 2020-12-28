import { Row, Col, Button, Dropdown, Card } from 'antd';
import { ReactComponent as PP } from '../../assets/2pp.svg';
import { ReactComponent as Github } from '../../assets/github.svg';
import { ReactComponent as OnChain } from '../../assets/on-chain.svg';
import { ReactComponent as WASM } from '../../assets/wasm.svg';
import { ReactComponent as POS } from '../../assets/pos.svg';
import { ReactComponent as Down } from '../../assets/down.svg';
import { Link as ScrollTo } from 'react-scroll';
import Koompi from '../../assets/koompi.png';
import selendra from '../../assets/selendra.png';
import va from '../../assets/va.png';
import grood from '../../assets/grood.png';
import './styles/home.css';

export default function Home() {
  const koompi_overlay = (
    <Card className='home__card'>
      <Row>
        <p>
          Wifi Hotspot services at schools and communities
          KOOMPI Online schools sala.koompi.com
          KOOMPI Appstore and others service applications
        </p>
      </Row>
    </Card>
  )
  const va_overlay = (
    <Card className='home__card'>
      <Row>
        <p>
          Real Estate Investment Trust
          Cropland Investment
          Carbon Credit Trading
          Real World Asset Management Programs
        </p>
      </Row>
    </Card>
  )
  const grood_overlay = (
    <Card className='home__card'>
      <Row>
        <p>
          Rental & Ride sharing
          Power/battery swapping program
          Incentivized for behavioral change
        </p>
      </Row>
    </Card>
  )
  return (
    <div className='home'>
      <div className='home__container'>
        <Row align='middle' style={{height: '90vh'}}>
          <Col span={12}>
            <PP />
          </Col>
          <Col span={8} offset={4}>
            <Row justify='center'>
              <div className='home__right'>
                <Row align='middle'>
                  <img src={selendra} alt='selendra' />
                  <p className='home__title'>SELENDRA</p>
                </Row>
                <p className='home__description'>
                  A multi-use cases blockchain
                  super-app for the Internet 2.0
                </p>
                <Row>
                  <Col span={12} className='home__btn'>
                    <Button>
                      <a href='https://wallet.selendra.com/signup' target='blank'>Sign Up</a>
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button type='ghost'>
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
        <section id='feature__tab'>
        <Row style={{padding: '10% 0'}}>
          <Col span={10}>
            <p className='home__ourVision'>Our Vision</p>
            <p className='home__feature'>
              Selendra is a blockchain application that 
              aims to solve ownership distribution and 
              management issues within decentralized 
              commerce applications and embedded devices.
            </p>
          </Col>
          <Col span={12} offset={2}>
            <Row>
              <Col span={10}>
                <OnChain />
                <p className='home__featureTitle'>On-Chain-Governance</p>
                <p className='home__feature'>A system for managing and implementing changes to the blockchain where rules are encoded into the blockchain protocol. </p>
              </Col>
              <Col span={10} offset={2}>
                <WASM />
                <p className='home__featureTitle'>WASM Smart Contract Runtime</p>
                <p className='home__feature'>Allows developers to deploy decentralized applications into the blockchain using a multitude of languages.</p>
              </Col>
            </Row>
            <Row>
              <Col span={10}>
                <POS />
                <p className='home__featureTitle'>Proof-of-Stake (PoS)</p>
                <p className='home__feature'>Provides unique revenue generating capabilities to incentivize the community without the need for high computational resources and electricity costs.</p>
              </Col>
            </Row>
          </Col>
        </Row>
        </section>
        <Row className='home__partner'>
          <Col style={{width: '100%'}}>
            <Row justify='center'>
              <p className='home__partnerTitle'>Real World Use Case Partners</p>
            </Row>
            <Row justify='space-between' align='middle' style={{margin: '4%'}}>
              <Col>
                <Dropdown overlay={koompi_overlay} placement='topCenter'>
                  <img src={Koompi} alt='koompi' className='home__partnerImg'/>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown overlay={va_overlay} placement='topCenter'>
                  <img src={va} alt='va' className='home__partnerImg'/>
                </Dropdown>
              </Col>
              <Col>
                <Dropdown overlay={grood_overlay} placement='topCenter'>
                  <img src={grood} alt='grood' className='home__partnerImg'/>
                </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
}