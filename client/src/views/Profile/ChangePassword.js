import React, {useState} from 'react';
import {
Col,
Card,
CardBody,
FormGroup,
InputGroup,
Input,
InputGroupAddon,
InputGroupText,
Button,
Modal,
ModalHeader,
ModalBody,
ModalFooter
} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { token, API_SERVER } from '../../helper/variable';
import axios from 'axios';
import CryptoJS from 'crypto-js';

const text = {
    marginTop: 5,
    marginRight: 10,
    marginLeft: -35,
    fontWeight: 'bold',
    width: 150
}

export default function ChangePassword() {
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal);

    const error = () => {
      let message
      if(newPassword !== confirmPassword){
        message = <p style={{color: 'red'}}>Password harus sama</p>
      }
      if(newPassword.length <8 && confirmPassword.length < 8){
        message = <p style={{color: 'red'}}>Password minimal 8 karakter</p>
      }
      if(password === newPassword){
        message = <p style={{color: 'red'}}>Password tidak boleh sama dengan password sekarang</p>
      }
      return message
    }

    const success = message => {
      toast.success(`${message}`, {
        onClose: () => window.location.href="/dashboard",
        autoClose: 3000
      })
    }

    const errorvalidation = message => {
      toast.error(`${message}`,{
        onClose: () => window.location.href="/profile",
        autoClose: 3000
      })
    }

    const modalPassword = () => {
      return(
        <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Change Password</ModalHeader>
          <ModalBody>
            Apakah anda yakin ingin mengganti password
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={submitData}>Submit Data</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      )
    }

    const submitData = e => {
      e.preventDefault();
      const ca = token
      const base64Url = ca.split('.')[1];
      const decodedToken = JSON.parse(window.atob(base64Url));
      let url = '';

      if(decodedToken.group === 3){
        url = '/changepassword/operational'
      }
      if(decodedToken.group === 2){
        url = '/changepassword'
      }

      const encryptPasswordMD5 = CryptoJS.MD5(password);
      const encryptPasswordSHA1 = CryptoJS.SHA1(encryptPasswordMD5.toString());
      const encryptNewPasswordMD5 = CryptoJS.MD5(newPassword);
      const encryptNewPasswordSHA1 = CryptoJS.SHA1(encryptNewPasswordMD5.toString());

      axios.post(`${API_SERVER}${url}`,{
        password: encryptPasswordSHA1.toString(),
        newPassword: encryptNewPasswordSHA1.toString()
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(result => {
        setModal(!modal)
        if(result.data.status === "OK"){
          success(`Password berhasil diganti`)
        }
        if(result.data.messages === "Salah password"){
          errorvalidation(`Password salah`)
        }
      }).catch(error => console.log(error))
    }

    return (
      <Col>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
        <Card style={{border:'none'}}>
          <CardBody>
              <FormGroup style={{width: '320px'}}>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <div style={text}>Current Password <span style={{color:'red'}}>*</span></div><InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input onChange={e => setPassword(e.target.value)} type="password" id="currentpassword" name="currentpassword" placeholder="Current Password" autoComplete="name"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <div style={text}>New Password <span style={{color:'red'}}>*</span></div><InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input onChange={e => setNewPassword(e.target.value)} type="password" id="newpassword" name="newpassword" placeholder="New Password" autoComplete="new password"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <div style={text}>Retype New Password <span style={{color:'red'}}>*</span></div><InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input onChange={e => setConfirmPassword(e.target.value)} type="password" id="password1" name="password1" placeholder="Retype New Password" autoComplete="current-password"/>
                </InputGroup>
                {error()}
                {modalPassword()}
              </FormGroup>
              <FormGroup className="form-actions">
                <center><Button onClick={toggle} disabled={newPassword === confirmPassword && newPassword !== '' && confirmPassword !== '' ? false : true} type="submit" size="xl" color="success"><i class="icon-note"></i> Change Password</Button></center>
              </FormGroup>
          </CardBody>
        </Card>
      </Col>

    )
}
