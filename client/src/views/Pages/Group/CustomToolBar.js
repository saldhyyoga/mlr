import React, { useState } from 'react';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input, Modal,
ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import axios from 'axios';
import Cookie from 'js-cookie';

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState('');
  const token = Cookie.get('authToken');
  const { success, error} = props;

  const toggle = () => setOpen(!dropdownOpen);
  const toogleAdd = () => setModal(!modal);

  const addData = () => {
    axios.post(`http://localhost:5000/groups`, {
      name: data
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      setModal(false);
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

  const modalAdd = () => {
    return(
      <div>
        <Modal isOpen={modal} toggle={toogleAdd}>
          <ModalHeader toggle={toogleAdd}>Add User Group</ModalHeader>
          <ModalBody>
            <>Add Group Data</>
            <Input onChange={e => setData(e.target.value)} value={data} name="group" type="text" required />
          </ModalBody>
          <ModalFooter>
          <Button color="primary" disabled={data === '' ? true : false}  onClick={addData}>Add Data</Button>{' '}
          <Button color="secondary" onClick={toogleAdd}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{backgroundColor:'white', border: 'none'}} caret>
      <Tooltip title={"Tambah Data User (Operation)"}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </DropdownToggle>
      <DropdownMenu style={{marginLeft: -80}}>
        <DropdownItem onClick={toogleAdd} >Tambah Data Group</DropdownItem>
        {modalAdd()}
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;

