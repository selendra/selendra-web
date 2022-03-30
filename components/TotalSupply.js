import { Row, Col } from "antd";

function TotalSupply({ styles }) {
  return (
    <div className={styles.totalSupply}>
      <div className="container">
        <center>
          <h1 className={styles.gradientColor}>Token Supply and Allocation</h1>
          <center>
            <div className="max-supply">Max Supply: 3,141,592,653 SEL</div>
          </center>
          <p>
            Innovation and expansion are key factors in the Selendra network.
            The proposed tokenomic model comes with a strong approach to
            Decentralized Digital IDs, DeFi and Web 3.0.
          </p>
        </center>
        <img width="100%" src="/images/total-supply.png" alt="rise-token" />
        <br />
        <br />
        <br />
        <center>
          <p>
            36.5% of the SEL token was pre-minted during mainnet launched,
            though majourity of them are under time-locked vesting from 2 years
            to 15 years. Plus, the unsold token sale will be burned, thus
            automatically adding back to staking rewards pools to be rewarded to
            good actors over the next two decades or more.
          </p>
        </center>
      </div>
    </div>
  );
}

export default TotalSupply;
