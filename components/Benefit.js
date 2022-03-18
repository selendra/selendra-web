import { Row, Col } from "antd";
function Benefit({ styles }) {
  return (
    <div className={styles.benefit}>
      <div className="container">
        <Row align="middle">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <h4>SELENDRA Benefits</h4>
            <h1>
              The New <span className={styles.pink}> Web3 </span> for a{" "}
              <span className={styles.yellow}>Decentralized Internet</span>{" "}
            </h1>
            <p>
              Selendra is designed upon a philosophy of openness and
              connectivity, acting as a gateway to other blockchain networks,
              resulting in an extended range of new business use-cases.
            </p>
            <p>
              The Selendra community benefits through receiving access to a
              broad range of services available within a single user-friendly
              development environment that is compatible with Ethereum,
              Polkadot, Cosmos, other blockchain networks, and non-native
              network nodes.
            </p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Row justify="center" align="middle">
              <img src="/images/benefit.png" alt="benefit" />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Benefit;
