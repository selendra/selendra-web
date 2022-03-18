import { Row, Col } from "antd";

function Roadmap({ styles }) {
  return (
    <div className={styles.roadmap}>
      <div className="container">
        <center>
          <div className={styles.selendraRoadmap}>SELENDRA ROADMAP</div>
          <h1>
            The story of our <br />
            <span className={styles.gradientColor2}>Roadmap</span> timeline
          </h1>
          <p className={styles.des}>
            Selendra has been under continuous development over the last 4
            years. The Selendra team is committed to build regardless of market
            conditions. Here at Selendra, we all have a common goal. Building
            the Next Generation of Decentralized System. Created by the people
            for the people.
          </p>
        </center>
        <Row>
          <Col
            xs={{ push: 0, span: 7 }}
            sm={6}
            md={{ push: 2 }}
            lg={{ push: 8, span: 11 }}
          >
            <h3> Q1-2022</h3>
          </Col>
          <Col xs={16} lg={12} span={12}>
            <div className={styles.roadmapRight}>
              <div className={styles.dotRight}></div>
              <div className={styles.roadmapul}>
                <h3 className={styles.roadmapTitle}>SelendraChain 1</h3>
                <ul>
                  <li>Release Technical Document</li>
                  <li>Mainnet launched</li>
                  <li>Selendra Governance NPoS</li>
                  <li>Proof-of-Existence pallet for NFTs and Tokenization</li>
                  <li>DeFi Applications (Solidity Support)</li>
                  <li>Documentation for applications</li>
                  <li>Selendra chain block explorer with index</li>
                  <li>Bitriel wallet for iOS</li>
                  <li>Publish on Apple app store</li>
                  <li>EVM Playground UI with Remix</li>
                  <li>Piloting Student IDs in partnership with Gov’t</li>
                  <li>DeFi Applications (Solidity Support)</li>
                  <li>Selendra RISE DAO Reserve & RICE stablecoin</li>
                  <li>Selendra Foundation DAO</li>
                </ul>
                <br />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ push: 0, span: 7 }}
            sm={6}
            md={{ push: 2 }}
            lg={{ push: 8, span: 11 }}
          >
            <h3> Q2-2022</h3>
          </Col>
          <Col span={12}>
            <div className={styles.roadmapRight}>
              <div className={styles.dotRight}></div>
              <div className={styles.roadmapul}>
                <h3>SelendraChain 2</h3>
                <ul>
                  <li>Ethereum bridge</li>
                  <li>Implement Bitriel cross-chain</li>
                  <li>Security & tokenization (with Bitriel)</li>
                  <li>Asset tokenization Platform & DeFi Platform</li>
                </ul>
                <br />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ push: 0, span: 7 }}
            sm={6}
            md={{ push: 2 }}
            lg={{ push: 8, span: 11 }}
          >
            <h3>Q3-2022</h3>
          </Col>
          <Col span={12}>
            <div className={styles.roadmapRight}>
              <div className={styles.dotRight}></div>
              <h3>SelendraChain 3</h3>
              <div className={styles.roadmapul}>
                <ul>
                  <li>Selendra Relaychain</li>
                  <li>Parachain Template</li>
                  <li>Selendra bridge</li>
                </ul>
                <br />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ push: 0, span: 7 }}
            sm={6}
            md={{ push: 2 }}
            lg={{ push: 8, span: 11 }}
          >
            <h3>Q4-2022</h3>
          </Col>
          <Col span={12}>
            <div className={styles.roadmapRight}>
              <div className={styles.dotRight}></div>
              <div className={styles.roadmapul}>
                <h3>SelendraChain 4</h3>
                <ul>
                  <li>Polkadot Crowdloan for Parachain</li>
                  <li>Decentralized Distributed Storage</li>
                  <li>Storage distributor based on IPFS</li>
                </ul>
                <br />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Roadmap;
