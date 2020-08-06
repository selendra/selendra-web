import React, { Component } from 'react';
import { Form, Input, Button, notification, Row, Col } from 'antd';
import axios from 'axios';
import '../styles/index.css';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1Visible: false,
      loading: false
    };  
    this.setModal1Visible = this.setModal1Visible.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  handleSubmit(val) {
    this.setState({loading: true});
    axios.post('https://sheet.best/api/sheets/5e68144d-ab55-4dcb-a1ac-097aeed04d31', {
      Name: val.name,
      Email: val.email
    })
    .then(_=> {
      this.setState({loading: false});
      notification['success']({
        message: 'Successfully',
        description:
          'Thanks for submit, We will send you an email when the service is running',
      });
    })
  }

  render() {
    return (
      <>
        <div className="lg:h-screen landing-page">
          <div>
            <Row>
              <Col xs={{span:24}} sm={{span:24}} md={{span:12}} className="text-white section-1">
                <p className="text-5xl font-bold text-center">Selendra</p>
                <p className="text-xl">A digital assets ownership issuance and management platform that is secured, transparent, fast and interoperational and is trustless; powered by Blockchain.</p>
              </Col>
              <Col></Col>
            </Row>
          </div>
        </div>
        <div>
          <Row className="py-6 px-20">
            <Col xs={{span:24}} sm={{span:24}} md={{span:8}} className="">
              <p className="text-4xl">Sign Up for Project Updates</p>
              <p className="text-xl">We’ll update you on our project status & let you know when we’ve launched.</p>
            </Col>
            <Col xs={{span:24}} sm={{span:12}} md={{span:10, offset:5}} lg={{offset:5}}>
              <Form
                size={'large'}
                layout={'vertical'}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={this.handleSubmit}
              >
                <Form.Item 
                  label="Email:"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}  
                >
                  <Input/>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block loading={ this.state.loading }>Submit</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Index;