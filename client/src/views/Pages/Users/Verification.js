import React, { useState, useEffect } from 'react';
import { css } from "@emotion/core";
import PacManLoader from "react-spinners/PacmanLoader";
import axios from 'axios';
import { API_SERVER } from '../../../helper/variable';
import { Button, Col, Container, Input, Row } from 'reactstrap';
import {AiFillSafetyCertificate} from 'react-icons/ai';

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function Verification(props) {
  const token = props.history.location.search;
  const tokenVerification = useState(token);
  const [loading, setLoading] = useState(true);
  const [unknown, setUnknown] = useState(false);
  const [success, setSuccess] = useState(false);
  const [expired, setExpired] = useState(false);
  const [email, setEmail] = useState('');
  const [successResend, setSuccessResend] = useState(false);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios.get(`${API_SERVER}/merchant-verification?tokenverify=${tokenVerification[0].substring(13)}`)
    .then(result => {
      console.log(result.data)
      if(result.data.status === 'OK'){
        setLoading(false)
        setSuccess(true)
      }
      if(result.data.messages === 'Token not valid'){
        setLoading(false)
        setUnknown(true)
      }
      if(result.data.messages === 'Token no longer valid'){
        setLoading(false)
        setExpired(true)
      }
    })
    .catch(error => console.log(error))
  }, [])

  const submitEmail = e => {
    e.preventDefault();
    axios.post(`${API_SERVER}/resend-verification`,{
      email: email
    }).then(result => {
      if(result.data.status === "OK"){
        setExpired(false);
        setSuccessResend(true);
      }
      if(result.data.messages === "User not found"){
        setExpired(false);
        setNotFound(true)
      }
    }).catch(error => console.log(error))
  }

  const renderVerification = () => {
    if(loading){
      return <>
        <div style={{margin: '0 auto', marginTop: '200px'}}>
          <PacManLoader
            css={override}
            size={35}
            color={"#34b7eb"}
            loading={loading}
          />
          <center>
            <div style={{marginTop: 40, marginLeft: 35}}>Please Wait...</div>
          </center>
        </div>
      </>
    }
    if(success){
      return <>
      <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <span className="clearfix">
            <AiFillSafetyCertificate
                color={"#34b7eb"}
                size={120}
              />
              <h4 className="pt-3">Selamat akun anda telah berhasil diaktivasi :)</h4>
              <p className="float-left">Mulai sekarang anda bisa menggunakan layanan Payment Gateway dari Jazaa. Silahkan Login Untuk memulai</p>
            </span>
            <a href="/login"><Button color="info">Login</Button></a>
          </Col>
        </Row>
      </Container>
    </div>
      </>
    }
    if(unknown){
      return <>
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <span className="clearfix">
                  <h4 className="pt-3">url verifikasi salah :( silahkan cek dengan benar url sesuai dengan email</h4>
                </span>
                <a href="/login"><Button color="info">Login</Button></a>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    }
    if(expired){
      return <>
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <form onSubmit={e => submitEmail(e)}>
                <Col md="6">
                  <span className="clearfix">
                    <h4 className="pt-3">url verifikasi sudah tidak berlaku :( Masukan email kamu untuk verifikasi ulang ya</h4>
                    <Input type="email" onChange={e => setEmail(e.target.value)} value={email} />
                  </span>
                  <Button disabled={email ? false : true} type="submit" style={{marginTop: 10}} color="info">Submit</Button>
                </Col>
              </form>
            </Row>
          </Container>
        </div>
      </>
    }
    if(successResend){
      return <>
        <div className="app flex-row align-items-center">
          <Container>
          <Row className="justify-content-center">
              <Col md="6">
                <span className="clearfix">
                  <h4 className="pt-3">verifikasi telah berhasil dikirim. silahkan cek email kamu ya :)</h4>
                </span>
                <a href="/login"><Button color="info">Login</Button></a>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    }
    if(notFound){
      return <>
        <div className="app flex-row align-items-center">
          <Container>
          <Row className="justify-content-center">
              <form>
              <Col md="6">
                <span className="clearfix">
                  <h4 className="pt-3">Email tidak terdaftar di sistem kami :( pastikan email yang anda input sudah benar.</h4>
                    <Input type="email" onChange={e => setEmail(e.target.value)} value={email} />
                </span>
                <a href="/login"><Button color="info">Login</Button></a>
              </Col>
              </form>
            </Row>
          </Container>
        </div>
      </>
    }
  }

  return (
    <div style={{backgroundColor:'#e6e8ed'}}>
      {renderVerification()}
    </div>
  )
}
