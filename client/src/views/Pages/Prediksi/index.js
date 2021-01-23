import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { token, API_SERVER } from "../../../helper/variable";
import { Link } from "react-router-dom";
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
  const [detailData, setDetailData] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_SERVER}/prediksi`, {
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

  const deleteData = () => {
    axios
      .delete(`${API_SERVER}/prediksi/${detailData}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setModal(!modal);
        if (res.data.data === 1) {
          toast.success("Prediksi Berhasil Dihapus", {
            onClose: () => (window.location.href = "/prediksi"),
            autoClose: 2000,
          });
        } else {
          toast.error("Prediksi Gagal Dihapus", {
            onClose: () => (window.location.href = "/prediksi"),
            autoClose: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const showModal = () => {
    return (
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Hapus Data Prediksi</ModalHeader>
          <ModalBody>
            Apakah anda yakin untuk menghapus data prediksi ?
          </ModalBody>
          <ModalFooter>
            <Button onClick={deleteData} color="primary">
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };

  const iterateData = () => {
    if (data !== undefined || data !== null) {
      return data.map((item, index) => {
        return [
          index + 1,
          item.pred_m,
          item.pred_y,
          item.tahun,
          <>
            <Link to={"/detail-prediksi/" + item.id}>
              <Button color="primary" style={{ marginRight: 3 }}>
                Details
              </Button>
            </Link>
            <Button
              onClick={() => {
                toggle();
                setDetailData(item.id);
              }}
              color="danger"
            >
              Delete
            </Button>
            {showModal()}
          </>,
        ];
      });
    }
  };

  const colums = [
    "Index",
    "Prediksi Perbulan",
    "Prediksi Pertahun",
    "Tahun Prediksi",
    "Actions",
  ];
  const options = {
    search: false,
    filterType: "dropdown",
    print: false,
    download: false,
    responsive: "scroll",
    rowsPerPage: 10,
    selectableRows: false,
    rowsPerPageOptions: [10, 25, 50, 100],
    customToolbar: () => {
      return <CustomToolBar />;
    },
  };

  return (
    <div
      className="animated fadeIn"
      style={{ marginBottom: 30, marginRight: 20 }}
    >
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
      {/* <MuiThemeProvider theme={getMuiTheme()}> */}
      <MUIDataTable
        title={"Data Prediksi"}
        options={options}
        columns={colums}
        data={iterateData()}
      />
      {/* </MuiThemeProvider> */}
    </div>
  );
}
