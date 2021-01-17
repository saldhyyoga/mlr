import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { Button } from 'reactstrap';

import TransactionData from './Data';
import CustomToolbar from './CustomToolBar';

export default class Transaction extends Component {
    constructor(props) {
        super(props)

        this.state = {
             tipe: 'id',
             valueforsearch: '',
             data: TransactionData
        }
    }

    // componentDidMount(){
    //   try {
    //     axios.get('https://jsonplaceholder.typicode.com/comments')
    //     .then(response => {
    //       this.setState({
    //         data: response.data
    //       })
    //       console.log(this.state.data)
    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    render() {
        const colums = ["Transaksi Id", "User Id", "Name", "Nomor Telepon", "Nominal", "Status"];
        const options = {
          filterType: "multiselect",
          print: false,
          download: false,
          selectableRows: false,
          rowsPerPageOptions: [10,25,50,100],
          customToolbar: () => {
            return (
              <CustomToolbar />
            );
          }
        }

        const { data } = this.state

        return (
            <div className="animated fadeIn">
              <MUIDataTable
                title={"Data Transaksi"}
                options={options}
                columns={colums}
                data={data.map((item,index) => {
                  return [
                      item.id,
                      item.userid,
                      item.name,
                      item.phonenumber,
                      item.nominal,
                      <div>
                        <Button type="submit" size="sm" color="success" style={{marginBottom: 5, width: 60}} ><center>success</center></Button>
                      </div>
                  ]
                })}
              />
            </div>
        )
    }
}
