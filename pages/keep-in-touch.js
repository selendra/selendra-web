import styles from '../styles/keepintouch.module.css'
import { Input, Row, Button, Col, message } from 'antd'
import { useState } from 'react'

export default function Keepintouch() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = async() => {
    await fetch(`http://localhost:3000/api/writeData`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email
      })
    })
    console.log(email)
  }

  return (
    <div className={styles.container}>
      <Row justify='center'>
        <Col>
          <h1>Keep in touch</h1>
          <hr/>
          <h2>Technology Roadmap</h2>
          <p>You will get update on project roadmap status, network launch, and token distribution.</p>
          <Input placeholder='Email' value={email} onChange={ e => setEmail(e.target.value)} />
          <Button onClick={onSubmit} loading={loading}>Stay in touch</Button>
        </Col>
      </Row>
    </div>
  )
}