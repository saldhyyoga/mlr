import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import CustomToolbar from './CustomToolBar';
import CustomFooter from './CustomFooter';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Bank.css';
import { token, API_SERVER } from '../../../helper/variable';

export default function Banks (props){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [modalDelete, setModalDelete] = useState(false);

    const ca = token
    const base64Url = ca.split('.')[1];
    const decodedToken = JSON.parse(window.atob(base64Url));
    let url = '';
    if(decodedToken.group === 1){
      url = 'bank'
    }
    if(decodedToken.group === 3){
      url = 'bank-operational'
    }
    useEffect(() => {
      let result;
      axios
        .get(`${API_SERVER}/${url}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        })
        .then(response =>{
          result = response.data.values;
          setData(result)
        })
        .catch(err => console.log(err))
    }, [url]);


    useEffect(() => {
      let result
      axios.get(`${API_SERVER}/${url}?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        result = response.data.values;
        setData(result)
      })
    }, [url,page])

    // const toggleDelete = () => setModalDelete(!modalDelete);
    const buttonAdd = () => setPage(page + 1)
    const buttonSubstract = () => setPage(page - 1)
    const toggleDelete = () => setModalDelete(!modalDelete);

    const success = message => {
      toast.success(`${message}`, {
        onClose: () => window.location.href="/bank",
        autoClose: 1000
      })
    }

    const error =message => {
      toast.error(`${message}`,{
        autoClose: 1000
      })
    }

    const modalDeleteUser = item => {
      return(
        <>
          <Modal isOpen={modalDelete} toggle={toggleDelete}>
            <ModalHeader toggle={toggleDelete}>Delete Merchant</ModalHeader>
            <ModalBody>
              Apakah anda yakin akan menghapus data ini?
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => deleteDataUser(item)}>Delete</Button>{' '}
              <Button color="secondary" onClick={toggleDelete}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </>
      )
    }

    const deleteDataUser = async item => {
      try {
        const result = await axios.delete(`${API_SERVER}/${url}/${item}`, {
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

    const colums = ["Code Bank", "Bank Name", "Status", "Action"];
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
            title={"Data Bank"}
            options={options}
            columns={colums}
            data={data.map((item,index) => {
              return [
                  item.code,
                  item.name,
                  item.active === false ? 'Not Active' : 'Active',
                  <>
                    <Link to={"/edit-bank/"+item.id}><Button size="sm" color="primary" style={{marginRight: 5}}>Edit</Button></Link>
                    <Button onClick={toggleDelete} color="danger" size="sm">Delete</Button>
                    {modalDeleteUser(item.id)}
                  </>
              ]
            })}
          />
        </MuiThemeProvider>
      </div>
  )
}
