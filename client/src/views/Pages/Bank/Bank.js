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
import { token, API_SERVER } from '../../../helper/variable';

export default class Bank extends Component {
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
    axios.get(`${API_SERVER}/bank`, {
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
                  <i className="fa fa-edit"></i>Informasi Bank
                </CardHeader>
                <div style={{marginTop: 10, marginLeft: 25, marginBottom: 10}}>
                  <Link to="/create-bank"><Button color="primary" size="md">Buat Informasi Bank Baru</Button></Link>
                </div>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  {this.state.data.map((item, index) => {
                    return(
                      <CardBody>
                        <ListGroup key={index}>
                          <ListGroupItem>Kode Bank        : {item.code}</ListGroupItem>
                          <ListGroupItem>Nama Bank        : {item.name}</ListGroupItem>
                          <ListGroupItem>Status           : {item.active === true ? 'Active' : 'Non Active' }</ListGroupItem>
                        </ListGroup>
                        <div style={{marginTop: 10}}>
                          <Link to={"/edit-bank/"+item.id}><Button size="md" color="success" style={{marginRight: 5}}>Edit Data Bank</Button></Link>
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
