import { Row, Col, Button, Drawer } from 'antd';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const drawerStyle = {
    background: '#1D3442',
  };

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Row justify="space-between" align="middle">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Link href="/">
              <img src="images/selendra.png" alt="selendra-logo" />
            </Link>
          </Col>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <Row justify="end">
              <Row
                justify="space-between"
                align="middle"
                style={{ width: '230px' }}
              >
                <Link href="/product">
                  <p className={styles.header__item}>Products</p>
                </Link>
                <Link href="/about">
                  <p className={styles.header__item}>Company</p>
                </Link>
                <Link href="/faqs">
                  <p className={styles.header__item}>FAQs</p>
                </Link>
                {/* <Button type="primary" className={styles.header__btn}>
                  <Link href="/keep-in-touch">Stay in touch</Link>
                </Button> */}
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
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            bodyStyle={drawerStyle}
          >
            <div>
              <Row>
                <img src="/images/selendra.png" alt="selendra-logo" />
              </Row>
              <div className={styles.drawer__product}>
                <h1>Products</h1>
                <Link href="/product">Bitriel Wallet</Link>
                <p></p>
                <Link href="/product">
                  <p>Albazzar</p>
                </Link>
              </div>
              <div className={styles.drawer__company}>
                <h1>Company</h1>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
                <Link href="/faqs">
                  <p>FAQs</p>
                </Link>
                <Link href="/privacy-policy">
                  <p>Privacy & Policy</p>
                </Link>
                <Link href="/term-of-use">
                  <p>Term Of Use</p>
                </Link>
              </div>
              {/* <div className={styles.drawer__btn}>
                <Button><Link href='/keep-in-touch'>Stay in touch</Link></Button>
              </div> */}
            </div>
          </Drawer>
        </Row>
      </div>
    </div>
  );
}
