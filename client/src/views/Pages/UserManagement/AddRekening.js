import React, { useState } from 'react';
import {Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Input} from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_SERVER, token } from '../../../helper/variable';

export default function AddRekening(props) {
  const bank = props.bank;
  const [rekeningId, setRekeningId] = useState(null);
  const [merchantRate, setMerchantRate] = useState('');
  const id = props.id;
  console.log(rekeningId)

  const addRekeningMerchant = () => {
    axios.post(`${API_SERVER}/rekening-merchant/add/${id}`, {
      rekening_id: parseInt(rekeningId),
      merchantRate: merchantRate
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(result => {
      if(result.data.status === "OK"){
        success('Rekening berhasil ditambahkan')
      }
      if(result.data.messages === "Satu bank hanya boleh satu rekening"){
        error('Satu bank hanya boleh satu rekening')
      }
      props.toggle()
    })
    .catch(error => console.log(error));
  }

  const success = message => {
    toast.success(`${message}`, {
      autoClose: 2000
    })
  }

  const error = message => {
    toast.error(`${message}`,{
      autoClose: 2000
    })
  }

  return (
    <>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Tambah Rekening Merchant</ModalHeader>
        <ModalBody>
          <Col>
            Rekening
            <Input onChange={e => setRekeningId(e.target.value)} type="select">
              <option selected disabled>Pilih Rekening</option>
              {bank.map((item, index) => {
                return(
                  <>
                    <option value={item.id} key={index}>{item.name} {item.number}</option>
                  </>
                )
              })}
            </Input>
          </Col>
          <Col>
            Merchant Rate
            <Input onChange={e => setMerchantRate(e.target.value)} value={merchantRate} type="number" />
          </Col>
        </ModalBody>
        <ModalFooter>
          <Button onClick={addRekeningMerchant} disabled={rekeningId && merchantRate ? false : true} color="primary">Submit</Button>{' '}
          <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
