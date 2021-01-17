import React, { Component } from 'react';
import MUIDataTable from "mui-datatables";

import AccountData from './AccountData';
import './Account.css';

export default class Account extends Component {
    constructor(props) {
        super(props)

        this.state = {
             tipe: 'id',
             valueforsearch: '',
             data: AccountData
        }
    }

    render() {
        const colums = ["Username", "Role", "CreatedAt", "LastLogin"];
        const options = {
          filterType: "multiselect",
          print: false,
          download: false,
          selectableRows: false,
          rowsPerPageOptions: [10,25,50,100]
        }

        const { data } = this.state

        return (
            <div className="animated fadeIn">
              <MUIDataTable
                title={"Accounts"}
                options={options}
                columns={colums}
                data={data.map((item,index) => {
                  return [
                      item.username,
                      item.role,
                      item.createdAt,
                      item.lastlogin
                  ]
                })}
              />
            </div>
        )
    }
}
