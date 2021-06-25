import styles from '../styles/About.module.css'
import Header from '../components/Header'
import { Row, Col, Button } from 'antd'

export default function About() {
  return (
    <div>
      <div className={styles.about}>
        <div className={styles.about__container}>
          <div className={styles.about__section}>
            <h1>ABOUT US</h1>
            <p>The Selendra platform is used to build, deploy, and employ decentralized, peer-2-peer applications as simple as build the webapps and mobile applications we use today.</p>
            <hr/>
            <p>Selendra presents an innovative solution to the problem of mass-user adoption in blockchain applications. Rethink the nature of webapps and mobile application development by incorporating blockchain for both developer and user benefit. <Button type='link'>Read More</Button></p>
          </div>
          <div className={styles.team}>
            <h1>Selendra Is Crafted And Built By These Friendly Folks.</h1>
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
              <Button>Register</Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className={styles.faq__right}>
              <h4>Anything you don't understand?</h4>
              <h1>FAQs</h1>
              <Button>Visit</Button>
            </Col>
          </Row>
        </div>  
        <div className={styles.joinTelegram}>
          <div className={styles.about__container}>
            <h4>community</h4>
            <h1>Join Our Community</h1>
            <Row justify='center'>
              <Button>https://t.me/selendraorg</Button>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}