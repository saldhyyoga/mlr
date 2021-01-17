import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
} from 'reactstrap';
import crypto from 'crypto';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { token, API_SERVER } from '../../../helper/variable';

export default class ConfigAPI extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      secretKey: '',
      tokenAuth: '',
      showSecret: false,
      showSecretManual: false,
      showToken: false,
      showTokenManual: false
    };
  }

  onClick = () => {
    const secret = crypto.randomBytes(10).toString('hex');
    this.setState({ secretKey: secret, showSecret: true, showSecretManual: false })
  }

  onClickInputSecretKey = () => {
    this.setState({ showSecret: false, showSecretManual: true, secretKey: ''})
  }

  onClickToken = () => {
    const secret = crypto.randomBytes(20).toString('hex');
    this.setState({ tokenAuth: secret, showToken: true})
  }

  success = message => {
    toast.success(`${message}`, {
      onClose: () => window.location.href="/config-api",
      autoClose: 3000
    })
  }

  error =message => {
    toast.error(`${message}`,{
      autoClose: 3000
    })
  }


  submitData = e => {
    e.preventDefault();
    axios.put(`${API_SERVER}/config-api`,{
      secret_key: this.state.secretKey,
      api_token: this.state.tokenAuth
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      if(result.data.status === "OK"){
        this.success('Config API berhasil diubah')
      } else {
        this.error('Config API gagal diubah')
      }
    })
    .catch(error => {
      console.log(error)
      this.error('Terdapat kesalahan pada server')
    })
  }

  render() {
    return (
      <div>
        <Row>
        <ToastContainer position={toast.POSITION.TOP_CENTER}/>
          <Col xs="9">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Config API
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <div>
                    Anda harus mengetahui Secret Key dan Token Authentication anda untuk melakukan integrasi dengan Jazaa.
                    Secret Key dan Token Authentication digunakan untuk berkomunikasi dengan API Jazaa dalam bertransaksi.
                    </div>
                    <Form onSubmit={this.submitData} className="form-horizontal">
                      <FormGroup style={{marginTop: 15}}>
                        <Label htmlFor="appendedInput">Secret Key</Label>
                        <div className="controls">
                            <Button onClick={this.onClickInputSecretKey} color="primary" style={{marginBottom: 10, marginRight: 10}}>Input Secret Key</Button>
                            <Button style={{marginBottom:10}} onClick={this.onClick}>Generate key</Button>
                            {this.state.showSecret && <Input style={{width: 350}} id="appendedInput" size="16" type="text" disabled value={this.state.secretKey} />}
                            {this.state.showSecretManual && <Input style={{width: 350}} id="appendedInput" size="16" type="text" onChange={e => this.setState({ secretKey: e.target.value})} value={this.state.secretKey} /> }
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedPrependedInput">Token Authentication</Label>
                        <div className="controls">
                            <Button style={{marginBottom:10}} onClick={this.onClickToken}>Generate Token Auth</Button>
                            {this.state.showToken && <Input style={{width: 350}} id="appendedInput" size="16" type="text" disabled value={this.state.tokenAuth} />}
                        </div>
                      </FormGroup>
                      <div className="form-actions">
                        <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Submit</Button>
                      </div>
                    </Form>

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    )
  }
}
