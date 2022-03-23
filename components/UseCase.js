import { Row, Col } from "antd";

function UseCase({ styles }) {
  return (
    <div className={styles.usecase}>
      <div className="container">
        <h4 className={styles.blue}>SELENDRA #Buidl Use Cases</h4>
        <h1>
          Some projects that are intergrating <br /> with Selendra
        </h1>
        <br />
        <Row justify="space-between" gutter={[30, 30]}>
          <Col xs={24} sm={24} md={12}>
            <div className={styles.usecaseItem}>
              <img src="/images/koompififi.png" alt="koompififi" />
              <p>
                a hotspot mesh network with local contents cached that provides
                internet access to villagers, one village at a time. Mesh
                networks offer options for local internet that help bring down
                the cost of data. Incentives users to browse useful contents or
                relative ads, while internet fees are paid via KHR, USD or SEL.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className={styles.usecaseItem}>
              <img src="/images/sala.png" alt="koompi sala" />
              <p>
                a virtual school that incentivized teachers to create good
                quality video contents and students to fairly rate the cause
                they learned. Anyone can open a school, similar to a personal
                Facebook page, but focus on video education. SALA KOOMPI
                believes that anyone has some good to share and enlighten the
                world, if incentives are fairly and openly distributed.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className={styles.usecaseItem}>
              <img src="/images/vitaminair.png" alt="vitamin air" />
              <p>
                is a catalyst for a global movement to reforest the rainforest
                and regenerate our ecosystem through platforms and models that
                incorporate technology and designs inspired by nature. In the
                process, we're growing a community of people engaging in social,
                cultural, ecological and economic regeneration.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className={styles.usecaseItem}>
              <img src="/images/albazaar.png" alt="albazaar" />
              <p>
                a planned virtual marketplace where goods and services can be
                exchanged through smart contracts in a peer-to-peer network,
                together with all the other added benefits blockchain technology
                has to offer. Buyers and sellers are empowered through the
                community where transactions can be negotiated with confidence.
              </p>{" "}
            </div>
          </Col>
          <Col xs={24} sm={24} md={12}>
            <div className={styles.usecaseItem}>
              <img src="/images/otherprojects.png" alt="others" />
              <p>
                There are projects related to Digital Student IDs Apps, Loyalty Rewards, Community Lottery
                and several interesting DApps are being developed by community developers and enterprise partners. 
                We look forward to list them on Selendra web page in the near future.
              </p>{" "}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default UseCase;
