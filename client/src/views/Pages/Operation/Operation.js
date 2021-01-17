import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import CustomToolbar from './CustomToolBar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { token, API_SERVER } from '../../../helper/variable';

export default function Employee (props){
    const [data, setData] = useState([]);
    const [modalDelete, setModalDelete] = useState(false);

    useEffect(() => {
      let result;
      axios
        .get(`${API_SERVER}/users`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        })
        .then(response =>{
          result = response.data.data;
          setData(result)
        })
        .catch(err => console.log(err))
    }, []);

    const toggle = () => setModalDelete(!modalDelete);

    const success = message => {
      toast.success(`${message}`, {
        onClose: () => window.location.href="/operational",
        autoClose: 2000
      })
    }

    const error =message => {
      toast.error(`${message}`,{
        onClose: () => window.location.href="/operational",
        autoClose: 2000
      })
    }

    const deleteDataUser = async item => {
      try {
        setModalDelete(!modalDelete);
        const result = await axios.delete(`${API_SERVER}/users/${item}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if(result.data.status === "OK"){
          success('Data berhasil dihapus');
        } else {
          error('Data gagal dihapus, terdapat kesalahan pada server');
        }
      } catch (error) {
        console.log(error);
      }
    }

    const modalDeleteUser = item => {
      return(
        <>
          <Modal isOpen={modalDelete} toggle={toggle}>
            <ModalHeader toggle={toggle}>Delete Merchant</ModalHeader>
            <ModalBody>
              Apakah anda yakin akan menghapus data ini?
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => deleteDataUser(item)}>Delete</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </>
      )
    }

    const getMuiTheme = () => createMuiTheme({
      overrides: {
        MuiTableCell: {
          head: {
            '&:nth-child(1)': {
              width: '10px'
            },
            '&:nth-child(5)': {
              width: '220px'
            }
          }
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

    const colums = ["Role","Username/Email", "Action"];
    const options = {
      search: false,
      filterType: "dropdown",
      print: false,
      download: false,
      responsive: 'scroll',
      selectableRows: false,
      customToolbar: () => {
        return (
          <CustomToolbar />
        );
      }
    }

    console.log(data)
  return (
      <div className="animated fadeIn" style={{marginBottom: 30, marginRight: 20}}>
        <ToastContainer position={toast.POSITION.TOP_CENTER}/>
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Data User (Operation)"}
            options={options}
            columns={colums}
            data={data.map((item,index) => {
              return [
                  item.group_id === 1 ? 'Admin' : 'Operational',
                  item.username,
                  <>
                    <Link to={"/user-operational/"+item.id}><Button size="sm" color="primary" style={{marginRight: 5}}>Edit</Button></Link>
                    <Button size="sm" color="danger" onClick={toggle}>Delete</Button>
                    {modalDeleteUser(item.id)}
                  </>
              ]
            })}
          />
        </MuiThemeProvider>
      </div>
  )
}
