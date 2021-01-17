import React, {useState, useEffect} from 'react';
import { Col, Card, CardBody,
    FormGroup, InputGroup, Input, InputGroupAddon, InputGroupText, Button,
    Modal, ModalBody, ModalFooter, ModalHeader, Row
} from 'reactstrap';
import axios from 'axios';
import { token, API_SERVER } from '../../helper/variable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const text = {
    marginTop: 5,
    marginRight: 10,
    marginLeft: -25,
    fontWeight: 'bold'
}

export default function EditProfile() {
    const [data, setData] = useState({});
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [modal, setModal] = useState(false);

    useEffect(() => {
        axios.get(`${API_SERVER}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }).then(result => {
          setName(result.data.data.name)
          setData(result.data.data)
          setPhone(result.data.data.phone)
        })
        .catch(error => console.log(error))
    }, [])

    const toggle = () => setModal(!modal);

    const success = message => {
      toast.success(`${message}`, {
        onClose: () => window.location.href="/profile",
        autoClose: 2000
      })
    }

    const errorvalidation = message => {
      toast.error(`${message}`,{
        onClose: () => window.location.href="/profile",
        autoClose: 2000
      })
    }

    const modalPhone = () => {
      return(
        <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Update Profile</ModalHeader>
          <ModalBody>
            Apakah anda yakin ingin update profile?
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
      const ca = token
      const base64Url = ca.split('.')[1];
      const decodedToken = JSON.parse(window.atob(base64Url));
      let url2 = '';

      if(decodedToken.group === 2){
        url2 = 'updateprofile'
      }
      if(decodedToken.group === 3){
        url2 = 'updateprofile-ops'
      }
      e.preventDefault();
      axios.put(`${API_SERVER}/${url2}`,{
        phone: phone
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(result => {
        setModal(!modal)
        if(result.data.status === "OK"){
          success(`Profile berhasil diupdate`)
        }
        else{
          errorvalidation(`Terdapat kesalahan pada server`)
        }
      }).catch(error => console.log(error))
    }

    return (
      <Row>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
      <Col xl="12" xs="12" md="12" lg="12">
        <Card style={{border:'none'}}>
          <CardBody>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <div style={text}>Username <span style={{color:'red'}}>*</span></div><InputGroupText><i className="fa fa-user"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input value={name} disabled type="text" id="username" name="username" placeholder="Username" autoComplete="name"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <div style={text}>Email <span style={{color:'red'}}>*</span></div>
                  <InputGroupText style={{marginLeft:30}}><i className="fa fa-asterisk"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input value={data.username} disabled type="email" id="email" name="newpassword" placeholder="Email" autoComplete="new password"/>
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                  <div style={text}>Phone <span style={{color:'red'}}>*</span></div>
                  <InputGroupText style={{marginLeft:25}}><i className="fa fa-phone"></i></InputGroupText>
                  </InputGroupAddon>
                  <Input onChange={e => setPhone(e.target.value)} value={phone} type="number" placeholder="Phonenumber" autoComplete="current-password"/>
                </InputGroup>
                {/* {error()} */}
              </FormGroup>
              <FormGroup className="form-actions">
                <center><Button onClick={toggle}  style={{marginTop:10}}  type="submit" size="md" color="success"> <i class="icon-note"></i> Edit Profile</Button></center>
                {modalPhone()}
              </FormGroup>
          </CardBody>
        </Card>
      </Col>
    </Row>
    )
}
