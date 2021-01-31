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
  const [name, setName] = useState("");

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const toggle2 = () => setModal(!modal);

  const submitData = () => {
    Axios.post(
      `${API_SERVER}/add-product`,
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
        setModal(!modal);
        if (res.data.data) {
          toast.success("Add Product Success", {
            onClose: () => (window.location.href = "/products"),
            autoClose: 2000,
          });
        } else {
          toast.error("Add Product Failed", {
            onClose: () => (window.location.href = "/products"),
            autoClose: 2000,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const showModal = () => {
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
