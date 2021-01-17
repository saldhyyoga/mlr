import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import CustomToolbar from './CustomToolBar';
import CustomFooter from './CustomFooter';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { token, API_SERVER } from '../../../helper/variable';
import { FormatRupiah } from '../../../functions/currency'

export default function Transaction (props){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [clickFilter, setClickFilter] = useState(false);
    const [filterBy, setFilterBy] = useState('');
    const [filterValue, setFilterValue] = useState('');
    let url;
    if(clickFilter){
      url = `${API_SERVER}/filter-transaction-merchant?filterBy=${filterBy}&value=${filterValue}`
    }else{
      url = `${API_SERVER}/transaction-merchant?page=${page}`
    }

    useEffect(() => {
      let result;
      axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        if(response.data.page){
          result = response.data.values
        }
        if(response.data.data){
          result = [response.data.data]
        }
        if(response.data.data === 'Data not found'){
          result = []
        }

        setData(result)
      })
      .catch(error => console.log(error))
    }, [page, url]);

    const buttonAdd = () => setPage(page + 1)
    const buttonSubstract = () => setPage(page - 1)
    const addFilterBy = (item) => setFilterBy(item);
    const addFilterValue = (item) => setFilterValue(item);
    const addFilterTrue = () => setClickFilter(true);

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

    const dateTime = (item) => {
      if(item){
        return `${item.slice(0,10)} ${item.slice(11,19)}`
      }
    }

    // const statusMessage = (status) => {
    //   if(!status){
    //     return ''
    //   }else{
    //     return status
    //   }
    // }

    const iterateData = () => {
      if(data !== undefined && data !== null ){
        return data.map((item, index) => {
          return[
            item.ref_id,
            item.bill_id,
            FormatRupiah(item.amount),
            FormatRupiah(item.admin_fee),
            item.status,
            item.subscribe_id,
            item.name,
            item.params.map((item,index) => {
              return(
                <div key={index}>
                  {item.key}{' '}
                  {item.value}
                </div>
              )
            }),
            dateTime(item.date_time),
            dateTime(item.createdAt)
          ]
        })
      }
    }

    const colums = ["Ref_ID", "Bill_ID", "Amount", "Admin Fee", "Status", "Subscriber_ID", "Name", "Params", "Settlement_Date", "CreatedAt", "Status Message"];
    const options = {
      search: false,
      filterType: "dropdown",
      print: false,
      download: false,
      responsive: 'scroll',
      selectableRows: false,
      customToolbar: () => {
        return (
          <CustomToolbar
          addFilterBy={addFilterBy}
          addFilterValue={addFilterValue}
          addFilterTrue={addFilterTrue}
          />
        );
      },
      customFooter: () => {
        return(
          <CustomFooter
            page={page}
            add={buttonAdd}
            substract={buttonSubstract}
          />
        )
      }
    }

  return (
      <div className="animated fadeIn" style={{marginBottom: 30, marginRight: 20}}>
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
