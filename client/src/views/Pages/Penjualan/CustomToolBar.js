import React, { useState } from "react";
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

const Example = (props) => {
  const [modal, setModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [name, setName] = useState(1);
  const [amount, setAmount] = useState(0);
  const [month, setMonth] = useState(1);
  const [year, setYear] = useState(0);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const toggle2 = () => setModal(!modal);

  const submitData = () => {
    Axios.post(
      `${API_SERVER}/add-penjualan`,
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
        setModal(!modal);
        if (res.data.data) {
          toast.success("Add Penjualan Data Success", {
            onClose: () => (window.location.href = "/sales"),
            autoClose: 2000,
          });
        } else {
          toast.error("Add Product Failed", {
            onClose: () => (window.location.href = "/sales"),
            autoClose: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const showModal = () => {
    console.log(month);
    return (
      <>
        <Modal isOpen={modal} toggle={toggle2}>
          <ModalHeader toggle={toggle2}>Add Product</ModalHeader>
          <ModalBody>
            <div>
              <Col>Nama Produk</Col>
              <Col>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="select"
                >
                  {props.data.map((item, index) => {
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
