import styles from '../styles/keepintouch.module.css'
import { Input, Row, Button, Col, message } from 'antd'
import { useState } from 'react'

export default function Keepintouch() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = async() => {
    const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
    const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
    const CLIENT_EMAIL = process.env.NEXT_PUBLIC_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, '\n');

    var values = [
      [
        'Email'
      ],
    ];
    var body = {
      values: values
    };
    gapi.client.sheets.spreadsheets.values.update({
       spreadsheetId: spreadsheetId,
       range: range,
       valueInputOption: valueInputOption,
       resource: body
    }).then((response) => {
      var result = response.result;
      console.log(`${result.updatedCells} cells updated.`);
    });
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