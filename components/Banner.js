import { Row, Col, Button } from "antd";

function Banner({ styles }) {
  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.selendra}>
          <Row
            gutter={[24, 24]}
            align="middle"
            justify="space-between"
            style={{ height: "80%" }}
          >
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h1 className={styles.bannerTitle}>
                SELENDRA <span className={styles.blue}> Blockchain </span>
              </h1>
              <p>
                <b>Selendra</b> is multi-chains nominated proof-of-stake system
                built with Polkadot Substrate framework for mainstream users
                adoption by empowering developers to build blockchain
                applications with minimal learning curve.
              </p>

              <Button type="primary" className={styles.btnOnBoard}>
                <a
                  download
                  href="https://github.com/selendra/selendra-docs/blob/master/docs/Whitepaper/selendra-economic-paper-v1.3.pdf"
                >
                  Whitepaper
                </a>
              </Button>
              <br />
              <br />
              <br />
              <div className={styles.partnersLogo}>
                <p>Partners</p>
                <Row gutter={[12, 12]}>
                  <Col xs={5} sm={5} md={6} lg={6}>
                    <a href="https://www.isigroup.com.kh/" target="_blank">
                      <img
                        src="/images/partners/isi.png"
                        height={80}
                        alt="isi"
                      />
                    </a>
                  </Col>
                  <Col xs={5} sm={5} md={6} lg={6}>
                    <a href="https://sabay.com.kh/" target="_blank">
                      <img
                        src="/images/partners/sabay.png"
                        height={80}
                        alt="sabay"
                      />
                    </a>
                  </Col>
                  <Col xs={8} sm={8} md={6} lg={6}>
                    <a href="https://doersasean.com/" target="_blank">
                      <img
                        src="/images/partners/doer.png"
                        height={80}
                        alt="doersasean"
                      />
                    </a>
                  </Col>
                </Row>
                <br />
                <Row gutter={[12, 12]}>
                  <Col xs={5} sm={5} md={6} lg={6}>
                    <a
                      href="https://nomics.com/assets/sel2-selendra"
                      target="_blank"
                    >
                      <img
                        src="/images/partners/logo.png"
                        height={80}
                        alt="nomics"
                      />
                    </a>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={11}>
              <img
                src="/images/sel-bg-small.png"
                alt="selendra-bg"
                className="img-responsive"
              />
            </Col>
          </Row>
          <div className={styles.downloadBitriel}>
            <Row align="middle" justify="space-around" gutter={[0, 10]}>
              <Col>
                <p>Download our multi asset crypto wallet</p>
              </Col>
              <Col>
                <Button type="primary" className={styles.btnOnBoard}>
                  <a
                    target="_blank"
                    href="https://play.google.com/store/apps/details?id=com.selendra.secure_wallet"
                  >
                    Download Bitriel
                  </a>
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
