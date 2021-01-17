import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import {token, API_SERVER} from '../../../helper/variable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateRekeningMerchant = (props) => {
  const [dataBank, setDataBank] = useState([]);
  const [ownerName, setOwnerName] = useState('')
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('');
  const [bankId, setBankId] = useState(0);
  const timeout = 300;
  const fadeIn = true;
  const collapse = true;

  useEffect(() => {
    axios.get(`${API_SERVER}/readbank`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => setDataBank(res.data.data))
  }, [])

  const success = () => {
    toast.success("Rekening berhasil ditambahkan", {
      onClose: () => window.location.href="/rekening-merchant",
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

    try {
      const result = await axios.post(`${API_SERVER}/rekening-merchant`, {
        name: ownerName,
        number: number,
        bank_id: bankId,
        active: status
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if(result.data.messages === 'Account already exists'){
        error('Rekening sudah ada');
      }
      if(result.data.messages === '1 bank only for 1 account'){
        error('1 bank hanya boleh 1 rekening')
      }
      if(result.data.messages === 'Rekening merchant has been created'){
        success('Rekening berhasil ditambahkan')
      }
    } catch (error) {
      error('Terdapat kesalahan pada server');
      console.log(error)
    }
  }

  return (
    <div>
      <Row>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
        <Col xs="9">
          <Fade timeout={timeout} in={fadeIn}>
          <Alert color="warning">
                Dalam 1 bank hanya boleh membuat 1 rekening.
              </Alert>
            <Card>
              <CardHeader>
                <i className="fa fa-edit"></i>Membuat Rekening Baru
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
                          <Input onChange={e => setNumber(e.target.value)} value={number} size="16" type="number" min="0" required />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="exampleSelect">Bank</Label>
                      <div className="controls">
                      <Input required onChange={e => setBankId(e.target.value)} type="select" name="status" id="exampleSelect">
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
                      <Input required onChange={e => setStatus(e.target.value)} type="select" name="status" id="exampleSelect">
                      <option disabled selected>Status</option>
                        <option value="1">Active</option>
                        <option value="0">Non Active</option>
                      </Input>
                    </FormGroup>
                    <div className="form-actions">
                      <Button onClick={submitData} size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Submit</Button>
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

export default CreateRekeningMerchant;
