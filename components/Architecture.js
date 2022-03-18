import { Row, Col } from "antd";
import parse from "html-react-parser";
import architectures from "../data/architectures";

function Architech({ styles }) {
  return (
    <div className={styles.architecture}>
      <div className="container">
        <Row align="middle" justify="space-between">
          <Col xs={24} sm={24} md={16}>
            <h4>Architecture</h4>
            <h1>
              <span className={styles.gradientColor}>Selendra</span> is the
              Gateway to{" "}
              <span className={styles.gradientColor}>Blockchain</span>
            </h1>
            <p>
              SEL is the native token, unit of account, and fuel to operate on
              Selendra Blockchain system. While Selendra as the system will
              bridge to the outside blockchains, allows it users to liquidate
              and transact with anyone that interacts on the Internet.
            </p>
          </Col>
          <Col xs={0} sm={0} md={7}>
            <img
              width="100%"
              src="/images/selendra-black.png"
              alt="selendra logo"
            />
          </Col>
        </Row>
        {architectures.map((architecture, index) => {
          const { title, image, des } = architecture;
          if (index % 2 == 0) {
            return (
              <Row className={styles.architectureItem} key={index}>
                <Col xs={0} sm={0} md={12} lg={12} xl={12}>
                  <Row
                    justify="center"
                    align="middle"
                    style={{ height: "100%" }}
                  >
                    <img src={image} alt={title} />
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <h2>{title}</h2>
                  {parse(des)}
                  {/* {des.map((data, indexDes) => (
                    <p
                      key={indexDes}
                      // === convert string to jsx ===
                      dangerouslySetInnerHTML={{ __html: data }}
                    ></p>
                  ))} */}
                </Col>
                <Col xs={24} sm={24} md={0} lg={0} xl={0}>
                  <Row
                    justify="center"
                    align="middle"
                    style={{ height: "100%" }}
                  >
                    <img src={image} alt={title} />
                  </Row>
                </Col>
              </Row>
            );
          } else {
            return (
              <Row className={styles.architectureItem} key={index}>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <h2>{title}</h2>
                  {parse(des)}
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Row
                    justify="center"
                    align="middle"
                    style={{ height: "100%" }}
                  >
                    <img src={image} alt={title} />
                  </Row>
                </Col>
              </Row>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Architech;
