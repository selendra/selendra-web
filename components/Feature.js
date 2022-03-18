import { Row } from "antd";

function Feature({ styles }) {
  return (
    <div className={styles.feature}>
      <div className="container">
        <div className={styles.featureTitle}>
          <h1>SELENDRA</h1>
          <h4>Feature</h4>
        </div>
        <p>Designed to work natively with real world internet data</p>
        <Row justify="center" align="middle">
          <img src="/images/feature.png" alt="feature" />
        </Row>
      </div>
    </div>
  );
}

export default Feature;
