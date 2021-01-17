import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
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

export default class AddAccountForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  render() {
    // console.log(this.state.selectedFile)
    return (
      <div>
        <Row>
          <Col xs="9">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Tambah User
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form className="form-horizontal">
                      <FormGroup>
                        <Label htmlFor="prependedInput">Nomor ID</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <Input id="prependedInput" size="16" type="text" required/>
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect">User Role</Label>
                        <Input type="select" name="select" id="exampleSelect">
                          <option>Member</option>
                          <option>Staff</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedInput">Nama</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input id="appendedInput" size="16" type="text" required />
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedPrependedInput">Nomor Telepon</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <Input id="appendedPrependedInput" size="16" type="text" required />
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <div className="form-actions">
                        <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Submit</Button>
                        <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
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
