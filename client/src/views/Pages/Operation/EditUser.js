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

const EditUserOperation = (props) => {
  const timeout = 300;
  const fadeIn = true;
  const collapse = true;
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(0)
  const [modalDelete, setModalDelete] = useState(false);
  const id = props.match.params.id;

  useEffect(() => {
    axios.get(`${API_SERVER}/merchant/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      if (response.data.status === 'ERROR') window.location.href='/404'
      setUsername(response.data.data.name)
      setPhone(response.data.data.phone)
      setStatus(response.data.data.active)
    })
    .catch(error => console.log(error));
  }, [id])

  const success = message => {
    toast.success(`${message}`, {
      onClose: () => window.location.href="/user-management",
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
      const result = await axios.put(`${API_SERVER}/merchant/${id}`,{
          name: username,
          phone: phone.toString(),
          active: status
        },{
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if(result.data.status === 'OK' && result.data.data.length !== 0){
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
      const result = await axios.delete(`${API_SERVER}/merchant/${id}`, {
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
          <ModalHeader toggle={toggleDelete}>Delete Merchant</ModalHeader>
          <ModalBody>
            Apakah anda yakin akan menghapus merchant: {username} dengan id: {props.match.params.id} ini?
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
                <i className="fa fa-edit"></i>Edit Data User
              </CardHeader>
              <Collapse isOpen={collapse} id="collapseExample">
              <Form onSubmit={submitData} className="form-horizontal">
                <CardBody>
                    <FormGroup>
                      <Label htmlFor="appendedInput">Username</Label>
                      <div className="controls">
                        <InputGroup>
                          <Input onChange={e => setUsername(e.target.value)} value={username} name="username" id="appendedInput" size="16" type="text" required />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="appendedInput">Phonenumber</Label>
                      <div className="controls">
                        <InputGroup>
                          <Input onChange={e => setPhone(e.target.value)} value={phone} name="phonenumber" id="appendedInput" size="16" type="number" required />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect">Status saat ini : {status === true ? 'Active' : 'Non Active'} </Label>
                      <Input onChange={e => setStatus(e.target.value)} type="select" name="status" id="exampleSelect">
                        <option selected disabled>Ubah Status</option>
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
                </CardBody>
                <CardFooter>
                    <Button type="submit" size="md" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Submit</Button>
                  </CardFooter>
                </Form>
              </Collapse>
            </Card>
          </Fade>
        </Col>
      </Row>
    </div>
  )
}

export default EditUserOperation;
