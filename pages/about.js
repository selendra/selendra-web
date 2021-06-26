import styles from '../styles/About.module.css'
import { Row, Col, Button } from 'antd'
import { useState } from 'react'
import Link from 'next/link'

export default function About() {
  const [isReadmore, setIsReadmore] = useState(false);

  return (
    <div>
      <div className={styles.about}>
        <div className={styles.about__container}>
          <div className={styles.about__section}>
            <h1>ABOUT US</h1>
            <p>The Selendra platform is used to build, deploy, and employ decentralized, peer-2-peer applications as simple as build the webapps and mobile applications we use today.</p>
            <hr/>
            <p>Selendra presents an innovative solution to the problem of mass-user adoption in blockchain applications. Rethink the nature of webapps and mobile application development by incorporating blockchain for both developer and user benefit. 
              { !isReadmore &&
                <Button type='link' onClick={() => setIsReadmore(true)}>Read More</Button>
              }
            </p>
            { isReadmore && 
              <p>
                The coming digital economy will be profoundly molded and impacted by the great recent innovation of blockchain technology.Selendra is built upon blockchain technology as an add-on feature to KOOMPI, 
                forming a new economic micro-community. Selendra leverages the power and scope of KOOMPI, while KOOMPI leverages the power and scope of Selendra to form a positive feedback loop.
                <Button type='link' onClick={() => setIsReadmore(false)}>Show less</Button>
              </p>
            }
          </div>
          <div className={styles.team}>
            <h1>Selendra Is Crafted And Built By These Friendly Folks</h1>
            <Row>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/rithy-thol.png' alt='rithy-thol' />
                    <h2>Rithy Thul</h2>
                    <h3>Co-founder & CEO</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/saing-sab.png' alt='saing-sab' />
                    <h2>Saing Sab</h2>
                    <h3>Co-founder & CTO</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/nath.png' alt='nath' />
                    <h2>Lay Nat</h2>
                    <h3>Blockchain dev</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/daveat.png' alt='daveat' />
                    <h2>Daveat Corn</h2>
                    <h3>Fullstack mobile dev</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/bunchhay.png' alt='bunchhay' />
                    <h2>Bonchay Ouk</h2>
                    <h3>Fullstack mobile dev</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/piset.png' alt='piset' />
                    <h2>Piset Heang</h2>
                    <h3>Full-stack webdev</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/hengsrun.png' alt='hengsrun' />
                    <h2>Hengsrun Seang</h2>
                    <h3>Technical Documentation</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/molika.png' alt='molika' />
                    <h2>Mollika Chum</h2>
                    <h3>Users’ Documentation</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/seavthean.png' alt='seavthean' />
                    <h2>Siev Thean Thoun</h2>
                    <h3>Designer</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/sreyneang.png' alt='sreyneang' />
                    <h2>Sreyneang Oun</h2>
                    <h3>Community</h3>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Row justify='center'>
                  <Col className={styles.team__member}>
                    <img src='/images/teams/sofy.png' alt='sofy' />
                    <h2>Sofy Thy</h2>
                    <h3>Community</h3>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.mission__vision}>
          <div className={styles.about__container}>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <h4>Mission</h4>
                <h1>What is our mission?</h1>
                <p>Our mission is to empower young developers throughout the world to quickly and easily learn to create blockchain user-friendly applications for commerce, trade, education, entertainment, storing of data, decentralized computing, assets tokenization and much more.</p>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <h4>Vision</h4>
                <h1>What is our vision?</h1>
                <p>Our vision is Enhance the value of the Selendra (SEL) network over the long-term as we attract bright, young and progressive developers, forward-thinking investors, and user participants with combined interests toward achieving a common vision and goals.</p>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.register__faq}>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className={styles.faq__left}>
              <h4>Don't Miss Out.</h4>
                <h1>Get Started Today!</h1>
              <Button><Link href='/keep-in-touch'>Register</Link></Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className={styles.faq__right}>
              <h4>Anything you don't understand?</h4>
              <h1>FAQs</h1>
              <Button><Link href='/faqs'>Visit</Link></Button>
            </Col>
          </Row>
        </div>  
        <div className={styles.joinTelegram}>
          <div className={styles.about__container}>
            <h4>community</h4>
            <h1>Join Our Community</h1>
            <Row justify='center'>
              <Button><a href='https://t.me/selendraorg' target='_blank'>Selendra Blockchain Community</a></Button>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}