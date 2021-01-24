import React, { useState, useEffect } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
} from "reactstrap";
import Tooltip from "@material-ui/core/Tooltip";
import { Button, Input, FormGroup } from "reactstrap";
import "./style.css";
import Axios from "axios";
import { token, API_SERVER } from "../../../helper/variable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Example = (props) => {
  const [modal, setModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pred, setPred] = useState(0);
  const [year, setYear] = useState([]);
  const [yearPrediction, setYearPrediction] = useState(0);

  useEffect(() => {
    axios
      .get(`${API_SERVER}/year`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setYear(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const toggle2 = () => setModal(!modal);

  const submitData = () => {
    Axios.post(
      `${API_SERVER}/regression`,
      {
        year: yearPrediction,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        setModal(!modal);
        if (res.data.data === "Success") {
          toast.success("Prediksi Berhasil Ditambahkan", {
            onClose: () => (window.location.href = "/prediksi"),
            autoClose: 2000,
          });
        } else if (
          res.data.messages === "Terdapat data penjualan yang belum lengkap"
        ) {
          toast.error("terdapat data penjualan yang belum lengkap", {
            onClose: () => (window.location.href = "/prediksi"),
            autoClose: 2000,
          });
        } else {
          toast.error("Add Product Failed", {
            onClose: () => (window.location.href = "/prediksi"),
            autoClose: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  console.log(pred);

  const showModal = () => {
    return (
      <>
        <Modal isOpen={modal} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Data Prediksi</ModalHeader>
          <ModalBody>
            <div>
              <Col>Data Penjualan Tahun</Col>
              <Col>
                <Input
                  value={pred}
                  onChange={(e) => {
                    setPred(e.target.value);
                    setYearPrediction(parseInt(e.target.value) + 1);
                  }}
                  type="select"
                >
                  <option>Pilih Tahun</option>
                  {year.map((item) => {
                    return <option value={item.tahun}>{item.tahun}</option>;
                  })}
                </Input>
              </Col>
            </div>
            <div style={{ marginTop: 10 }}>
              <Col>Prediksi Tahun</Col>
              <Col>
                <Input disabled value={yearPrediction} type="number" />
              </Col>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={submitData}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={toggle2}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  const modalDelete = () => {
    return (
      <>
        <Modal isOpen={modal} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Add Product</ModalHeader>
          <ModalBody>
            <Col>Product Name</Col>
            <Col>
              <Input
                value={pred}
                onChange={(e) => setPred(e.target.value)}
                type="text"
              />
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={submitData}>
              Submit
            </Button>{" "}
            <Button color="secondary" onClick={toggle2}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  };

  return (
    <>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          style={{ backgroundColor: "white", border: "none", marginRight: 30 }}
          caret
        >
          <Tooltip title={"Add Product"}>
            <i onClick={toggle2} className="fa fa-plus"></i>
          </Tooltip>
          {showModal()}
        </DropdownToggle>
      </ButtonDropdown>
      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </>
  );
};

export default Example;
