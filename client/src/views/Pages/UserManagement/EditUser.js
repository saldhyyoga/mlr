import React, { useState, useEffect, useCallback } from 'react';
import {
  Alert,
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
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Table
} from 'reactstrap';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import { token, API_SERVER } from '../../../helper/variable';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';
import { FcCancel } from 'react-icons/fc';

import AddRekeningModal from './AddRekening';
import DeleteRekening from './DeleteRekening';
import { success as success2, error as error2 } from '../../../functions/toast';

const EditUser = (props) => {
  const timeout = 300;
  const fadeIn = true;
  const collapse = true;
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState(false)
  const [bank, setBank] = useState([])
  const [rekeningData, setRekeningData] = useState([])
  const [editRekening, setEditRekening] = useState(false);
  const [indexEdit, setIndexEdit] = useState(null);
  const [merchantRate, setMerchantRate] = useState(0);
  const [rekeningId, setRekeningId] = useState(null);
  const [modal, setModal] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalDeleteRekening, setModalDeleteRekening] = useState(false);
  const [submittingEdit, setSubmittingEdit] = useState(false)
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

    const getRekeningMerchant = () => {
      try {
        axios.get(`${API_SERVER}/rekening-merchant/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(result => {
          console.log(result.data);
        setRekeningData(result.data.data);
        })
      } catch (error) {
        console.log(error)
      }
    }
    getRekeningMerchant()
    if(submittingEdit){
      getRekeningMerchant()
    }

    axios.get(`${API_SERVER}/rekening-admin`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      console.log(result.data.values)
      setBank(result.data.values)
    })

  }, [id, submittingEdit])

  const editBank = (rekening_id)  => {
    axios.put(`${API_SERVER}/rekening-merchant/edit/${id}`,{
      merchant_rate: parseInt(merchantRate),
      rekening_id: parseInt(rekening_id),
      new_rekening_id: parseInt(rekeningId)
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      if(result.data.data){
        success2('Rekening berhasil diubah')
      }
      if(result.data.messages === 'Rekening sudah ada'){
        error2('Rekening sudah ada')
      }
    })
    .catch(error => console.log(error))
  }

  console.log(bank)

  const toggle = () => setModal(!modal);
  const toggleDelete = () => setModalDelete(!modalDelete);
  const toggleDeleteRekening = () => setModalDeleteRekening(!modalDeleteRekening)

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

  const deleteData = () => {
    return(
      <div>
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
      </div>
    )
  }

  const buttonEdit = (rekening_id, rekeningId) => {
    return(
      <>
        <Button onClick={ () => {
          editBank(rekening_id)
          setIndexEdit(null)
          setSubmittingEdit(true)
          setMerchantRate(0)
          }}  color="success" size="sm"><FaSave /></Button>
      </>
    )
  }

  const showEditRekening = (item,index) => {
    console.log(item)
    return(
      <>
        {indexEdit === index ?
        <tr key={index}>
        <td>{item.rekening.bank.name}</td>
        <td>
          <Input onChange={e => setRekeningId(e.target.value)} style={{width: 200}} type="select">
            <option selected disabled>Pilih Rekening</option>
            {bank.map((item,index) => {
              console.log(item)
              return(
                <>
                  <option value={item.id} key={index}>{item.name} {item.number}</option>
                </>
              )
            })}
          </Input>
        </td>
        <td>
          <div style={{display:'flex', flexDirection: 'row'}}>
            <Input onChange={e => setMerchantRate(e.target.value)} style={{width:80}} type="text" value={merchantRate} />
          </div>
        </td>
        <td>
          <Col style={{marginLeft: -18, display: 'flex', flexDirection: 'row', marginRight: -10}}>
            {buttonEdit(item.rekening_id)}
            <Button onClick={e => setIndexEdit(null)} style={{marginLeft:10}} color="primary" size="sm"><FcCancel /></Button>
          </Col>
        </td>
      </tr> :
      <tr key={index}>
        <td>{item.rekening.bank.name}</td>
        <td>{item.rekening.name}</td>
        <td>
          <Col style={{display:'flex', flexDirection: 'row'}}>
          {item.merchant_rate}
          </Col>
        </td>
        <td>
          <Col style={{marginLeft: -18, display: 'flex', flexDirection: 'row', marginRight: -10}}>
            <Button onClick={e => {
              setEditRekening(!editRekening)
              setIndexEdit(index)
              setSubmittingEdit(false)
            }}  color="success" size="sm"><FaEdit /></Button>
            <Button onClick={toggleDeleteRekening} style={{marginLeft:5}} color="danger" size="sm"><FaTrash /></Button>
            <DeleteRekening id={id} item={item.rekening_id}  toggle={toggleDeleteRekening} modal={modalDeleteRekening} />
          </Col>
        </td>
      </tr>}
      </>
    )
  }

  return (
    <div>
      <Row>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
        <Col xs="12">
          <Fade timeout={timeout} in={fadeIn}>
            <Card>
            <Form onSubmit={submitData} className="form-horizontal">
              <CardHeader>
                <i className="fa fa-edit"></i>Edit Data Merchant
              </CardHeader>
              <Collapse isOpen={collapse} id="collapseExample">
                <CardBody>
                    <FormGroup>
                      <Label htmlFor="appendedInput">Username</Label>
                        <Col sm="3" style={{marginLeft: -14}}>
                          <Input onChange={e => setUsername(e.target.value)} value={username} name="username" id="appendedInput" type="text" required />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="phonenumber">Phonenumber</Label>
                        <Col sm="3" style={{marginLeft: -14}}>
                          <Input onChange={e => setPhone(e.target.value)} value={phone} name="phonenumber" id="phonenumber" size="16" type="number" required />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect">Status saat ini : {status === true ? 'Active' : 'Non Active'} </Label>
                      <Col sm="3" style={{marginLeft: -14}}>
                        <Input onChange={e => setStatus(e.target.value)} type="select" name="status" id="exampleSelect">
                          <option defaultValue selected disabled>Ubah Status</option>
                        {status === false && <option value="1">Active</option>}
                        {status && <>
                          <option value="1">Active</option>
                          <option value="0">Non Active</option>
                        </>}
                      </Input>
                      </Col>
                    </FormGroup>
                    <Card style={{
                      marginTop: 25
                    }}>
                      <p
                        style={{
                          paddingLeft: 5,
                          marginTop: -10,
                          backgroundColor: 'white',
                          marginLeft: 20,
                          width: 130
                        }}
                      >
                        Merchant Rekening
                      </p>
                      <CardBody style={{marginTop: -15}}>
                      <Button onClick={toggle} color="primary" style={{marginBottom:10}}>Tambah Rekening</Button>

                      <AddRekeningModal id={id} bank={bank} toggle={toggle} modal={modal} />


                      <Table hover bordered striped responsive size="sm">
                        <thead>
                        <tr>
                          <th>Bank</th>
                          <th>Rekening</th>
                          <th>Merchant Rate</th>
                          <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                          {rekeningData.map((item, index) => {
                            return(
                              <>
                                {showEditRekening(item,index)}
                              </>
                            )
                          })}
                        </tbody>
                      </Table>
                      <Alert style={{marginBottom: 10}} color="warning">
                      Tips: Satu bank hanya boleh satu rekening merchant.
                      </Alert>
                      </CardBody>
                    </Card>
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

export default EditUser;
