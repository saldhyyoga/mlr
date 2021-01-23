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
  const [dataProduct, setDataProduct] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [name, setName] = useState(1);
  const [amount, setAmount] = useState(0);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_SERVER}/penjualan`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));

    axios
      .get(`${API_SERVER}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDataProduct(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggle = () => setModal(!modal);
  const toggleEdit = () => setModalEdit(!modalEdit);

  const deleteData = (item) => {
    axios
      .delete(`${API_SERVER}/delete-penjualan/${item}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModal(!modal);
        if (res.data.data) {
          toast.success("Delete Data Penjualan Success", {
            onClose: () => (window.location.href = "/sales"),
            autoClose: 2000,
          });
        } else {
          toast.error("Delete Data Penjualan Failed", {
            onClose: () => (window.location.href = "/sales"),
            autoClose: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const EditData = (item) => {
    axios
      .put(
        `${API_SERVER}/update-penjualan/${item}`,
        {
          product_id: name,
          jumlah: parseInt(amount),
          bulan: parseInt(month),
          tahun: parseInt(year),
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
          toast.success("Update Data Penjualan Success", {
            onClose: () => (window.location.href = "/sales"),
            autoClose: 2000,
          });
        } else {
          toast.error("Update Data Penjualan Failed", {
            onClose: () => (window.location.href = "/sales"),
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
          <ModalHeader toggle={toggle}>Delete Data Penjualan</ModalHeader>
          <ModalBody>
            Apakah anda yakin akan menghapus data penjualan ini?
          </ModalBody>
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
          <ModalHeader toggle={toggleEdit}>Edit Data Penjualan</ModalHeader>
          <ModalBody>
            <div>
              <Col>Nama Produk</Col>
              <Col>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="select"
                >
                  {dataProduct.map((item, index) => {
                    return <option value={item.id}>{item.name}</option>;
                  })}
                </Input>
              </Col>
            </div>
            <div>
              <Col>Jumlah</Col>
              <Col>
                <Input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                />
              </Col>
            </div>
            <div>
              <Col>Bulan</Col>
              <Col>
                <Input
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  type="select"
                >
                  <option value="1">Januari</option>
                  <option value="2">Februari</option>
                  <option value="3">Maret</option>
                  <option value="4">April</option>
                  <option value="5">Mei</option>
                  <option value="6">Juni</option>
                  <option value="7">Juli</option>
                  <option value="8">Agustus</option>
                  <option value="9">September</option>
                  <option value="10">Oktober</option>
                  <option value="11">November</option>
                  <option value="12">Desember</option>
                </Input>
              </Col>
            </div>
            <div>
              <Col>Tahun</Col>
              <Col>
                <Input
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  type="number"
                />
              </Col>
            </div>
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

  const showBulan = (item) => {
    let month;
    switch (item) {
      case 1:
        month = "Januari";
        break;
      case 2:
        month = "Februari";
        break;
      case 3:
        month = "Maret";
        break;
      case 4:
        month = "April";
        break;
      case 5:
        month = "Mei";
        break;
      case 6:
        month = "Juni";
        break;
      case 7:
        month = "Juli";
        break;
      case 8:
        month = "Agustus";
        break;
      case 9:
        month = "September";
        break;
      case 10:
        month = "Oktober";
        break;
      case 11:
        month = "November";
        break;
      case 12:
        month = "Desember";
        break;
      default:
        break;
    }
    return month;
  };

  const iterateData = () => {
    if (data !== undefined || data !== null) {
      return data.map((item, index) => {
        return [
          index + 1,
          showBulan(item.bulan),
          item.tahun,
          item.product.name,
          item.jumlah,
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

  const colums = ["#", "Bulan", "Tahun", "Nama Produk", "Jumlah", "Actions"];
  const options = {
    search: false,
    filterType: "dropdown",
    print: false,
    download: false,
    responsive: "scroll",
    rowsPerPage: 100,
    selectableRows: false,
    rowsPerPageOptions: [10, 25, 50, 100],
    customToolbar: () => {
      return <CustomToolBar data={dataProduct} />;
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
        title={"Data Penjualan"}
        options={options}
        columns={colums}
        data={iterateData()}
      />
      {/* </MuiThemeProvider> */}
    </div>
  );
}
