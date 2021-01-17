import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Row,
} from 'reactstrap';

export default class AddEmployeeData extends Component {
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

  onChangeHandlerInput= event => {
    console.log(event.target.files)
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
    // console.log(this.state.selectedFile)
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
                  <i className="fa fa-edit"></i>Tambah Data Karyawan
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Link to="/add-employee-data-form"><Button type="submit" size="sm" color="success" style={{marginRight: '20px', fontSize: 18}}>Add Data via Form Input</Button></Link>
                    <Link to="/add-employee-data-upload"><Button type="reset" size="sm" color="primary" style={{fontSize: 18}}>Add Data via Upload file Excel</Button></Link>
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
