import { Row, Col, Button, Dropdown, Menu } from 'antd'
import styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
  const products = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Bitriel Wallet
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Albazaar
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <Row justify='space-between' align='middle'>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Link href='/'> 
              <img src='images/selendra.png' alt='selendra-logo' />
            </Link>
          </Col>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <Row justify='end'>
              <Row justify='space-between' align='middle' style={{width: '400px'}}>
                <Dropdown overlay={products}>
                  <p className={styles.header__item}>Products</p>
                </Dropdown>
                <Dropdown overlay={products}>
                  <p className={styles.header__item}>Company</p>
                </Dropdown>
                <Button type='primary' className={styles.header__btn}>
                  <Link href='/keep-in-touch'>Register</Link>
                </Button>
              </Row>
            </Row>
          </Col>
          {/* <Col xs={12} sm={12} md={0} lg={0} xl={0}>
            
          </Col> */}
        </Row>
      </div>
    </div>
  )
}