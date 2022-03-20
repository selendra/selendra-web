import { Row, Col, Drawer } from "antd";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const drawerStyle = {
    background: "#1D3442",
  };

  return (
    <div className={styles.header}>
      <div className="container">
        <div className="header-navbar">
          <Row justify="space-between" align="middle">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Link href="/">
                <img
                  width={150}
                  src="images/selendra-black.png"
                  alt="selendra-logo"
                />
              </Link>
            </Col>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <Row justify="end">
                <Row
                  justify="space-between"
                  align="middle"
                  style={{ width: "400px" }}
                >
                  <Link href="/about">
                    <p className={styles.header__item}>About</p>
                  </Link>
                  <Link href="/product">
                    <p className={styles.header__item}>Apps</p>
                  </Link>

                  <Link href="/faqs">
                    <p className={styles.header__item}>FAQs</p>
                  </Link>
                  <Link href="https://t.me/selendrachain">
                    <p className={styles.header__item}>Community</p>
                  </Link>
                </Row>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={0} lg={0} xl={0}>
              <Row justify="end">
                <img src="/images/menu.svg" alt="menu" onClick={showDrawer} />
              </Row>
            </Col>
          </Row>
          <Row>
            <Drawer
              title=""
              placement="left"
              closable={false}
              onClose={onClose}
              visible={visible}
              bodyStyle={drawerStyle}
              width={"70%"}
            >
              <div>
                <Row>
                  <img
                    width={150}
                    src="/images/selendra.png"
                    alt="selendra-logo"
                  />
                </Row>
                <div className={styles.drawer__product}>
                  <h1>Products</h1>
                  <p>
                    <Link href="/product">Bitriel Wallet</Link>{" "}
                  </p>
                  <p>
                    <Link href="/product">Albazzar</Link>
                  </p>
                </div>
                <div className={styles.drawer__company}>
                  <h1>Company</h1>
                  <p>
                    <Link href="/about">About Us</Link>
                  </p>
                  <p>
                    <Link href="/faqs">FAQs</Link>
                  </p>
                  <p>
                    <Link href="/privacy-policy">Privacy & Policy</Link>
                  </p>
                  <p>
                    <Link href="/term-of-use">Term Of Use</Link>
                  </p>
                </div>
              </div>
            </Drawer>
          </Row>
        </div>
      </div>
    </div>
  );
}
