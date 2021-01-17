import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import CustomToolbar from './CustomToolBar';
import CustomFooter from '../../../components/CustomFooter';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input } from 'reactstrap';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { token, API_SERVER } from '../../../helper/variable';
import { FormatRupiah } from '../../../functions/currency';

export default function Transaction (props){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [modal, setModal] =useState(false);
    const [status, setStatus] = useState('');
    const [clickFilter, setClickFilter] = useState(false);
    const [filterBy, setFilterBy] = useState('');
    const [filterValue, setFilterValue] = useState('');

    const ca = token
    const base64Url = ca.split('.')[1];
    const decodedToken = JSON.parse(window.atob(base64Url));
    let url = '';

    if(decodedToken.group === 1){
      url = `${API_SERVER}/transaction?page=${page}`
    }
    if(decodedToken.group === 3){
      url = `${API_SERVER}/transaction-operational?page=${page}`
    }

    if(clickFilter){
      url = `${API_SERVER}/filter-transaction?filterBy=${filterBy}&value=${filterValue}`
    }

    useEffect(() => {
      let result;
      axios
        .get(url, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
          console.log(response.data)
          if(response.data.data.page){
            result = response.data.data.values
          }
          if(!response.data.data.page){
            result = [response.data.data]
          }
          if(response.data.data === 'Data not found'){
            result = []
          }

          setData(result)
        })
        .catch(err => console.log(err))
    }, [page, url]);

    const buttonAdd = () => setPage(page + 1)
    const buttonSubstract = () => setPage(page - 1)
    const toggle = () => setModal(!modal);
    const addFilterBy = (item) => setFilterBy(item);
    const addFilterValue = (item) => setFilterValue(item);
    const addFilterTrue = () => setClickFilter(true);

    const success = message => {
      toast.success(`${message}`, {
        onClose: () => window.location.href="/transactions",
        autoClose: 1000
      })
    }

    const error =message => {
      toast.error(`${message}`,{
        autoClose: 1000
      })
    }

    const dateTime = (item) => {
      if(item){
        return `${item.slice(0,10)} ${item.slice(11,19)}`
      }
    }

    const iterateData = () => {
      if(data !== undefined || data !== null){
        return data.map((item, index) => {
          return[
            item.ref_id,
            item.bill_id,
            FormatRupiah(item.amount),
            FormatRupiah(item.admin_fee),
            item.status,
            item.params.map((item,index) => {
              return(
                <div key={index} >
                  {item.key}{' '}
                  {item.value}
                </div>
              )
            }),
            item.ref_id2,
            dateTime(item.date_time),
            item.merchant.name,
            item.rekening.number,
            item.rekening.name,
            item.subscribe_id,
            item.name,
            <>
              <Button key={index} size="md" color="success" onClick={toggle}>Update</Button>
              {updateTransaction(item.id)}
            </>
          ]
        })
      }
    }

    const updateData = item => {
      axios.put(`${API_SERVER}/transaction/${item}`, {
        status: status
      },{
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(result => {
        setModal(!modal);
        if(result.data.data.length === 1){
          success(`Data berhasil diupdate`);
        } else {
          error(`Gagal update data, terdapat kesalahan pada server`);
        }
      })
      .catch(error => console.log(error))
    }

    const updateTransaction = item => {
      return(

        <>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Transaction</ModalHeader>
            <ModalBody>
              <div>Update Status Transaction</div>
              <div>
                <Input onChange={e => setStatus(e.target.value)} type="select" name="select">
                  <option value="inquiry">Inquiry</option>
                  <option value="reversal">Reversal</option>
                  <option value="paid">Paid</option>
                  <option value="expired">Expired</option>
                </Input>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={() => updateData(item)}>Update Data</Button>{' '}
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
    // ["Ref_ID", "Bill_ID", "Amount", "Admin Fee", "Status", "Subscriber_ID", "Name", "Params", "Settlement_Date", "CreatedAt", "Status Message"]
    const colums = ["Ref_ID", "Bill_ID", "Amount", "Admin_Fee", "Status", "Params", "Ref_ID2", "Date_Time", "Merchant_Name", "Rekening Number", "Rekening_Name", "Subscriber_ID", "Name","Action", "Status_Message"];
    const options = {
      search: false,
      filterType: "dropdown",
      print: false,
      download: false,
      responsive: 'scroll',
      rowsPerPage: 15,
      selectableRows: false,
      rowsPerPageOptions: [10,25,50,100],
      customToolbar: () => {
        return (
          <CustomToolbar
          addFilterBy={addFilterBy}
          addFilterValue={addFilterValue}
          addFilterTrue={addFilterTrue}
          />
        );
      },
      customFooter: (rowsPerPage) => {
        return(
          <CustomFooter
            page={page}
            add={buttonAdd}
            substract={buttonSubstract}
            rowsPerPage={rowsPerPage}
          />
        )
      }
    }

  return (
      <div className="animated fadeIn" style={{marginBottom: 30, marginRight: 20}}>
        <ToastContainer position={toast.POSITION.TOP_CENTER}/>
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Data Transaction"}
            options={options}
            columns={colums}
            data={iterateData()}
          />
        </MuiThemeProvider>
      </div>
  )
}
