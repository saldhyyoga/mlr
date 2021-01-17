import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";
import { Badge } from 'reactstrap';

import TransactionData from './Data';
import './Transaction.css';

export default class Dummy extends Component {
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
    ButtonStatus = (item) => {

      if(item === 'success')
        return <Badge color="success">{item}</Badge>
      else if(item === 'pending')
        return <Badge color="warning">{item}</Badge>
      else
        return <Badge color="danger">{item}</Badge>
    }

    render() {
        const colums = ["Transaction ID", "Payment Type", "Date Time", 'Bank ID', "Payment Code", "Amount", 'Settlement Date Time', 'Status'];
        const options = {
          filterType: "multiselect",
          print: false,
          download: false,
          selectableRows: false,
          rowsPerPageOptions: [10,25,50,100],
          // customToolbar: () => {
          //   return (
          //     <CustomToolbar />
          //   );
          // }
        }

        const { data } = this.state

        return (
            <div className="animated fadeIn">
              <MUIDataTable
                title={"Transaction"}
                options={options}
                columns={colums}
                data={data.map((item,index) => {
                  return [
                      item.id,
                      item.payment,
                      item.date,
                      item.bankid,
                      item.paymentcode,
                      item.amount,
                      item.settlement,
                      <>
                        {this.ButtonStatus(item.Status)}
                      </>
                  ]
                })}
              />
            </div>
        )
    }
}
