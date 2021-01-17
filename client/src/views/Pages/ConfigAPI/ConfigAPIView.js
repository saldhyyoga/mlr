import React, { Component } from 'react';
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Collapse,
  Fade,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner
} from 'reactstrap';
import crypto from 'crypto';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { token, API_SERVER } from '../../../helper/variable';
import CryptoJS from 'crypto-js';

export default class ConfigAPI extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      secretKey: '',
      tokenAuth: '',
      url_callback: '',
      password: '',
      confirmPassword: '',
      showSecretKey: true,
      showSecretManual: false,
      showSecretAuto: false,
      showToken: false,
      modal: false,
      loading: false,
      data: []
    };
  }

  componentDidMount(){
    axios.get(`${API_SERVER}/config-api`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(result => {
      this.setState({
        data: result.data.data,
        secretKey: result.data.data.secret_key,
        tokenAuth: result.data.data.api_token,
        url_callback: result.data.data.url_callback
      })
    })
    .catch(error => console.log(error))
  }

  validation = () => {
    let message
      if(this.state.password !== this.state.confirmPassword){
        message = <p style={{color: 'red'}}>Password harus sama</p>
      }
      if(this.state.password.length <8 && this.state.confirmPassword.length < 8){
        message = <p style={{color: 'red'}}>Password minimal 8 karakter</p>
      }
      return message
  }

  verification =  () => {
    try {
      this.setState({
        loading: true
      })

      const encryptPasswordMD5 = CryptoJS.MD5(this.state.password);
      const encryptPasswordSHA1 = CryptoJS.SHA1(encryptPasswordMD5.toString());

      axios.post(`${API_SERVER}/config-api/verification`, {
        password: encryptPasswordSHA1.toString()
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(result => {
        if(result.data.data === 'You entered valid password'){
          this.submitData()
        }else{
          this.error('Password salah')
          this.setState({modal: false})
        }
      })
      .catch(error => console.log(error))

    } catch (error) {
      console.log(error)
    }
  }

  showSecretManual = () => {
    this.setState({
      showSecretManual: true,
      showSecretKey: false,
      showSecretAuto: false
    })
  }

  showSecretAuto = () => {
    const secret = crypto.randomBytes(20).toString('hex');
    this.setState({ secretKey: secret, showSecretKey: false, showSecretManual:false, showSecretAuto: true })
  }

  onClickToken = async () => {
    try {
      const result = await axios.get(`${API_SERVER}/api-token`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.setState({ tokenAuth: result.data.data, showToken: true})

    } catch (error) {
      console.log(error)
    }
  }

  toggle = () => this.setState({ modal: true})
  toggleCancel = () => this.setState({ modal: false})

  showModal = () => {
    return(
      <div>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Ubah Secret Key dan Token</ModalHeader>
        <ModalBody>
          Apakah anda yakin ingin mengubah konfigurasi ini ?
          <div style={{marginTop: 20}}>
            Password
            <Input onChange={e => this.setState({
              password: e.target.value
            })} style={{marginTop: 5}} type="password" id="password" />
            Confirm Password
            <Input onChange={e => this.setState({
              confirmPassword: e.target.value
            })} type="password" id="confirmpassword" />
            {this.validation()}
          </div>
        </ModalBody>
        <ModalFooter>
          {this.state.loading ? <Spinner color="primary" /> :
          <Button color="primary" disabled={this.state.password === this.state.confirmPassword && this.state.password !== '' && this.state.confirmPassword !== '' ? false : true} onClick={this.verification}>Submit</Button> }
          <Button color="secondary" onClick={this.toggleCancel}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    )
  }

  success = message => {
    toast.success(`${message}`, {
      onClose: () => window.location.href="/config-api",
      autoClose: 2000
    })
  }

  error =message => {
    toast.error(`${message}`,{
      onClose: () => window.location.reload(),
      autoClose: 2000
    })
  }

  submitData = () => {
    this.setState({ modal: false})
    axios.put(`${API_SERVER}/config-api`,{
      secret_key: this.state.secretKey,
      api_token: this.state.tokenAuth,
      url_callback: this.state.url_callback
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
          <Col xs="12">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
              <Form className="form-horizontal">
                <CardHeader>
                  <i className="fa fa-edit"></i>Config API
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Alert color="warning">
                    Berikut ini merupakan informasi Secret Key dan Token Authentication anda untuk melakukan integrasi dengan Jazaa.
                    Secret Key dan Token Authentication digunakan untuk berkomunikasi dengan API Jazaa dalam bertransaksi.
                    </Alert>
                      <FormGroup style={{marginTop: 15}}>
                        <Label htmlFor="secret_key">Secret Key</Label>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                          {this.state.showSecretKey ? <Input style={{width: 310}} id="secret_key" size="16" type="text" value={this.state.data.secret_key} /> : null }
                          {/* {this.state.showSecretManual ? <Input onChange={e => this.setState({secretKey: e.target.value})} style={{width: 300}} id="secret_key" size="16" type="text" value={this.state.secretKey} /> : null } */}
                          {this.state.showSecretAuto ? <Input style={{width: 310}} id="secret_key" size="16" type="text" disabled value={this.state.secretKey} /> : null}
                          <Button style={{marginLeft: -5}} onClick={this.showSecretAuto} color="primary">Generate </Button>
                        </div>
                        {/* <div style={{marginTop: 10, display: 'flex', flexDirection: 'row'}}> */}
                        {/* <Button onClick={this.showSecretManual} color="success" style={{marginRight: 10}}>Ubah Secret Key (Manual) </Button> */}
                        {/* <Button onClick={this.showSecretAuto} color="primary">Ubah Secret Key (Auto Generate) </Button> */}
                        {/* </div> */}
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="token">Token Authentication</Label>
                        <div style={{display:'flex', flexDirection: 'row'}}>
                            {this.state.showToken ? <Input id="token" style={{width: 310}} size="16" type="text" disabled value={this.state.tokenAuth} /> :
                            <Input style={{width: 310}} id="token" size="16" type="text" disabled value={this.state.tokenAuth} /> }
                               {/* <Input id="token" size="16" type="text" disabled value={this.state.data.api_token} /> */}
                            <Button style={{marginLeft: -5}} onClick={this.onClickToken} color="primary">Generate</Button>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="url_callback">URL Callback</Label>
                        <div className="controls">
                              <Input onChange={e => this.setState({url_callback: e.target.value})} style={{width: 300}} id="url_callback" size="16" type="text" value={this.state.url_callback === null ? '' : this.state.url_callback} />
                        </div>
                      </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button onClick={this.toggle} size="md" disabled={this.state.secretKey !== '' && this.state.tokenAuth !== '' && this.state.url_callback !== null ? false : true} color="success" style={{marginRight: '10px'}}>Edit Data</Button>

                  </CardFooter>
                </Collapse>
                </Form>
              </Card>
              {this.showModal()}
            </Fade>
          </Col>
        </Row>
      </div>
    )
  }
}
