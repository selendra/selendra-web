import React, { Component } from 'react';
import { Form, Input, Modal, Button, notification } from 'antd';
import axios from 'axios';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1Visible: false,
      // name: '',
      // email: '',
      loading: false
    };  
    this.setModal1Visible = this.setModal1Visible.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  handleName (evt) {
    this.setState({
      name: evt.target.value
    })
  }

  handleEmail(evt) {
    this.setState({
      email: evt.target.value
    })
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
      <div className="h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="text-center"> 
            <img src={require('../assets/Selendra.png')} alt="logo" className="w-12 h-12 ml-4 logo" />
            <span className="block">Coming Soon!!</span>
            <br></br>
            <Button type="primary" onClick={() => this.setModal1Visible(true)}>
              Get Notify
            </Button>
            <Modal
              centered
              title="Get Notify"
              style={{ top: 20 }}
              visible={this.state.modal1Visible}
              onOk={() => this.setModal1Visible(false)}
              onCancel={() => this.setModal1Visible(false)}
            >
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={this.handleSubmit}
              >
                <Form.Item 
                  label="Name:"
                  name='name'
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Name!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
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
                  <Button type="primary" htmlType="submit" block loading={this.state.loading}>Submit</Button>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;