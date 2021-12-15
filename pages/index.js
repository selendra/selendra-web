import Head from 'next/head';
import Link from 'next/link';
import { Row, Col, Button } from 'antd';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Selendra</title>
        <meta
          name="description"
          content="a micro-economic transactional system, a global network of people and organizations whose growth and success are made possible through the value-added contributions, deployment, and usage by and for network participants"
        />
      </Head>
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.selendra}>
            <Row gutter={[24, 24]} align="middle" style={{ height: '80%' }}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <h1 className={styles.bannerTitle}>SELENDRA Blockchain</h1>
                <p>
                  Selendra is multi-chains nominated proof-of-stake system built
                  with Substrate framework for mainstream users adoption by
                  empowering developers to build blockchain applications with
                  very minimal learning curve.
                </p>
                <Row gutter={[12, 12]}>
                  <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <Button type="primary" className={styles.btnOnBoard}>
                      <a
                        download
                        href="https://github.com/selendra/selendra-docs/blob/master/docs/Whitepaper/selendra-economic-paper-v1.3.pdf"
                      >
                        Whitepaper
                      </a>
                    </Button>
                  </Col>
                  <Col xs={24} sm={24} md={11} lg={11} xl={11}>
                    <Button type="ghost" className={styles.btnWhitePaper}>
                      <a href="http://github.com/selendra">Github</a>
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <img
                  src="/images/sel-bg-small.png"
                  alt="selendra-bg"
                  className="img-responsive"
                />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.happenSection}>
          <center>
            <h2 className={styles.happendTitle}>What’s happening</h2>
          </center>
          <Row gutter={[12, 12]}>
            <Col xs={24} sm={12} md={12}>
              <div className={styles.happenFirstBack}>
                <h3>PRESALE</h3>
                <p>
                  Get discounted price before IDO and Exchange listings.
                  Participate in Selendra Presale at{' '}
                  <a href="https://dapp.bitriel.com">
                    https://dapp.bitriel.com{' '}
                  </a>
                </p>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12}>
              <div className={styles.happenSecondBack}>
                <h3>Bitriel Wallet</h3>
                <p>
                  Manage your crypto assets with ease. Full support for Selendra
                  token and easily get free Airdrops.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.feature}>
        <div className={styles.container}>
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
      <div className={styles.architecture}>
        <div className={styles.container}>
          <Row className={styles.architectureItem}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h4>Architecture</h4>
              <h1>Folkless Upgrades</h1>
              <p>
                As with all software, to remain timely, useful and relevant,
                blockchain software requires upgrades for continued development.
                Early generation blockchain upgrades required forking, a process
                requiring weeks, if not months to deploy.
              </p>
              <p>
                Upgrades through the forking process can become controversial,
                sometimes leading to a hard fork, which in essence splits the
                development community in two. Selendra employs forkless upgrades
                enacted through an on-chain governance system, thereby creating
                enhanced stability through avoiding the forked upgrade process
                altogether.
              </p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <img src="/images/folkless.png" alt="folkless upgrade" />
              </Row>
            </Col>
          </Row>
          <Row className={styles.architectureItem}>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <img src="/images/consensus.png" alt="consensus" />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row align="middle" style={{ height: '100%' }}>
                <Col>
                  <h4>Architecture</h4>
                  <h1>Consensus Roles</h1>
                  <p>
                    Selendra has four distinct roles for reaching consensus:
                  </p>
                  <p>
                    1. Validators secure the network through the process of
                    staking, validating proofs from collators, and through
                    participating in consensus with other validators. <br />
                    2. Collators maintain data shards by collecting shard
                    transactions and producing proofs for validators. They also
                    monitor the network and report abuse to validators. <br />{' '}
                    3. Nominators secure the network by selecting trustworthy
                    validators and stakers. <br />
                    4. Fishermen monitor the network and report abuse to
                    validators.
                  </p>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
              <Row justify="center" align="middle" style={{ width: '100%' }}>
                <img src="/images/consensus.png" alt="consensus" />
              </Row>
            </Col>
          </Row>
          <Row className={styles.architectureItem}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h4>Architecture</h4>
              <h1>Governance Roles</h1>
              <p>
                Selendra uses a governance mechanism of two distinct committee
                types that ensure the majority of stakeholders will always
                secure the network.
              </p>
              <p>
                1. Holders Council committees are elected to represent passive
                stakeholders in two primary governance roles, which are
                proposing referenda, and vetoing dangerous or malicious
                referenda. <br /> 2. Technical committees are composed of active
                Selendra developers who propose emergency referenda and new
                features together with the Holders Council for fast-tracked
                voting and implementation.
              </p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <img src="/images/governance.png" alt="governance" />
              </Row>
            </Col>
          </Row>
          <Row className={styles.architectureItem}>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <img src="/images/reward.png" alt="reward" />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h4>Architecture</h4>
              <h1>Rewards</h1>
              <p>
                Selendra incentivizes decentralization to maximize chain
                security through two primary role mechanisms, that of validators
                and nominators.
              </p>
              <p>
                Validators with greater stakes tend to have more resources for
                maintaining infrastructure, therefore, validator rewards are
                paid the same regardless of stake level. Generally, validators
                with lesser stake levels will pay more to nominators, whereby
                nominators have an economic incentive to shift toward lower
                stake validators, resulting in more evenly distributed stakes
                across validators and avoiding concentrations of power.
              </p>
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <img src="/images/reward.png" alt="reward" />
              </Row>
            </Col>
          </Row>
          <Row className={styles.architectureItem}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h4>Architecture</h4>
              <h1>TransactionFees</h1>
              <p>
                Transaction fees are among the greatest barriers hindering
                mainstream adoption. Selendra’s approach to this issue is to
                make transaction fees fixed and very low from the start.
                Selendra transaction fees are fixed at 0.00001 SEL per
                transaction. Since the cost per transaction is fixed to the SEL
                token, the cost per transaction will only vary relative to the
                SEL token price.
              </p>
              <p>
                Network governance bodies such as validators, norminator,
                collators and fishermen are rewarded through the staking
                process, with 30% of transaction fees being paid as rebates,
                while the remaining 70% are taken out of existence.
              </p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <img src="/images/fee.png" alt="fee" />
              </Row>
            </Col>
          </Row>
          <Row className={styles.architectureItem}>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <img src="/images/network.png" alt="network" />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h4>Architecture</h4>
              <h1>Network Abuse Mitigation</h1>
              <p>
                As Selendra transaction fees are inherently low, the possibility
                of attack on computing resources is a possibility. To mitigate
                this issue, prior to performing any transaction, Selendra
                account holders must maintain a minimum balance of 0.10 SEL
                (this minimum balance amount will be adjusted accordingly as the
                network develops).
              </p>
              <p>
                A minimum balance deposit is used to deter network attacks,
                where the deposit is forfeited upon detection of network abuse.
                Forfeited deposits are added to the reward pool fund for future
                payments to validators and other network participants.
              </p>
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
              <Row justify="center" align="middle" style={{ height: '100%' }}>
                <img src="/images/network.png" alt="network" />
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.benefit}>
        <div className={styles.container}>
          <Row align="middle">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h4>SELENDRA</h4>
              <h1>Benefits</h1>
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
      <div className={styles.usecase}>
        <div className={styles.container}>
          <h1>Use Cases</h1>
          <Row justify="space-between">
            <Col
              xs={24}
              sm={24}
              md={10}
              lg={10}
              xl={10}
              className={styles.usecaseItem}
            >
              <img src="/images/koompififi.png" alt="koompififi" />
              <p>
                a hotspot mesh network with local contents cached that provides
                internet access to villagers, one village at a time. Mesh
                networks offer options for local internet that help bring down
                the cost of data. Incentives users to browse useful contents or
                relative ads, while internet fees are paid via KHR, USD or SEL.
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={10}
              lg={10}
              xl={10}
              className={styles.usecaseItem}
            >
              <img src="/images/sala.png" alt="koompi sala" />
              <p>
                a virtual school that incentivized teachers to create good
                quality video contents and students to fairly rate the cause
                they learned. Anyone can open a school, similar to a personal
                Facebook page, but focus on video education. SALA KOOMPI
                believes that anyone has some good to share and enlighten the
                world, if incentives are fairly and openly distributed.
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={10}
              lg={10}
              xl={10}
              className={styles.usecaseItem}
            >
              <img src="/images/vitaminair.png" alt="vitamin air" />
              <p>
                is a catalyst for a global movement to reforest the rainforest
                and regenerate our ecosystem through platforms and models that
                incorporate technology and designs inspired by nature. In the
                process, we're growing a community of people engaging in social,
                cultural, ecological and economic regeneration.
              </p>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={10}
              lg={10}
              xl={10}
              className={styles.usecaseItem}
            >
              <img src="/images/albazaar.png" alt="albazaar" />
              <p>
                a planned virtual marketplace where goods and services can be
                exchanged through smart contracts in a peer-to-peer network,
                together with all the other added benefits blockchain technology
                has to offer. Buyers and sellers are empowered through the
                community where transactions can be negotiated with confidence.
              </p>
            </Col>
          </Row>
        </div>
      </div>

      {/* <div className={styles.dualToken}>
        <div className={styles.container}>
          <h1>Dual Tokens System</h1>
          <p>
            Selendra offers a dual token program; the utility token (SEL), and
            the stable token (RISE). SEL is primarily used for business and
            ecosystem application development, while RISE is primarily used for
            payments.
          </p>
          <Row justify="space-around" align="middle">
            <Col>
              <img src="/images/sel-coin.png" alt="sel-coin" />
              <h2>SEL</h2>
            </Col>
            <Col>
              <img src="/images/rise-token.png" alt="rise-token" />
              <h2>RISE</h2>
            </Col>
          </Row>
        </div>
      </div>
       */}
      <div className={styles.totalSupply}>
        <div className={styles.container}>
          <h1>Token Supply and Allocation</h1>
          <Row align="middle" justify="space-around">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify="center">
                <img src="/images/chart.png" alt="rise-token" />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row align="middle">
                <Col>
                  <p>60% for staking rewards: 1,884,955,592 SEL</p>
                  <p>15% for teams: 471,238,898 SEL</p>
                  <p>12% for token sales: 376,991,118 SEL</p>
                  <p>10% for ecosystem dev: 314,159,265 SEL</p>
                  <p>3% for ecosystem airdrop: 94,247,780 SEL</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      {/* <div className={styles.riseToken}>
        <div className={styles.container}>
          <h1>RISE Stabletoken</h1>
          <Row align="middle">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify="center">
                <img src="/images/rise-coin.png" alt="rise-token" />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row align="middle">
                <p>
                  As a solution to high network fees, and native token price
                  volatility in relation to stable real-world currencies,
                  Selendra introduces RISE, which is a stable price token or
                  stablecoin, a crypto asset which is soft pegged to the US
                  dollar at a value of 1 USD : 40 RISE ratio.
                  <br />
                  <br />
                  RISE is to be used in online commerce applications, payments,
                  remittance and more within Selendra Dapp ecosystem. The
                  transfer of RISE will be charged in SEL.
                </p>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
       */}
      <div className={styles.roadmap}>
        <div className={styles.container}>
          <center>
            <h2>Roadmap</h2>
          </center>
          {/* <Row>
            <Col span={12}>
              <div className={styles.roadmapLeft}>
                <div className={styles.dot}></div>
                <p>Q1-2022</p>
                <div className={styles.roadmapul}>
                  <ul>
                    <li>Release Technical Document</li>
                    <li>Mainnet launched</li>
                    <li>Selendra Governance NPoS</li>
                    <li>Proof-of-Existence pallet for NFTs and Tokenization</li>
                    <li>DeFi Applications (Solidity Support)</li>
                    <li>Documentation for applications</li>
                    <li>Selendra chain block explorer with index</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={12}></Col>
          </Row> */}
          <Row>
            <Col span={12}>
              <div className={styles.roadmapLeft}>
                <div className={styles.dot}></div>
                <p>Q1-2022</p>
                <div className={styles.roadmapul}>
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
                </div>
              </div>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row>
            <Col span={12}></Col>
            <Col span={12}>
              <div className={styles.roadmapRight}>
                <div className={styles.dotRight}></div>
                <p> Q2-2022</p>
                <div className={styles.roadmapul}>
                  <ul>
                    <li>Ethereum bridge</li>
                    <li>Implement Bitriel cross-chain</li>
                    <li>Security & tokenization (with Bitriel)</li>
                    <li>Asset tokenization Platform & DeFi Platform</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className={styles.roadmapLeft}>
                <div className={styles.dot}></div>
                <p>Q3-2022</p>
                <div className={styles.roadmapul}>
                  <ul>
                    <li>Selendra Relaychain</li>
                    <li>Parachain Template</li>
                    <li>Selendra bridge</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col span={12}></Col>
          </Row>
          <Row>
            <Col span={12}></Col>
            <Col span={12}>
              <div className={styles.roadmapRight}>
                <div className={styles.dotRight}></div>
                <p>Q4-2022</p>
                <div className={styles.roadmapul}>
                  <ul>
                    <li>Polkadot Crowdloan for Parachain</li>
                    <li>Decentralized Distributed Storage</li>
                    <li>Storage distributor based on IPFS</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
