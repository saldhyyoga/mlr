import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import CustomToolbar from './CustomToolBar';
import CustomFooter from './CustomFooter';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Group.css';

import { token, API_SERVER } from '../../../helper/variable';

export default function Groups (props){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [modalDelete, setModalDelete] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [editData, setEditData] = useState('');

    useEffect(() => {
      let result;
      axios
        .get(`${API_SERVER}/groups`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        })
        .then(response =>{
          console.log(response.data.values)
          result = response.data.values;
          setData(result)
        })
        .catch(err => console.log(err))
    }, []);

    useEffect(() => {
      let result
      axios.get(`${API_SERVER}/groups?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        result = response.data.values;
        setData(result)
      })
    }, [page])

    // const toggleDelete = () => setModalDelete(!modalDelete);
    const buttonAdd = () => setPage(page + 1)
    const buttonSubstract = () => setPage(page - 1)
    const toggleDelete = () => setModalDelete(!modalDelete);
    const toggleEdit = () => setModalEdit(!modalEdit);

    const success = message => {
      toast.success(`${message}`, {
        onClose: () => window.location.href="/groups",
        autoClose: 1000
      })
    }

    const error =message => {
      toast.error(`${message}`,{
        autoClose: 1000
      })
    }

    const editDataGroup = item => {
      axios.put(`${API_SERVER}/groups/${item}`,{
        name: editData
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(result => {
        setModalEdit(false);
        if(result.data.data){
          success(`Data berhasil diubah`);
        } else{
          error(`Terdapat kesalahan pada server`)
        }
      }).catch(error => console.log(error))
    }

    const modalEditGroup = item => {
      return(
        <div>
          <Modal isOpen={modalEdit} toggle={toggleEdit}>
            <ModalHeader toggle={toggleEdit}>Edit User Group</ModalHeader>
            <ModalBody>
              <>Add Group Data</>
              <Input onChange={e => setEditData(e.target.value)} value={editData} name="group" type="text" required />
            </ModalBody>
            <ModalFooter>
            <Button color="primary" disabled={editData === '' ? true : false}  onClick={() => editDataGroup(item)}>Edit Data</Button>{' '}
            <Button color="secondary" onClick={toggleEdit}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      )
    }

    const modalDeleteGroup = item => {
      return(
        <>
          <Modal isOpen={modalDelete} toggle={toggleDelete}>
            <ModalHeader toggle={toggleDelete}>Delete Group</ModalHeader>
            <ModalBody>
              Apakah anda yakin akan menghapus data ini?
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => deleteDataGroup(item)}>Delete</Button>{' '}
              <Button color="secondary" onClick={toggleDelete}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </>
      )
    }

    const deleteDataGroup = async item => {
      try {
        const result = await axios.delete(`${API_SERVER}/groups/${item}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setModalDelete(!modalDelete)
        if(result.data.status === "OK" ){
          success(`Data berhasil dihapus`)
        }else{
          error(`Terdapat kesalahan pada server`)
        }
      } catch (error) {
        console.log(error)
      }
    }

    const getMuiTheme = () => createMuiTheme({
      overrides: {
        MuiTableCell: {
        },
        MUIDataTableBodyRow: {
          root: {
            '&:nth-child(odd)': {
              backgroundColor: 'rgba(0,0,0,.05)'
            }
          }
        },
        MUIDataTableBodyCell: {
          root: {
          }
        }
      }
    })

    const colums = ["ID", "Group Name", "Action"];
    const options = {
      search: false,
      filterType: "dropdown",
      print: false,
      download: false,
      responsive: 'scroll',
      selectableRows: false,
      customToolbar: () => {
        return (
          <CustomToolbar success={success} error={error} />
        );
      },
      customFooter: () => {
        return(
          <CustomFooter page={page} add={buttonAdd} substract={buttonSubstract} />
        )
      }
    }

  return (
      <div className="animated fadeIn" style={{marginBottom: 30, marginRight: 20}}>
        <ToastContainer position={toast.POSITION.TOP_CENTER}/>
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"User Groups"}
            options={options}
            columns={colums}
            data={data.map((item,index) => {
              return [
                  item.id,
                  item.name,
                  <div style={{display:'flex', flexDirection:'row'}}>

                    <Button onClick={toggleEdit} size="sm" color="primary" style={{marginRight:5}}>Edit</Button>
                    {modalEditGroup(item.id)}
                    <Button onClick={toggleDelete} color="danger" size="sm">Delete</Button>
                    {modalDeleteGroup(item.id)}
                  </div>
              ]
            })}
          />
        </MuiThemeProvider>
      </div>
  )
}
