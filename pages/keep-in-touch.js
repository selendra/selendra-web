import styles from '../styles/keepintouch.module.css'
import { Input, Row, Button, Col } from 'antd'

export default function Keepintouch() {
  return (
    <div className={styles.container}>
      <Row justify='center'>
        <Col>
          <h1>Keep in touch</h1>
          <hr/>
          <h2>Technology Roadmap</h2>
          <p>You will get update on project roadmap status, network launch, and token distribution.</p>
          <Input placeholder='Email' />
          <Button>Stay in touch</Button>
        </Col>
      </Row>
    </div>
  )
}