import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { token, API_SERVER } from "../../../helper/variable";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Col,
  Input,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToolBar from "./CustomToolBar";

export default function Index() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`${API_SERVER}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggle = () => setModal(!modal);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const deleteData = (item) => {
    axios
      .delete(`${API_SERVER}/delete-product/${item}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModal(!modal);
        if (res.data.data) {
          toast.success("Delete Product Success", {
            onClose: () => (window.location.href = "/product"),
            autoClose: 2000,
          });
        } else {
          toast.error("Delete Product Failed", {
            onClose: () => (window.location.href = "/operational"),
            autoClose: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const EditData = (item) => {
    axios
      .put(
        `${API_SERVER}/update-product/${item}`,
        {
          name: name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setModalEdit(!modalEdit);
        if (res.data.data) {
          toast.success("Update Product Success", {
            onClose: () => (window.location.href = "/product"),
            autoClose: 2000,
          });
        } else {
          toast.error("Update Product Failed", {
            onClose: () => (window.location.href = "/operational"),
            autoClose: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const modalDelete = (item) => {
    return (
      <>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Delete Product</ModalHeader>
          <ModalBody>Apakah anda yakin akan menghapus produk ini?</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => deleteData(item)}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const modalEditData = (item) => {
    return (
      <>
        <Modal isOpen={modalEdit} toggle={toggleEdit}>
          <ModalHeader toggle={toggleEdit}>Edit Product</ModalHeader>
          <ModalBody>
            <Col>
              <Input
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => EditData(item)}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={toggleEdit}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const iterateData = () => {
    if (data !== undefined || data !== null) {
      return data.map((item, index) => {
        return [
          index,
          item.name,
          <>
            <Button onClick={toggleEdit} key={index} size="md" color="success">
              <i className="icon-pencil"></i>
            </Button>
            {modalEditData(item.id)}
            <Button
              style={{ marginLeft: 2 }}
              key={index}
              size="md"
              color="danger"
              onClick={toggle}
            >
              <i className="icon-trash"></i>
            </Button>
            {modalDelete(item.id)}
          </>,
        ];
      });
    }
  };

  const colums = ["Number", "Name", "Action"];
  const options = {
    search: false,
    filterType: "dropdown",
    print: false,
    download: false,
    responsive: "scroll",
    rowsPerPage: 15,
    selectableRows: false,
    rowsPerPageOptions: [10, 25, 50, 100],
    customToolbar: () => {
      return <CustomToolBar />;
    },
    // customFooter: (rowsPerPage) => {
    //   return(
    //     <CustomFooter
    //       page={page}
    //       add={buttonAdd}
    //       substract={buttonSubstract}
    //       rowsPerPage={rowsPerPage}
    //     />
    //   )
    // }
  };

  return (
    <div
      className="animated fadeIn"
      style={{ marginBottom: 30, marginRight: 20 }}
    >
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      {/* <MuiThemeProvider theme={getMuiTheme()}> */}
      <MUIDataTable
        title={"Data Product"}
        options={options}
        columns={colums}
        data={iterateData()}
      />
      {/* </MuiThemeProvider> */}
    </div>
  );
}
