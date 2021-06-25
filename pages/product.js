import { Row, Col, Button } from "antd"
import styles from "../styles/product.module.css"

export default function Product() {
  return (
    <div>
      <div className={styles.product}>
        <div className={styles.product__container}>
          <Row align='middle' className={styles.product__section}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h1>Bitriel Wallet</h1>
              <p>Digital wallet management for cross-chain assets, staking and governance operations, collection and self-owned private key.</p>
              <Button>Get Android App</Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify='center'>
                <img src='/images/bitriel-promo1.png' alt='bitriel-promo1' className={styles.bitriel__promo1}/>
              </Row>
            </Col>
          </Row>
        </div>
        <div className={styles.wallet__detail}>
          <div className={styles.product__container}>
            <Row>
              <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                <Row justify='center'>
                  <img src='/images/bitriel-promo2.png' alt='bitriel-promo2' />
                </Row>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <img src='/images/bitriel-logo.png' alt='bitriel-logo' />
                <h1>Get started with Bitriel</h1>
                <p>Bitriel Wallets are used to store and transact SEL tokens and multiple other cryptocoins. Wallets can be integrated into any application where a use case exists, connecting the application to the Selendra main chain.</p>
                <Button>Get Android App</Button>
              </Col>
              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <Row justify='center'>
                  <img src='/images/bitriel-promo2.png' alt='bitriel-promo2' />
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.albazaar}>
          <div className={styles.product__container}>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <h1>Albazaar Marketplace</h1>
                <p>a planned virtual marketplace where goods and services can be exchanged through smart contracts in a peer-to-peer network, together with all the other added benefits blockchain technology has to offer. Buyers and sellers are empowered through the community where transactions can be negotiated with confidence.</p>
                <Button>Get Android App</Button>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
               <Row justify='center'>
                  <img src='/images/albazaar-promo1.png' alt='albazaar-promo1' />
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        <div className={styles.albazaar__detail}>
          <div className={styles.product__container}>
            <Row>
              <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                <Row justify='center'>
                  <img src='/images/albazaar-promo2.png' alt='albazaar-promo2' />
                </Row>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <img src='/images/albazaar-logo.png' alt='albazaar-logo' />
                <h1>Get Started with Albazaar</h1>
                <p>a planned virtual marketplace where goods and services can be exchanged through smart contracts in a peer-to-peer network, together with all the other added benefits blockchain technology has to offer. Buyers and sellers are empowered through the community where transactions can be negotiated with confidence.</p>
                <Button>Get Android App</Button>
              </Col>
              <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                <Row justify='center'>
                  <img src='/images/albazaar-promo2.png' alt='albazaar-promo2' />
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}