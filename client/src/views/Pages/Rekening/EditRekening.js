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
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { token, API_SERVER } from '../../../helper/variable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditRekening = (props) => {
  const timeout = 300;
  const fadeIn = true;
  const collapse = true;
  const [number, setNumber] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [bankId, setBankId] = useState(0);
  const [bankName, setBankName] = useState('');
  const [status, setStatus] = useState('')
  const [modalDelete, setModalDelete] = useState(false);
  const id = props.match.params.id;

  const ca = token
  const base64Url = ca.split('.')[1];
  const decodedToken = JSON.parse(window.atob(base64Url));

  let url = '';
  if(decodedToken.group === 1){
    url = 'rekening-admin'
  }
  if(decodedToken.group === 3){
    url = 'rekening-operational'
  }

  useEffect(() => {
    axios.get(`${API_SERVER}/${url}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.data.status === 'ERROR') window.location.href='/404'
      setOwnerName(response.data.data.name)
      setNumber(response.data.data.number)
      setStatus(response.data.data.active);
      setBankName(response.data.data.bank.name)
      setBankId(response.data.data.bank.id)
      // setData(response.data.data)
    })
    .catch(error => console.log(error));
  }, [id, url])

  const success = message => {
    toast.success(`${message}`, {
      onClose: () => window.location.href="/rekening",
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
          name: ownerName,
          number: number,
          bank_id: bankId,
          active: status
        },{
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if(result.status === 200 && result.data.data.length > 0){
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

  const deleteDataUser = async () => {
    const id = props.match.params.id;
    try {
      const result = await axios.delete(`${API_SERVER}/${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if(result.data.status === "OK" ){
        success(`Data berhasil dihapus`)
      }else{
        error(`Terdapat kesalahan pada server`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const toggleDelete = () => setModalDelete(!modalDelete);

  const deleteData = () => {
    return(
      <>
        <Modal isOpen={modalDelete} toggle={toggleDelete}>
          <ModalHeader toggle={toggleDelete}>Delete Rekening</ModalHeader>
          <ModalBody>
            Apakah anda yakin akan menghapus Rekening ini?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={deleteDataUser}>Delete</Button>{' '}
            <Button color="secondary" onClick={toggleDelete}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }

  return (
    <div>
      <Row>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
        <Col xs="9">
          <Fade timeout={timeout} in={fadeIn}>
            <Card>
              <CardHeader>
                <i className="fa fa-edit"></i>Edit Rekening
              </CardHeader>
              <Collapse isOpen={collapse} id="collapseExample">
                <CardBody>
                  <Form onSubmit={submitData} className="form-horizontal">
                    <FormGroup>
                      <Label htmlFor="bankCode">Nama Pemilik Rekening</Label>
                      <div className="controls">
                        <InputGroup>
                          <Input onChange={e => setOwnerName(e.target.value)} value={ownerName} name="bankCOde" id="bankCode" size="16" type="text" required />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="bankName">Nomor Rekening</Label>
                      <div className="controls">
                        <InputGroup>
                          <Input onChange={e => setNumber(e.target.value)} value={number} name="phonenumber" id="bankName" type="text" required />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="bankName">Nama Bank</Label>
                      <div className="controls">
                        <InputGroup>
                          <Input onChange={e => setBankName(e.target.value)} value={bankName} name="phonenumber" id="bankName" type="text" disabled required />
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
                    <div className="form-actions">
                      <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Edit</Button>
                      <Button onClick={toggleDelete} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Delete</Button>
                      {deleteData()}
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

export default EditRekening;
