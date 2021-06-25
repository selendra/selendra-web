import styles from '../styles/Footer.module.css'
import { Row, Col } from 'antd'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <Row justify='space-between'>
          <Col xs={24} sm={24} md={4} lg={5} xl={5}>
            <img src='/images/selendra.png' alt='selendra' />
          </Col>
          <Col xs={12} sm={12} md={4} lg={3} xl={3}>
            <h1>Products</h1>
            <Link href='/product'><p>Bitriel Wallet</p></Link>
            <Link href='/product'><p>Albazaar</p></Link>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3} xl={3}>
            <h1>About</h1>
            <Link href='/about'><p>About Us</p></Link>
            <Link href='/privacy-policy'><p>Privacy & Policy</p></Link>
            <Link href='/term-of-use'><p>Term Of Use</p></Link>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3} xl={3}>
            <h1>Developers</h1>
            <a href='/product'>Documentation</a>
            <a href='/product'>GitHub</a>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3} xl={3}>
            <h1>Support</h1>
            <Link href='/product'><p>FAQs</p></Link>
            <Link href='/product'><p>Contact Us</p></Link>
            <Link href='/product'><p>Telegram Community</p></Link>
          </Col>
          <Col xs={0} sm={0} md={4} lg={4} xl={4}>
            <Row justify='end'>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Link href=''><img src='/images/facebook.png' alt='facebook'/></Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Link href=''><img src='/images/twitter.png' alt='twitter'/></Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Link href=''><img src='/images/medium.png' alt='medium'/></Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Link href=''><img src='/images/telegram.png' alt='telegram'/></Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Link href=''><img src='/images/linkedin.png' alt='linkedin'/></Link>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{paddingTop: '20px'}}>
            <Row justify='center'>
              <Col xs={4} sm={4}>
                <Link href=''><img src='/images/facebook.png' alt='facebook'/></Link>
              </Col>
              <Col xs={4} sm={4}>
                <Link href=''><img src='/images/twitter.png' alt='twitter'/></Link>
              </Col>
              <Col xs={4} sm={4}>
                <Link href=''><img src='/images/medium.png' alt='medium'/></Link>
              </Col>
              <Col xs={4} sm={4}>
                <Link href=''><img src='/images/telegram.png' alt='telegram'/></Link>
              </Col>
              <Col xs={4} sm={4}>
                <Link href=''><img src='/images/linkedin.png' alt='linkedin'/></Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify='space-between' style={{paddingTop: '40px'}}>
          <Col>
            <p>© Selendra, Blockchain</p>
          </Col>
          <Col>
            <p>info@selendra.org</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}