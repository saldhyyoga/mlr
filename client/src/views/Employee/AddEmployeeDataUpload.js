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
  Form,
  FormText,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import sampledata2 from './sampledata.xlsx';

export default class AddEmployeeDataUpload extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      selectedFile: null
    };
  }

  checkExcelType= event => {
    let files = event.target.files;
    let err = ''

    const type = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']

    for (let i=0; i<files.length; i++){
      if(type.every(type => files[i].type !== type)){
        err += files[i].type+' is not a supported format\n'
      }
    }

    if (err !== ''){
      event.target.value = null
      console.log(err)
      return false
    }
    return true
  }

  error = () => {
    toast.error("Format file salah, File harus excel(.xlsx)!",{
      autoClose: 2000
    })
  }

  onChangeHandlerInput= event => {
    if(this.checkExcelType(event)){
      this.setState({
        selectedFile: event.target.files[0],
        loaded: 0,
      })
    } else {
      this.error();
      this.setState({
        selectedFile: null
      })
    }
  }

  render() {
    console.log(this.state.selectedFile)
    return (
      <div>
        <Row>
          <ToastContainer position={toast.POSITION.TOP_CENTER}/>
          <Col xs="9">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Tambah Data Karyawan
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form className="form-horizontal">
                      <FormGroup row>
                        <Label for="exampleFile" sm={2}>File</Label>
                        <Col sm={10}>
                          <Input type="file" name="file" id="exampleFile" onChange={this.onChangeHandlerInput} />
                          <FormText color="muted">
                            Upload File bertipe excel(.xlsx). Jika terdapat data yang sama dengan data yang sudah ada dalam sistem,
                            direkomendasikan untuk input data melalui form input
                          </FormText>
                        </Col>
                      </FormGroup>
                      <div className="form-actions">
                        <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Submit</Button>
                        <Link to="/add-employee-data"><Button type="reset" size="sm" color="danger" style={{marginRight: '10px'}}><i className="fa fa-ban"></i> Cancel</Button></Link>
                        <Link to="" target="_blank" download="sampledata.xlsx"></Link>
                        <a href={sampledata2}  download="sampledata.xlsx" size="sm" color="warning" style={{marginRight: '10px'}}><i className="icon-folder-alt"></i>Download Sample Data</a>
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
