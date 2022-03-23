import { Row, Col } from "antd";

function Roadmap({ styles }) {
  return (
    <div className={styles.roadmap}>
      <div className="container">
        <center>
          <div className={styles.selendraRoadmap}>SELENDRA ROADMAP</div>
          <h1>
            The story of our <br />
            <span className={styles.gradientColor2}>Journey</span> and challenges ahead!
          </h1>
          <p className={styles.des}>
            Selendra has been under continuous development over the last 4
            years. The Selendra team is committed to build regardless of market
            conditions. Here at Selendra, we all have a common goal. Building
            the Next Generation of Decentralized System. Created by the people
            for the people.
          </p>
          <h2 className={styles.year}>2022</h2>
        </center>
        <Row gutter={[24, 24]}>
          <Col xs={0} sm={0} md={{ push: 1 }} lg={12} xl={12}>
            <h3>Released</h3>
          </Col>
          <Col xs={24} lg={12} span={12}>
            <div className={styles.roadmapRight}>
              <div className={styles.dotRight}></div>
              <div className={styles.roadmapul}>
                <h3 className={styles.roadmapTitle}>Released</h3>
                <ul>
                  <li> Mainnet launched</li>
                  <li>Parachain wiget</li>
                  <li>Bitriel Crowdfunding Platform dApp v1</li>
                  <li>Bitriel wallet playstore</li>
                  <li>Registered SELENDRA PTE. LTD in Singapore</li>
                  <li>Open and support community dApp dev </li>
                </ul>
                <br />
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col xs={0} sm={0} md={{ push: 1 }} lg={12} xl={12}>
            <h3>Developming & Testing</h3>
          </Col>
          <Col xs={24} lg={12} span={12}>
            <div className={styles.roadmapRight}>
              <div className={styles.dotRight}></div>
              <div className={styles.roadmapul}>
                <h3 className={styles.roadmapTitle}>Developming & Testing</h3>
                <ul>
                  <li>SelendraJS Brower Extention </li>
                  <li>EVM support</li>
                  <li>Native Parchain for EVM & Wasm</li>
                  <li>Native Bridge (native token to SEL BSC V2 </li>
                  <li> Proof-of-Existence pallet for NFTs and Tokenization</li>
                  <li>Student ID dApp beta</li>
                  <li>Wi-Fi hotspot & payment Apps</li>
                  <li> Bitriel Wallet new UI for AppStore & Playstore</li>
                  <li> Bitriel DEX for Cardamom testnet</li>
                  <li>Selendra new staking UI</li>
                  <li>Users and technical documentation </li>
                </ul>
                <br />
              </div>
            </div>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col xs={0} sm={0} md={{ push: 1 }} lg={12} xl={12}>
            <h3>Planned</h3>
          </Col>
          <Col xs={24} lg={12} span={12}>
            <div className={styles.roadmapRight}>
              <div className={styles.dotRight}></div>
              <div className={styles.roadmapul}>
                <h3 className={styles.roadmapTitle}>Planned</h3>
                <ul>
                  <li>Wasm contract suppport</li>
                  <li>Algorithmic crypto native price stablecoin</li>
                  <li>Selendra Foundation DAO</li>
                  <li>
                    Substrate Bridge (bridge to polkadot, kusama, and substrate
                    based){" "}
                  </li>
                  <li>DeFi X (allow all tokens on Selendra to trade)</li>
                  <li>Security & asset tokenization platform (with Bitriel)</li>
                  <li>dApp sandbox for Developers</li>
                </ul>
                <br />
              </div>
            </div>
          </Col>
        </Row>

        <br />
        <center>
          <h2 className={styles.year}>2023</h2>
          <div className={styles.year2023}>
            <div className={styles.newDotRight}></div>
            <div className={styles.newDotRight}></div>
            <div className={styles.newDotRight}></div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Roadmap;
