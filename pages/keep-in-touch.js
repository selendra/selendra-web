import styles from '../styles/keepintouch.module.css'
import { Input, Row, Button, Col, message } from 'antd'
// import { GoogleSpreadsheet } from "google-spreadsheet"
import { useState } from 'react'

export default function Keepintouch() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = async() => {
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
    const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
    const CLIENT_EMAIL = process.env.NEXT_PUBLIC_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, '\n');

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
    setLoading(true);
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    // loads document properties and worksheets
    await doc.loadInfo();

    const sheet = doc.sheetsById[SHEET_ID];
    await sheet.addRow({
      Email: email, 
    })
    .then(_=> {
      message.success('successfully submit!')
      setLoading(false);
    })
    .catch(err => {
      console.error('Error: ', err);
      setLoading(false);
    })
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