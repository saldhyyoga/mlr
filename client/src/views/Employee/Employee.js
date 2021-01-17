import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
import axios from 'axios';
import CustomToolbar from './CustomToolBar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Employee.css';

export default function Employee (props){
    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
      axios
        .get('https://jsonplaceholder.typicode.com/comments')
        .then(response => setData(response.data))
        .catch(err => console.log(err))
    }, []);

    const {
      className
    } = props;

    const toggle = () => setModal(!modal);

    const colums = ["NIP", "User Group", "Name", "Position", "Keterangan", "Action"];
    const options = {
      filterType: "dropdown",
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

        return (
            <div className="animated fadeIn">
              <MUIDataTable
                title={"Data Karyawan"}
                options={options}
                columns={colums}
                data={data.map((item,index) => {
                  return [
                      item.postId,
                      item.id,
                      item.name,
                      item.email,
                      item.body,
                      <>
                        <Link to={"/employee/edit/"+item.id}><Button size="sm" color="warning" style={{marginBottom: 5, width: 60}} ><i className="icon-note"></i><br />Edit</Button></Link>
                        <Button color="danger" onClick={toggle} style={{width: 60, textAlign: 'center'}}><i class="icon-trash"></i><br />Delete</Button>
                          <Modal isOpen={modal} toggle={toggle} className={className}>
                            <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                            <ModalBody>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </ModalBody>
                            <ModalFooter>
                              <Button color="primary" onClick={toggle}>Do Something</Button>
                              <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                          </Modal>
                      </>
                  ]
                })}
              />
            </div>
        )
}
