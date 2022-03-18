import styles from "../styles/Footer.module.css";
import { Row, Col } from "antd";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <Row justify="space-between" gutter={[20, 30]}>
          <Col xs={24} sm={24} md={24} lg={5} xl={5}>
            <img width={150} src="/images/selendra.png" alt="selendra" />
            <p className={styles.footerp}>
              Used to build, deploy, and employ decentralized, peer-2-peer
              applications as simple as build the webapps and mobile
              applications we use today.
            </p>
            <Row>
              <Col xs={2} lg={4}>
                <a href="https://www.facebook.com/selendrachain">
                  <img src="/images/facebook.png" alt="facebook" />
                </a>
              </Col>
              <Col xs={2} lg={4}>
                <a href="https://twitter.com/selendrachain">
                  <img src="/images/twitter.png" alt="twitter" />
                </a>
              </Col>
              <Col xs={2} lg={4}>
                <a href="https://medium.com/selendra">
                  <img src="/images/medium.png" alt="medium" />
                </a>
              </Col>
              <Col xs={2} lg={4}>
                <a href="https://t.me/selendrachain">
                  <img src="/images/telegram.png" alt="telegram" />
                </a>
              </Col>
              <Col xs={2} lg={4}>
                <a href="https://www.linkedin.com/company/selendrachain">
                  <img src="/images/linkedin.png" alt="linkedin" />
                </a>
              </Col>
            </Row>

            {/* === test === */}
          </Col>
          <Col xs={12} sm={12} md={4} lg={3} xl={3}>
            <h2>Products</h2>
            <Link href="/product">
              <p>Bitriel Wallet</p>
            </Link>
            <Link href="/product">
              <p>Albazaar</p>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3} xl={3}>
            <h2>About</h2>
            <Link href="/about">
              <p>About Us</p>
            </Link>
            <Link href="/privacy-policy">
              <p>Privacy & Policy</p>
            </Link>
            <Link href="/term-of-use">
              <p>Term Of Use</p>
            </Link>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3} xl={3}>
            <h2>Developers</h2>
            <a href="https://docs.selendra.org">Documentation</a>
            <a href="https://github.com/selendra">GitHub</a>
            <a href="https://github.com/selendra/selendra-docs/blob/master/docs/Whitepaper/selendra-economic-paper-v1.3.pdf">
              Whitepaper
            </a>
          </Col>
          <Col xs={12} sm={12} md={4} lg={3} xl={3}>
            <h2>Support</h2>
            <Link href="/faqs">
              <p>FAQs</p>
            </Link>
            {/* <Link href='/product'><p>Contact Us</p></Link> */}
            <a href="https://t.me/selendrachain">
              <p>Telegram</p>
            </a>
          </Col>
        </Row>
      </div>

      <div className={styles.bottomFooter}>
        <div className="container">
          <Row justify="space-between" align="middle">
            <Col>
              <span>2021 © Selendra, Blockchain</span>
              <br />
              <span>All right reserve</span>
            </Col>
            <Col>
              <span>info@selendra.org</span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
