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
                built with Substrate framework for mainstream users adoption by
                empowering developers to build blockchain applications with
                minimal learning curve.
              </p>

              <Button type="primary" className={styles.btnOnBoard}>
                <a
                  download
                  href="https://github.com/selendra/selendra-docs/blob/master/docs/Whitepaper/selendra-economic-paper-v1.3.pdf"
                >
                  Whitepaper
                </a>
              </Button>
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
