import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
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
import { Redirect } from 'react-router-dom'
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { token, API_SERVER } from '../../../helper/variable';

const EditBank = (props) => {
  const timeout = 300;
  const fadeIn = true;
  const collapse = true;
  const [bankCode, setBankCode] = useState('');
  const [bankName, setBankName] = useState('');
  const [status, setStatus] = useState('')
  // const [modalDelete, setModalDelete] = useState(false);
  const id = props.match.params.id;

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
    axios.get(`${API_SERVER}/${url}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.data.status === 'ERROR') window.location.href='/404'
      setBankCode(response.data.data.code)
      setBankName(response.data.data.name)
      setStatus(response.data.data.active)
    })
    .catch(error => console.log(error));
  }, [url,id])

  const success = message => {
    toast.success(`${message}`, {
      onClose: () => window.location.href="/bank",
      autoClose: 3000
    })
  }

  const error =message => {
    toast.error(`${message}`,{
      autoClose: 3000
    })
  }

  const submitData = async (e) => {
    const id = props.match.params.id;
    e.preventDefault();
    try {
      const result = await axios.put(`${API_SERVER}/${url}/${id}`,{
          code: bankCode,
          name: bankName,
          active: status
        },{
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if(result.status === 200){
        success('Data berhasil diedit')
      }else if(result.status === 400){
        return <Redirect to="/404" />
      }
      else{
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
            <Form onSubmit={submitData} className="form-horizontal">
              <CardHeader>
                <i className="fa fa-edit"></i>Edit Data Bank
              </CardHeader>
              <Collapse isOpen={collapse} id="collapseExample">
                <CardBody>
                    <FormGroup>
                      <Label htmlFor="bankCode">Kode Bank</Label>
                      <div className="controls">
                        <InputGroup>
                          <Input onChange={e => setBankCode(e.target.value)} value={bankCode} name="bankCOde" id="bankCode" size="16" type="text" required />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="bankName">Nama Bank</Label>
                      <div className="controls">
                        <InputGroup>
                          <Input onChange={e => setBankName(e.target.value)} value={bankName} name="phonenumber" id="bankName" type="text" required />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect">Status saat ini: {status === false ? 'Non Active': 'Active'} </Label>
                      <Input onChange={e => setStatus(e.target.value)} type="select" name="status" id="exampleSelect">
                      <option disabled selected>Ubah Status</option>
                      {status === false && <option value="1">Active</option>}
                      {status && <>
                        <option value="1">Active</option>
                        <option value="0">Non Active</option>
                      </>}
                      </Input>
                    </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}>Edit Data</Button>
                  {/* <Button onClick={toggleDelete} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Delete</Button>
                  {deleteData()} */}
                </CardFooter>
              </Collapse>
            </Form>
            </Card>
          </Fade>
        </Col>
      </Row>
    </div>
  )
}

export default EditBank;
