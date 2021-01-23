import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, CardBody, Table, Button } from "reactstrap";
import "./style.css";
import axios from "axios";
import { token, API_SERVER } from "../../../helper/variable";
import { setMonth } from "../../../functions/month";
import Pdf from "react-to-pdf";

export default function DetailPrediksi(props) {
  const id = props.match.params.id;
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [dataProduct, setDataProduct] = useState([]);
  const ref = useRef();

  useEffect(() => {
    axios
      .get(`${API_SERVER}/prediksi/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data.data);
        setCount(res.data.data.data.length);
        setDataProduct(res.data.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const length = data.data;
  console.log(dataProduct);
  return (
    <Container fluid={true}>
      {/* <Col className="wrapper">
        <Button color="primary">Export PDF</Button>
      </Col> */}
      <div style={{ marginLeft: 15, marginBottom: 10 }}>
        <Pdf targetRef={ref} filename="prediksi.pdf">
          {({ toPdf }) => (
            <Button color="primary" onClick={toPdf}>
              Export Pdf
            </Button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <Col xs="12" sm="12" md="12">
          <Card>
            <CardBody style={{ color: "black" }}>
              <center>
                <div
                  style={{ fontWeight: 500, fontSize: 22, marginBottom: 20 }}
                >
                  Detail Prediksi
                </div>
              </center>
              <Col className="wrapper">
                <div className="paragraf">Nomor Prediksi</div>
                <div>:</div>
                <div>&nbsp;{id}</div>
              </Col>
              <Col className="wrapper">
                <div className="paragraf">Data Tahun Penjualan</div>
                <div>:</div>
                <div>&nbsp;{data.tahun - 1}</div>
              </Col>
              <Col className="wrapper">
                <div className="paragraf">Tahun Prediksi</div>
                <div>:</div>
                <div>&nbsp;{data.tahun}</div>
              </Col>
              <Col className="wrapper">
                <div className="paragraf">Jumlah Produk</div>
                <div>:</div>
                <div>&nbsp;{count}</div>
              </Col>
              <Col className="wrapper">
                <div className="paragraf">
                  Prediksi Perbulan Tahun {data.tahun}
                </div>
                <div>:</div>
                <div>&nbsp;{data.pred_m}</div>
              </Col>
              <Col className="wrapper">
                <div className="paragraf">Prediksi Pertahun {data.tahun}</div>
                <div>:</div>
                <div>&nbsp;{data.pred_y}</div>
              </Col>

              <Table style={{ width: 700 }}>
                <thead>
                  <tr>
                    <th style={{ width: 20 }}>#</th>
                    <th style={{ width: 25 }}>Product</th>
                    <th style={{ width: 20 }}>Penjualan Tertinggi</th>
                    <th style={{ width: 20 }}>Penjualan Terendah</th>
                    <th style={{ width: 20 }}>Bulan Penjualan Tertinggi</th>
                    <th style={{ width: 20 }}>Bulan Penjualan Terendah</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {console.log(length)} */}
                  {dataProduct.map((item, index) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <th>{item.name}</th>
                        <th>{item.max}</th>
                        <th>{item.min}</th>
                        <th>{setMonth(item.monthmax)}</th>
                        <th>{setMonth(item.monthmin)}</th>
                      </tr>
                    );
                  })}
                  {/* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr> */}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </div>
    </Container>
  );
}
