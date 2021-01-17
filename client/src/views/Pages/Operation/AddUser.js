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
  FormGroup,
  Input,
  InputGroup,
  Label,
  Row,
} from 'reactstrap';
import axios from 'axios';
import { token, API_SERVER } from '../../../helper/variable';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class AddEmployeeDataForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      group_id: 1,
      username: '',
      password: ''
    };
  }

  submitData = async e => {
    e.preventDefault();
    const result = await axios.post(`${API_SERVER}/users`,{
      group_id: parseInt(this.state.group_id),
      username: this.state.username,
      password: this.state.password
    },{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    if(result.data.messages === `Email ${this.state.username} sudah terdaftar pada sistem kami.`){
      toast.error("Username atau email sudah ada", {
        onClose: () => window.location.href = "/add-user",
        autoClose: 1000
      })
    }
    if(result.data.data !== null){
      toast.success("Berhasil menambahkan user", {
        onClose: () => window.location.href = "/operation",
        autoClose: 2000
      })
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
                <CardHeader>
                  <i className="fa fa-edit"></i>Tambah Data User Operational
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                <form onSubmit={this.submitData} className="form-horizontal">
                  <CardBody>
                      <FormGroup>
                        <Label htmlFor="prependedInput">Email</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <Input onChange={e => this.setState({ username: e.target.value})} value={this.state.username} id="prependedInput" size="16" min="8" type="email" required/>
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">User Group</Label>
                        <Input onChange={e => this.setState({ group_id: e.target.value})} type="select" name="select" id="exampleSelect">
                          <option value="1">Admin</option>
                          <option value="3">Operational</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="inputPassword">Password</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input onChange={e => this.setState({ password: e.target.value})}  id="inputPassword" min="8" size="16" type="password" required />
                          </InputGroup>
                        </div>
                      </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Submit</Button>
                  </CardFooter>
                  </form>
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    )
  }
}
