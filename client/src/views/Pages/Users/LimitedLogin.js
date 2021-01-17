import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';

class LimitedLogin extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center" style={{backgroundColor:'#e6e8ed'}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <span className="clearfix">
                <h1 className="float-left display-3 mr-3">500</h1>
                <h4 className="pt-2">Salah password kamu sudah melebihi 6 kali nih :(</h4>
                <p className="float-left">Kamu baru bisa login lagi 30 menit atau hari esok ya, kalau urgent banget bisa hubungi
                customer care kami di csonline@jazaa.id</p>
              </span>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LimitedLogin;
