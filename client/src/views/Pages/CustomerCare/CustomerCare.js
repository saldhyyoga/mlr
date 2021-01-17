import React from 'react';
import { Col, Row, Card, CardBody } from 'reactstrap';
import { FcCustomerSupport } from 'react-icons/fc'
import { FaWhatsapp, FaTelegramPlane } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { MdRoom, MdPinDrop } from 'react-icons/md';

import './Customercare.css';

export default function CustomerCare() {
  return (
    <div>
      <Row>
        <Col xs="12" sm="6" md="6">
          <Card style={{border: '5px'}}>
            <CardBody>
              <center>
                <FcCustomerSupport
                  size={80}
                />
                <div>Customer Care</div>
                {/* <div>Hubungi kami untuk layanan payment gateway melalui platform berikut ini :</div> */}
              </center>
              <center>
                <div style={{marginTop: 20}}>
                <a target="_blank" href="https://wa.me/6281113017036" rel="noopener noreferrer">
                  <FaWhatsapp color="green" size={25} />
                  <span style={{color:'black', marginLeft: 10, width: 90, display:'inline-block'}}>Whatsapp</span>
                  <span style={{color: 'black'}}>: +62 811-1301-7036</span>
                </a>
                <div style={{marginTop: 10}}>
                  <a target="_blank" href="https://t.me/productDevMtm" rel="noopener noreferrer">
                  <FaTelegramPlane size={25} />
                    <span style={{marginLeft: 10,width: 90, display: 'inline-block' ,color: 'black', textUnderlineOffset: 'none', cursor: 'pointer'}}>
                      Telegram
                    </span>
                    <span style={{color: 'black'}}>: +62 811-1301-7036</span>
                  </a>
                </div>
                <div style={{marginTop: 10}}>
                  <AiFillMail size={25} />
                  <span style={{marginLeft: 10,width: 90, display: 'inline-block' ,color: 'black', textUnderlineOffset: 'none', cursor: 'pointer'}}>
                    E-Mail
                  </span>
                  <span>: csonline@jazaa.id</span>
                </div>
              </div>
              </center>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="6">
          <Card style={{border: '5px', height: 255}}>
            <CardBody>
              <center>
                <MdRoom
                  color="blue"
                  size={80}
                />
                <div>Kantor Kami</div>
                {/* <div>Hubungi kami untuk layanan payment gateway melalui platform berikut ini :</div> */}
              </center>
              <div style={{marginTop: 20}}>
                <div>
                  <MdPinDrop size={25} />
                  <span style={{color:'black', marginLeft: 10, width: 90, display:'inline-block'}}>Address</span>
                  <span style={{color: 'black'}}>: Kav.6 Kel, Jl. Kalibata Timur, RT.1/RW.1, East Pejaten, Pasar Minggu, South Jakarta City, Jakarta 12510</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
