import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Input,
  ListGroup,
  ListGroupItem,
  Row,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';
import axios from 'axios';
import Cookie from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserGroup = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editGroup, setEditGroup] = useState('');
  const [createDataModal, setCreateDataModal] = useState(false);
  const [newData, setNewData] = useState('');
  const collapse = true;
  const fadeIn = true;
  const timeout = 300;
  const token = Cookie.get('authToken');

  useEffect(() => {
    axios.get(`http://localhost:5000/groups`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => setData(result.data.data))
  }, [token])

  const success = message => {
    toast.success(`${message}`, {
      onClose: () => window.location.href="/groups",
      autoClose: 2000
    })
  }

  const error = message => {
    toast.error(`${message}`,{
      autoClose: 2000
    })
  }

  const toggle = () => setModal(!modal);
  const deleteToggle = () => setDeleteModal(!deleteModal);
  const createToggle = () => setCreateDataModal(!createDataModal);

  const addData = () => {
    axios.post(`http://localhost:5000/groups`, {
      name: newData
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      setCreateDataModal(false);
      if(result.data.data){
        success(`Data berhasil ditambahkan`)
      } else if(result.data.messages === 'Group already exist'){
        error(`Data sudah ada`)
      } else {
        error(`Terdapat kesalahan pada server`)
      }
    })
    .catch(error => console.log(error))
  }

  const createModal = () => {
    return(
      <div>
      <Modal isOpen={createDataModal} toggle={createToggle}>
        <ModalHeader toggle={createToggle}>Add User Group</ModalHeader>
        <ModalBody>
          <>Add Data</>
          <Input onChange={e => setNewData(e.target.value)} value={newData} name="group" type="text" required />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" disabled={newData === '' ? true : false}  onClick={addData}>Add Data</Button>{' '}
          <Button color="secondary" onClick={createToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    )
  }

  const deleteData = id => {
    axios.delete(`http://localhost:5000/groups/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      setDeleteModal(false)
      if(result.data.data === 1){
        success(`Data berhasil dihapus`);
      } else {
        error(`Terdapat kesalahan pada server`);
      }
    }).catch(error => console.log(error));
  }

  const editData = id => {
    axios.put(`http://localhost:5000/groups/${id}`,{
      name: editGroup
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      setModal(false);
      if(result.data.data){
        success(`Data berhasil diubah`);
      } else{
        error(`Terdapat kesalahan pada server`)
      }
    }).catch(error => console.log(error))
  }

  const showModal = (name,id) => {
    if(editGroup === null){
      error(`Data tidak boleh kosong`)
    }
    return(
      <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit User Group</ModalHeader>
        <ModalBody>
          <>Edit Data</>
          <Input onChange={e => setEditGroup(e.target.value)} value={editGroup} name="group" type="text" required />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" disabled={editGroup === '' ? true : false}  onClick={() => editData(id)}>Edit Data</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    )
  }

  const modalDelete = id => {
    return(
      <div>
      <Modal isOpen={deleteModal} toggle={deleteModal}>
        <ModalHeader toggle={toggle}>Delete Data</ModalHeader>
        <ModalBody>
          Apakah anda yakin akan menghapus data ini?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => deleteData(id)}>Delete</Button>{' '}
          <Button color="secondary" onClick={deleteToggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
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
                <i className="fa fa-edit"></i>Informasi User Group (Role)
              </CardHeader>
              <div style={{marginTop: 10, marginLeft: 25, marginBottom: 10}}>
                <Button color="primary" size="md" onClick={createToggle} >Buat Informasi Group Baru</Button>
                {createModal()}
              </div>
              <Collapse style={{marginTop: -10}} isOpen={collapse} id="collapseExample">
                <CardBody>
                {data.map((item, index) => {
                  return(
                    <>
                      <ListGroup key={index} style={{width: 450}}>
                        <ListGroupItem style={{display:'flex', flexDirection:'row'}}>
                          <div style={{marginRight: 50, width: 250}}>User Group  : {item.name}</div>
                          <Button color="warning" size="sm" style={{marginRight: 10}} onClick={toggle}>Edit</Button>
                          <Button color="danger" size="sm" onClick={deleteToggle}>Delete</Button>
                          {showModal(item.name,item.id)}
                          {modalDelete(item.id)}
                        </ListGroupItem>
                      </ListGroup>
                    </>
                  )
                })}
                </CardBody>
              </Collapse>
            </Card>
          </Fade>
        </Col>
      </Row>
    </div>
  )
}

export default UserGroup;
