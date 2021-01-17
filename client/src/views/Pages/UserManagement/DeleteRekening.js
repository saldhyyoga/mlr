import React, { useState } from 'react';
import {Col, Modal, ModalHeader, ModalBody, ModalFooter, Button, Input} from 'reactstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { API_SERVER, token } from '../../../helper/variable';

import { success, error} from '../../../functions/toast';


export default function DeleteRekening(props) {
  const id = parseInt(props.id)

  const deleteRekeningMerchant = () => {
    axios.post(`${API_SERVER}/rekening-merchant/delete/${id}`, {
      rekening_id: parseInt(props.item)
    }, {
      headers: {
        Authorization : `Bearer ${token}`
      }
    }).then(result => {
      if(result.data.data){
        success('Rekening berhasil dihapus', `/user/edit/${id}`)
      }
      if(result.data.status === "ERROR"){
        error('Terdapat kesalahan pada server')
      }
      props.toggle()
    })
    .catch(error => console.log(error))
  }


  return (
    <div>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Delete Rekening Merchant</ModalHeader>
        <ModalBody>
          <Col>
            Apakah anda yakin menghapus rekening ini pada merchant? {props.item}
          </Col>
        </ModalBody>
        <ModalFooter>
          <Button onClick={deleteRekeningMerchant} color="primary">Submit</Button>{' '}
          <Button color="secondary" onClick={props.toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
