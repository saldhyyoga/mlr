import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Fade,
  ListGroup,
  ListGroupItem,
  Row,
  Button
} from 'reactstrap';
import axios from 'axios';
import Cookie from 'js-cookie';

export default class Rekening extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
      data: []
    };
  }

  componentDidMount(){
    const token = Cookie.get('authToken');
    axios.get(`http://localhost:5000/rekening-admin`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => this.setState({data: response.data.data}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="9">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Informasi Rekening
                </CardHeader>
                <div style={{marginTop: 15, marginLeft: 25, marginBottom: 15}}>
                  <Link to="/create-rekening"><Button color="primary" size="md">Buat Informasi Rekening Baru</Button></Link>
                </div>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  {this.state.data.map((item, index) => {
                    return(
                      <CardBody>
                        <ListGroup key={index}>
                          <ListGroupItem>Kode Bank        : {item.bank.code}</ListGroupItem>
                          <ListGroupItem>Nama Bank        : {item.bank.name}</ListGroupItem>
                          <ListGroupItem>Nomor Rekening   : {item.number}</ListGroupItem>
                          <ListGroupItem>Pemilik          : {item.name}</ListGroupItem>
                          <ListGroupItem>Status           : {item.active === true ? 'Active' : 'Non Active' }</ListGroupItem>
                        </ListGroup>
                        <div style={{marginTop: 10}}>
                          <Link to={"/edit-rekening/"+item.id}><Button size="md" color="success" style={{marginRight: 5}}>Edit Data Rekening</Button></Link>
                        </div>
                      </CardBody>
                    )
                  })}
                </Collapse>
              </Card>
            </Fade>
          </Col>
        </Row>
      </div>
    )
  }
}
