import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { Row, Col, Button } from "antd";
import styles from "../styles/About.module.css";
import NextMetaTags from "../components/NextMetaTags";

export default function About() {
  const [isReadmore, setIsReadmore] = useState(false);

  const members = [
    {
      photo: "/images/teams/nath.png",
      name: "Nat LAY",
      role: "Blockchain Developer",
    },
    {
      photo: "/images/teams/daveat.png",
      name: "Daveat CORN",
      role: "Fullstake Mobile Dev",
    },
    {
      photo: "/images/teams/piset.png",
      name: "Piset HEANG",
      role: "Fullstack Web3 Developer",
    },
    {
      photo: "/images/teams/vuthy.jpg",
      name: "Vuthy SAN",
      role: "Web & Tech Lead",
    },
    {
      photo: "/images/teams/rithy.jpg",
      name: "Rithy THUL",
      role: "Co-founder & mainDriver",
    },
    {
      photo: "/images/teams/Ramesh.jpg",
      name: "Belavadi N Ramesh",
      role: "Blockchain developer",
    },
    {
      photo: "/images/teams/leang.jpg",
      name: "Hangleang SUN",
      role: "Solidity Smart Contract Developer",
    },
    {
      photo: "/images/teams/den.jpg",
      name: "Sovanden SARIN",
      role: "Fullstack Web Developer",
    },
    {
      photo: "/images/teams/thith.jpg",
      name: "Thith THIN",
      role: "UX/UI Web Developer",
    },
    {
      photo: "/images/teams/viseth.jpg",
      name: "Viseth SEA",
      role: "Web Developer",
    },
    {
      photo: "/images/teams/soklay.jpg",
      name: "Soklay VANN",
      role: "Web Developer",
    },


    {
      photo: "/images/teams/sakada.jpg",
      name: "Sakada Sam",
      role: "Advisor",
    },    
    {
      photo: "/images/teams/saing-sab.png",
      name: "Saing SAB",
      role: "Co-founder & Infra Advisor",
    },
  ];

  return (
    <div>
      <NextMetaTags
        title="About"
        url="https://www.selendra.com/about"
        image="https://www.selendra.com/images/meta-images/about.png"
      />
      <div>
        <div className={styles.about}>
          <div className="container">
            <h1>About Us</h1>
            <p>
              The Selendra platform is used to build, deploy, and employ
              decentralized, peer-2-peer applications as simple as build the
              webapps and mobile applications we use today.
            </p>
            <p>
              Selendra presents an innovative solution to the problem of
              mass-user adoption in blockchain applications. Rethink the nature
              of webapps and mobile application development by incorporating
              blockchain for both developer and user benefit.
              {!isReadmore && (
                <Button
                  type="link"
                  className={styles.readMore}
                  onClick={() => setIsReadmore(true)}
                >
                  Show More
                </Button>
              )}
            </p>
            {isReadmore && (
              <p>
                The coming digital economy will be profoundly molded and
                impacted by the great recent innovation of blockchain
                technology.Selendra is built upon blockchain technology as an
                add-on feature to KOOMPI, forming a new economic
                micro-community. Selendra leverages the power and scope of
                KOOMPI, while KOOMPI leverages the power and scope of Selendra
                to form a positive feedback loop.
                <Button
                  type="link"
                  onClick={() => setIsReadmore(false)}
                  className={styles.readMore}
                >
                  Show less
                </Button>
              </p>
            )}
          </div>
        </div>
        <div className={styles.team}>
          <div className="container">
            <h1>Selendra Is Crafted And Built By These Friendly Folks</h1>
            <Row gutter={[18, 18]}>
              {members.map((member) => {
                const { photo, name, role } = member;
                return (
                  <Col xs={12} sm={24} md={12} lg={8} xl={5}>
                    <Row justify="center">
                      <Col className={styles.teamMember}>
                        <img src={photo} alt={name} />
                        <h2 className={styles.fullname}>{name}</h2>
                        <h3 className={styles.role}>{role}</h3>
                      </Col>
                    </Row>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
      <div className={styles.missionVision}>
        <div className="container">
          <Row justify="center" align="middle">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h4>Mission</h4>
              <h1>What is our mission?</h1>
              <p>
                Our mission is to empower young developers throughout the world
                to quickly and easily learn to create blockchain user-friendly
                applications for commerce, trade, education, entertainment,
                storing of data, decentralized computing, assets tokenization
                and much more.
              </p>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <center>
                <img src="/images/mission.png" alt="mission" />
              </center>
            </Col>
          </Row>
          <div style={{ padding: "40px 0" }} />
          <Row justify="center" align="middle">
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <Row justify="center">
                <img src="/images/vision.png" alt="vision" />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h4>Vision</h4>
              <h1>What is our vision?</h1>
              <p>
                Our vision is Enhance the value of the Selendra (SEL) network
                over the long-term as we attract bright, young and progressive
                developers, forward-thinking investors, and user participants
                with combined interests toward achieving a common vision and
                goals.
              </p>
            </Col>
            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
              <Row justify="center">
                <img src="/images/vision.png" alt="vision" />
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.registerFaq}>
        <Row>
          <Col span={24} className={styles.faq__left}>
            <div className="container">
              <center>
                <h4>Don't Miss Out.</h4>
                <h1>Get Started Today!</h1>
                <Button>
                  <Link href="/keep-in-touch">Register</Link>
                </Button>
              </center>
            </div>
          </Col>
        </Row>
      </div>
      <div className={styles.joinTelegram}>
        <div className="container">
          <h4>Community</h4>
          <h1>Join Our Community</h1>
          <Row justify="center">
            <Button>
              <a href="https://t.me/selendrachain" target="_blank">
                Selendra Blockchain Community
              </a>
            </Button>
          </Row>
        </div>
      </div>
    </div>
  );
}
