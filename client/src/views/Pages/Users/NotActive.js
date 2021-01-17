import React from 'react'

export default function NotActive() {
  return (
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
  )
}
