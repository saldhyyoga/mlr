import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import CustomToolbar from './CustomToolBar';
import CustomFooter from './CustomFooter';
import { Button } from 'reactstrap';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { token, API_SERVER } from '../../../helper/variable';


export default function Employee (props){
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const ca = token
    const base64Url = ca.split('.')[1];
    const decodedToken = JSON.parse(window.atob(base64Url));
    let url = '';

    if(decodedToken.group === 1){
      url = 'merchant'
    }
    if(decodedToken.group === 3){
      url = 'merchant-operational'
    }

    useEffect(() => {
      axios.get(`${API_SERVER}/${url}?page=${page}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        setData(response.data.values)
      })
      .catch(error => console.log(error));
    }, [page,url])

    // const toggleDelete = () => setModalDelete(!modalDelete);
    const buttonAdd = () => setPage(page + 1)
    const buttonSubstract = () => setPage(page - 1)

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

    const colums = ["ID", "Username/Email", "Merchant Name", "Phone", "Status", "Action"];
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

  console.log(data)

  return (
      <div className="animated fadeIn" style={{marginBottom: 30, marginRight: 20}}>
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            title={"Data Merchant"}
            options={options}
            columns={colums}
            data={data.map((item,index) => {
              return [
                  item.id,
                  item.username,
                  item.merchant.name,
                  item.merchant.phone,
                  item.merchant.active === false ? 'Not Active' : 'Active',
                  <>
                    <Link to={"/user/edit/"+item.merchant.id}><Button size="sm" color="primary" style={{marginRight: 5}}>Edit Merchant Data</Button></Link>
                  </>
              ]
            })}
          />
        </MuiThemeProvider>
      </div>
  )
}
