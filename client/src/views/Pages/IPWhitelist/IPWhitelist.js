import React, { Component } from 'react';
import {
  Alert,
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

export default class IPWhiteList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs="9">
          <Alert color="warning">
            Ini adalah pengaturan pengamanan yang akan membuat map hanya dapat diakses dari alamat IP yang terdaftar dalam tabel di bawah ini.
            Jika anda memasukkan alamat IP yang salah, akses ke MAP Anda akan hilang. Pastikan Anda memiliki alamat IP yang tepat sebelum memasukkan ke dalam whitelist.
          </Alert>
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
              <Card>
                <CardHeader>
                  <i className="fa fa-edit"></i>Config IP WIP Whitelist
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                    <Form className="form-horizontal">
                      <FormGroup>
                        <Label htmlFor="prependedInput">Alamat IP anda saat ini adalah <b>182.165.34.122</b></Label>
                      </FormGroup>
                      <FormGroup>
                        <Label htmlFor="appendedInput">Tambah IP Address</Label>
                        <div className="controls">
                          <InputGroup>
                            <Input id="appendedInput" type="text" required />
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                      <div className="form-actions">
                        <Button type="submit" size="sm" color="success" style={{marginRight: '10px', height: 40, fontSize: 16}}>Tambahkan</Button>
                      </div>
                      </FormGroup>
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
