import React, { Component } from 'react';
import {
  Button,
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
  InputGroup,
  Label,
  Row,
} from 'reactstrap';
import Axios from 'axios';
import { token, API_SERVER } from '../../../helper/variable';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class EditEmployeeData extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      bankName: '',
      bankCode: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  success = () => {
    toast.success("Bank berhasil ditambahkan", {
      onClose: () => window.location.href="/bank",
      autoClose: 2000
    })
  }

  error = () => {
    toast.error("Terdapat kesalahan pada server",{
      autoClose: 2000
    })
  }

  submitData = async e => {
    e.preventDefault();
    const ca = token
    const base64Url = ca.split('.')[1];
    const decodedToken = JSON.parse(window.atob(base64Url));
    let url = '';
    if(decodedToken.group === 1){
      url = 'bank'
    }
    if(decodedToken.group === 3){
      url = 'bank-operational'
    }
    try {
      const result = await Axios.post(`${API_SERVER}/${url}`,{
        code: this.state.bankCode,
        name: this.state.bankName
      },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if(result.data.status === 'OK'){
        this.success();
      }else{
        this.error()
      }
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <Row>
        <ToastContainer position={toast.POSITION.TOP_CENTER}/>
          <Col xs="9">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
              <Form onSubmit={this.submitData} className="form-horizontal">
                <CardHeader>
                  <i className="fa fa-edit"></i>Create Bank
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                      <FormGroup>
                        <Label htmlFor="appendedInput">Nama Bank</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input name="bankName" onChange={this.handleChange} value={this.state.bankName} id="appendedInput" size="16" type="text" required />
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedInput">Kode Bank</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input onChange={this.handleChange} name="bankCode" value={this.state.bankCode} id="appendedInput" minLength="3" maxLength="5" size="16" type="number" required />
                          </InputGroup>
                        </div>
                      </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Submit</Button>
                    <Button onClick={() => window.location.reload()} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                  </CardFooter>
                </Collapse>
                </Form>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    )
  }
}
