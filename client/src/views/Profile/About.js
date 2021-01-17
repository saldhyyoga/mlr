import React, { Component } from 'react';
import { Card,CardBody, Col } from 'reactstrap';

const styleDiv = {
    marginBottom: 20
}

class About extends Component {
    render() {
        return (
            <div>
                <Col>
                  <Card style={{border:'none'}}>
                    <CardBody>
                      <div style={styleDiv}>
                        <div style={{fontWeight:'bold'}}><i class="icon-phone"></i> &nbsp;CONTACT</div>
                        <div>Phone <span style={{paddingLeft:20}}>087654654321</span></div>
                        <div>Email <span style={{paddingLeft:20}}>jazaa@gmail.com</span></div>
                      </div>
                      <div style={styleDiv}>
                        <div style={{fontWeight:'bold'}}><i class="icon-location-pin"></i> &nbsp;Address</div>
                        <div>PT.Media Telekomunikasi Mandiri - Pasar Minggu</div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
            </div>
        )
    }
}

export default About;
