import React, { Component } from 'react';
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, Row } from 'reactstrap';

class Page500 extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center" style={{backgroundColor:'#e6e8ed'}}>
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <span className="clearfix">
                <h1 className="float-left display-3 mr-3">403</h1>
                <h4 className="pt-3">Sayang sekali,akun kamu belum aktif nih :(</h4>
                <p className="text-muted float-left">Untuk mengaktifkan akun silahkan aktivasi melalui email aktivasi. Jika terdapat masalah
                hubungi customer care kami melalui email csonline@jazaa.id</p>
              </span>
              <span>Belum menerima email aktivasi? Silahkan request aktivasi ulang ya..</span>
              <InputGroup className="input-prepend">
                <Input size="16" type="email" placeholder="Masukan email" />
                <InputGroupAddon addonType="append">
                  <Button color="info">Submit</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Page500;
