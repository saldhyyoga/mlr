import React, { Component } from 'react';
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Fade,
  ListGroup,
  ListGroupItem,
  Row
} from 'reactstrap';
import axios from 'axios';
import { token, API_SERVER } from '../../../helper/variable';

export default class RekeningMerchant extends Component {
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
    axios.get(`${API_SERVER}/rekening-merchant`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response =>  {
      this.setState({data: response.data.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="9">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Alert color="warning">
                Rekening dibawah ini merupakan rekening yang digunakan untuk pengalihan dana dari Jazaa ke merchant.
              </Alert>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Informasi Rekening
                </CardHeader>
                {/* <div style={{marginTop: 10, marginLeft: 25}}>
                  <Link to="/create-rekening-merchant"><Button color="primary" size="md">Buat Informasi Rekening Baru</Button></Link>
                </div> */}
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  {this.state.data.map((item, index) => {
                    return(
                      <CardBody key={index}>
                        <ListGroup>
                          <ListGroupItem>Nama Bank        : {item.rekening.bank.name} </ListGroupItem>
                          <ListGroupItem>Nomor Rekening   : {item.rekening.number} </ListGroupItem>
                          <ListGroupItem>Pemilik          : {item.rekening.name} </ListGroupItem>
                          <ListGroupItem>Status           : {item.rekening.active === true ? 'Active' : 'Non Active'} </ListGroupItem>
                        </ListGroup>
                        {/* <div style={{marginTop: 10}}>
                          <Link to={"/edit-rekening-merchant/"+item.rekeningId}><Button size="md" color="success" style={{marginRight: 5}}>Edit Data Rekening</Button></Link>
                        </div> */}
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
