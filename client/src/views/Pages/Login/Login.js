import React, { useState } from "react";
import Cookies from "js-cookie";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { API_SERVER } from "../../../helper/variable";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Spinner } from "reactstrap";
import CryptoJS from "crypto-js";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

export default function Login(props) {
  const { register, handleSubmit, errors } = useForm({});
  const [modal, setModal] = useState(false);

  const submitData = async (data) => {
    try {
      setModal(true);

      const result = await axios.post(`${API_SERVER}/users/sign-in`, {
        email: data.email,
        password: data.password,
      });

      if (result.data.status === "OK" && result.data.token !== null) {
        toast.success("Login berhasil", {
          onClose: () => (window.location.href = "/dashboard"),
          autoClose: 2000,
        });
        Cookies.set("token", result.data.token, { expires: 1 });
      } else {
        toast.error("Username atau password salah", {
          onClose: () => window.location.reload(),
          autoClose: 1000,
        });
      }
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="app flex-row align-items-center"
      style={{
        backgroundColor: "#e6e8ed",
      }}
    >
      <Container>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <Row className="justify-content-center">
          <Col md="8">
            <div
              style={{
                height: 400,
                width: 700,
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div>
                <Card
                  className="p-4"
                  style={{ width: 350, height: 400, border: "none" }}
                >
                  <CardBody style={{ height: 400 }}>
                    <form onSubmit={handleSubmit(submitData)}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      {modal ? (
                        <>
                          <div>Please Wait...</div>
                          <Spinner
                            style={{ width: "5rem", height: "5rem" }}
                            color="primary"
                          />
                        </>
                      ) : (
                        <>
                          <InputGroup className="mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-user"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <input
                              style={{
                                width: "80%",
                                border: "1px solid #e4e7ea",
                                height: "calc(1.5em + 0.75rem + 2px)",
                                borderRadius: "0 5px 5px 0",
                              }}
                              placeholder="Email"
                              name="email"
                              type="email"
                              ref={register({
                                required: "Email required",
                              })}
                            />
                            {errors.email && (
                              <p style={{ color: "red" }}>
                                {errors.email.message}
                              </p>
                            )}
                          </InputGroup>
                          <InputGroup className="mb-4">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="icon-lock"></i>
                              </InputGroupText>
                            </InputGroupAddon>
                            <input
                              style={{
                                width: "80%",
                                border: "1px solid #e4e7ea",
                                height: "calc(1.5em + 0.75rem + 2px)",
                                borderRadius: "0 5px 5px 0",
                              }}
                              type="password"
                              placeholder="Password"
                              name="password"
                              ref={register({
                                required: "Password required",
                                minLength: {
                                  value: 8,
                                  message: "Password min 8 character",
                                },
                              })}
                            />
                            {errors.password && (
                              <p style={{ color: "red" }}>
                                {errors.password.message}
                              </p>
                            )}
                          </InputGroup>
                          <Row>
                            <Col xs="6">
                              <Button color="primary" className="px-4">
                                Login
                              </Button>
                            </Col>
                          </Row>
                        </>
                      )}
                    </form>
                  </CardBody>
                </Card>
              </div>
              <div
                className="login"
                style={{
                  height: 400,
                  width: 400,
                  backgroundImage: "linear-gradient(#ff00ff,#11a6df)",
                  clipPath: "polygon(0 0, 100% 0%, 100% 100%, 59% 100%)",
                  textAlign: "right",
                  color: "white",
                  marginLeft: -50,
                }}
              >
                <div
                  style={{
                    marginTop: 40,
                    fontSize: 30,
                    fontWeight: "bold",
                    marginRight: 20,
                  }}
                >
                  Welcome Back
                </div>
                <div
                  style={{
                    fontSize: 14,
                    marginRight: 8,
                  }}
                >
                  Portal by PT.Enseval Putera Megatrading &nbsp; &nbsp;
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
