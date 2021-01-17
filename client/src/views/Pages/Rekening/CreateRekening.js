import React, { useState, useEffect } from 'react';
import {
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
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { token, API_SERVER } from '../../../helper/variable';

const CreateRekening = (props) => {
  const [dataBank, setDataBank] = useState([]);
  const [ownerName, setOwnerName] = useState('')
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('');
  const [bankId, setBankId] = useState(0);
  const timeout = 300;
  const fadeIn = true;
  const collapse = true;

  const ca = token
  const base64Url = ca.split('.')[1];
  const decodedToken = JSON.parse(window.atob(base64Url));

  let url = '';
  if(decodedToken.group === 1){
    url = 'bank'
  }
  if(decodedToken.group === 3){
    url = 'bank-operational'
  }

  useEffect(() => {
    axios.get(`${API_SERVER}/${url}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => setDataBank(res.data.values))
  }, [url])

  const success = () => {
    toast.success("Bank berhasil ditambahkan", {
      onClose: () => window.location.href="/rekening",
      autoClose: 2000
    })
  }

  const error = message => {
    toast.error(`${message}`,{
      onClose: () => window.location.reload(),
      autoClose: 2000
    })
  }

  const submitData = async (e) => {
    e.preventDefault();
    const ca = token
    const base64Url = ca.split('.')[1];
    const decodedToken = JSON.parse(window.atob(base64Url));

    let url2 = '';
    if(decodedToken.group === 1){
      url2 = 'rekening-admin'
    }
    if(decodedToken.group === 3){
      url2 = 'rekening-operational'
    }

    try {
      const result = await axios.post(`${API_SERVER}/${url2}`, {
        name: ownerName,
        number: number,
        bankId: bankId,
        active: status
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if(result.status === 200 && result.data.status === 'OK'){
        success();
      } else if(result.data.message === 'Rekening has been created') {
        error('Rekening has been created');
      } else {
        error('Terdapat kesalahan pada server')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Row>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
        <Col xs="9">
          <Fade timeout={timeout} in={fadeIn}>
            <Card>
              <CardHeader>
                <i className="fa fa-edit"></i>Create Bank
              </CardHeader>
              <Collapse isOpen={collapse} id="collapseExample">
                <CardBody>
                  <Form onSubmit={submitData} className="form-horizontal">
                    <FormGroup>
                      <Label htmlFor="appendedInput">Nama Pemilik Rekening</Label>
                      <div className="controls">
                        <InputGroup>
                          <Input onChange={e => setOwnerName(e.target.value)} value={ownerName} size="16" type="text" required />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="appendedInput">Nomor Rekening</Label>
                      <div className="controls">
                        <InputGroup>
                          <Input onChange={e => setNumber(e.target.value)} value={number} size="16" type="number" required />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleSelect">Bank</Label>
                      <div className="controls">
                      <Input onChange={e => setBankId(e.target.value)} type="select" name="status" id="exampleSelect">
                      <option disabled selected>Pilih Bank</option>
                      {dataBank.map((item, index) => {
                        return(
                          <>
                          <option key={index} value={item.id}>{item.name}</option>
                          </>
                        )
                      })}
                      </Input>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect">Status</Label>
                      <Input onChange={e => setStatus(e.target.value)} type="select" name="status" id="exampleSelect">
                      <option disabled selected>Status</option>
                        <option value="1">Active</option>
                        <option value="0">Non Active</option>
                      </Input>
                    </FormGroup>
                    <div className="form-actions">
                      <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Submit</Button>
                      <Button onClick={() => window.location.reload()} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                    </div>
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

export default CreateRekening;
