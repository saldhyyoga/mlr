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
  Label,
  Row,
} from 'reactstrap';

export default class AddEmployeeDataForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      selectedFile: null,
      disabled: null
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
                  <i className="fa fa-edit"></i>Report Transaction
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form className="form-horizontal">
                      <FormGroup>
                        <Label for="exampleDate">Date From</Label>
                        <Input
                          type="date"
                          name="date"
                          id="exampleDate"
                          placeholder="Date"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleDate">To</Label>
                        <Input
                          type="date"
                          name="date"
                          id="exampleDate"
                          placeholder="Date"
                        />
                      </FormGroup>
                      <div className="form-actions">
                        <Button type="submit" size="sm" color="primary" style={{marginRight: '10px'}}><i className="fa fa-file-pdf-o"></i> Download in PDF</Button>
                        <Button type="reset" size="sm" color="success"><i className="fa fa-file-excel-o"></i> Download in Excel</Button>
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
