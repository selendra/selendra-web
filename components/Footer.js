import styles from '../styles/Footer.module.css'
import { Row, Col } from 'antd'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
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
            <a href='https://docs.selendra.org'>Documentation</a>
            <a href='https://github.com/selendra'>GitHub</a>
            <a href='/pdf/Selendra-Economic-Paper-v1.0.pdf' download>Whitepaper</a>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3} xl={3}>
            <h1>Support</h1>
            <Link href='/product'><p>FAQs</p></Link>
            {/* <Link href='/product'><p>Contact Us</p></Link> */}
            <a href='https://t.me/selendraorg'><p>Telegram Community</p></a>
          </Col>
          <Col xs={0} sm={0} md={4} lg={4} xl={4}>
            <Row justify='end'>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <a href='https://www.facebook.com/selendraio'><img src='/images/facebook.png' alt='facebook'/></a>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <a href='https://twitter.com/selendraorg'><img src='/images/twitter.png' alt='twitter'/></a>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <a href='https://medium.com/selendra'><img src='/images/medium.png' alt='medium'/></a>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <a href='https://t.me/selendraorg'><img src='/images/telegram.png' alt='telegram'/></a>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <a href='https://www.linkedin.com/company/selendra'><img src='/images/linkedin.png' alt='linkedin'/></a>
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{paddingTop: '20px'}}>
            <Row justify='center'>
              <Col xs={4} sm={4}>
                <a href='https://www.facebook.com/selendraio'><img src='/images/facebook.png' alt='facebook'/></a>
              </Col>
              <Col xs={4} sm={4}>
                <a href='https://twitter.com/selendraorg'><img src='/images/twitter.png' alt='twitter'/></a>
              </Col>
              <Col xs={4} sm={4}>
                <a href='https://medium.com/selendra'><img src='/images/medium.png' alt='medium'/></a>
              </Col>
              <Col xs={4} sm={4}>
                <a href='https://t.me/selendraorg'><img src='/images/telegram.png' alt='telegram'/></a>
              </Col>
              <Col xs={4} sm={4}>
                <a href='https://www.linkedin.com/company/selendra'><img src='/images/linkedin.png' alt='linkedin'/></a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify='space-between' style={{paddingTop: '40px'}}>
          <Col>
            <span>© Selendra, Blockchain</span>
          </Col>
          <Col>
            <span>info@selendra.org</span>
          </Col>
        </Row>
      </div>
    </div>
  )
}