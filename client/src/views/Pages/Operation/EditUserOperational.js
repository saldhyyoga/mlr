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
  CardFooter
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { token, API_SERVER } from '../../../helper/variable';

// styling
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditUserOperational (props) {
  const timeout = 300;
  const fadeIn = true;
  const collapse = true;
  const [email, setEmail] = useState('');
  const [group, setGroup] = useState('');
  const id = props.match.params.id;
  const [modalDelete, setModalDelete] = useState(false);

  useEffect(() => {
    axios.get(`${API_SERVER}/user-operational/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setEmail(response.data.data.username)
      setGroup(response.data.data.group_id)
    })
    .catch(error => console.log(error));
  }, [id])

  const groupDesc = () => {
    if(group===1){
      return 'Current Group: Administrator'
    }else if(group===3){
      return 'Current Group: Operational'
    }else{
      return 'Current Group: Approval'
    }
  }

  const success = message => {
    toast.success(`${message}`, {
      onClose: () => window.location.href="/operational",
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
    const id = props.match.params.id;
    e.preventDefault();
    try {
      const result = await axios.put(`${API_SERVER}/users/${id}`,{
          username: email,
          group_id: parseInt(group)
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
      const result = await axios.delete(`${API_SERVER}/users/${id}`, {
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
            Apakah anda yakin akan menghapus data ini?
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
            <Form onSubmit={submitData}>
              <CardHeader>
                <i className="fa fa-edit"></i>Edit Data User Operational
              </CardHeader>
              <Collapse isOpen={collapse} id="collapseExample">
                <CardBody>
                <FormGroup>
                    <Label htmlFor="appendedInput">Username</Label>
                      <div className="controls">
                        <InputGroup>
                          <Input onChange={e => setEmail(e.target.value)} value={email} name="email" size="16" type="email" required />
                        </InputGroup>
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect">{groupDesc()}  </Label>
                      <Input onChange={e => setGroup(e.target.value)} type="select" name="group">
                        <option value={1}>Administrator</option>
                        <option value={3}>Operational</option>
                        <option value={4}>Approval</option>
                      </Input>
                    </FormGroup>
                    {/* <div className="form-actions">
                      <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Edit</Button>
                      <Button onClick={toggleDelete} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Delete</Button>
                      {deleteData()}
                    </div> */}
                </CardBody>
                <CardFooter>
                <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Edit</Button>
                      <Button onClick={toggleDelete} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Delete</Button>
                      {deleteData()}
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

export default EditUserOperational;
