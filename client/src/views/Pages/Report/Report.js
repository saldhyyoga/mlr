import React, { useState,useEffect } from 'react';
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Collapse,
  Fade,
  FormGroup,
  Input,
  Label,
  Row,
} from 'reactstrap';
import axios from 'axios';
import { token, API_SERVER } from '../../../helper/variable';
import ReactExcel from './ReactExcel';

export default function Report () {
  const [resultData, setResultData] = useState([]);
  const [date, setDate] = useState('');
  const [to, setTo] = useState('');
  const collapse = true;
  const timeout = 300;
  const fadeIn = true;

  useEffect(() => {
    let url = ''
    let body = null
    if(to === null || to === ''){
      url = `${API_SERVER}/dailytransaction`;
      body = {
        date: date
      }
    }else {
      url = `${API_SERVER}/customtransaction`;
      body = {
        startDate: date,
        endDate: to
      }
    }

    axios.post(url, body,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
        setResultData(result.data.data)
    })
    .catch(error => console.log(error))
  }, [date,to])

  console.log(resultData)

  return (
    <div>
      <Row>
        <Col xs="9">
          <Fade timeout={timeout} in={fadeIn}>
            <Card>
              <CardHeader>
                <i className="fa fa-edit"></i>Report Transaction
              </CardHeader>
              <Collapse isOpen={collapse} id="collapseExample">
                <CardBody>
                    <div>Pilih Tanggal Transaksi</div>
                    <FormGroup>
                      <Label for="exampleDate">Dari</Label>
                      <Input
                        type="date"
                        name="date"
                        id="exampleDate"
                        placeholder="Date"
                        style={{width: 150}}
                        onChange={e => setDate(e.target.value) }
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleDate">Sampai</Label>
                      <Input
                        type="date"
                        name="endDate"
                        id="endDate"
                        placeholder="Date"
                        style={{width: 150}}
                        onChange={e => setTo(e.target.value)}
                        disabled={date !== '' && date !== null ? false : true}
                      />
                    </FormGroup>
                    <Alert color="info">
                      Tips: Jika ingin menampilkan transaksi harian isi dari tanggal saja. Jika ingin menampilkan transaksi
                      pada periode waktu tertentu isi sampai tanggal transaksi yang ingin didownload.
                    </Alert>
                    {/* <ReactExcel date={date} data={resultData} /> */}
                </CardBody>
                <CardFooter>
                  <ReactExcel date={date} data={resultData} />
                </CardFooter>
              </Collapse>
            </Card>
          </Fade>
        </Col>
      </Row>
    </div>
  )
}
