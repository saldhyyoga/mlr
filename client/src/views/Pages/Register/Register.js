import React, { useRef, useState } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_SERVER } from '../../../helper/variable';
import zxcvbn from 'zxcvbn';
import CryptoJS from 'crypto-js';
import {Link} from 'react-router-dom'

import './PasswordStrengthMeter.css';
import {AiFillSafetyCertificate} from 'react-icons/ai';

function Register() {
  const { register, handleSubmit, errors, watch} = useForm({});
  const password = useRef({});
  const [strengthPassword, setStrengthPassword] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false)
  const testedResult = zxcvbn(strengthPassword);
  password.current = watch("password","");

  const onSubmit = async data => {
    try {
      const encryptPasswordMD5 = CryptoJS.MD5(data.password);
      const encryptPasswordSHA1 = CryptoJS.SHA1(encryptPasswordMD5.toString());

      const result = await axios.post(`${API_SERVER}/users/sign-up`,{
        username: data.email,
        phone: data.phone,
        password: encryptPasswordSHA1.toString(),
        name: data.merchantname
      })
      console.log(result.data)

      if(result.data.status === 'OK'){
        setRegisterSuccess(true)
      } else if(result.data.status !== 'OK'){
        toast.error("Username atau email sudah terdaftar, gunakan email lain", {
          autoClose: 3000
        })
      }
    } catch (error) {
      console.log(error)
      toast.error("Server error", {
        autoClose: 3000
      })
    }
  }

  const createPasswordLabel = (result) => {
    switch (result.score) {
      case 0:
        return 'Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'Weak';
    }
  }

  return (
    <div className="app flex-row align-items-center"
    style={{backgroundColor: '#e6e8ed'}}>
      <Container>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            {!registerSuccess ?
            <Card className="mx-4">
            <CardBody className="p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Register</h1>
                <p className="text-muted">Create your account</p>
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: 15}}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <input
                    style={{
                      width: '95%',
                      border: '1px solid #e4e7ea',
                      height: 'calc(1.5em + 0.75rem + 2px)',
                      borderRadius: '0 5px 5px 0'
                    }}
                    type="email"
                    placeholder="   Email"
                    name="email"
                    ref={register({
                      required: "Email required!",
                      maxLength: {
                        value: 50,
                        message: 'Email maximal 50 character'
                      }
                    })}
                  />
                </div>
                {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: 15}}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <input
                    style={{
                      width: '95%',
                      border: '1px solid #e4e7ea',
                      height: 'calc(1.5em + 0.75rem + 2px)',
                      borderRadius: '0 5px 5px 0'
                    }}
                    type="text"
                    placeholder="   Name"
                    name="merchantname"
                    ref={register({
                      required: "Name required!",
                      maxLength: {
                        value: 30,
                        message: 'Name maximal 30 character'
                      },
                      minLength: {
                        value: 8,
                        message: 'Name minimal 8 character'
                      }
                    })}
                  />
                </div>
                {errors.merchantname && <p style={{color: 'red'}}>{errors.merchantname.message}</p>}
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: 15}}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-phone"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <input
                    style={{
                      width: '95%',
                      border: '1px solid #e4e7ea',
                      height: 'calc(1.5em + 0.75rem + 2px)',
                      borderRadius: '0 5px 5px 0'
                    }}
                    type="number"
                    placeholder="   Phone Number"
                    name="phone"
                    ref={register({
                      required: "PhoneNumber required!",
                      min: {
                        value: 0,
                        message: 'Cannot below zero'
                      },
                      maxLength: {
                        value: 15,
                        message: 'PhoneNumber max 15 character'
                      },
                      minLength: {
                        value: 9,
                        message: 'PhoneNumber min 9 character'
                      }
                    })}
                  />
                </div>
                {errors.phone && <p style={{color: 'red'}}>{errors.phone.message}</p>}
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: 15}}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-lock"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <input
                    style={{
                      width: '95%',
                      border: '1px solid #e4e7ea',
                      height: 'calc(1.5em + 0.75rem + 2px)',
                      borderRadius: '0 5px 5px 0'
                    }}
                    type="password"
                    placeholder="   Password"
                    name="password"
                    onChange={e => setStrengthPassword(e.target.value)}
                    ref={register({
                      validate: value => zxcvbn(value).score > 2
                    })}
                  />
                </div>
                <p style={{
                  marginTop: -18
                }}>Minimum 8 karakter termasuk A-Z, a-z, dan 0-9
                </p>

                {strengthPassword &&
                  <>
                    <progress
                    className={`password-strength-meter-progress strength-${createPasswordLabel(testedResult)}`}
                    value={testedResult.score}
                    max="4"
                    >
                    </progress>
                    <br />
                    <label className="password-strength-meter-label">
                      <strong>Password Strength : </strong>{createPasswordLabel(testedResult)}
                    </label>
                  </>
                }
                {errors.password && <p style={{color: 'red'}}>{errors.password.message}</p>}
                <div style={{display: 'flex', flexDirection: 'row', marginBottom: 15}}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="icon-user"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <input
                    style={{
                      width: '95%',
                      border: '1px solid #e4e7ea',
                      height: 'calc(1.5em + 0.75rem + 2px)',
                      borderRadius: '0 5px 5px 0'
                    }}
                    type="password"
                    placeholder="   Confirm Password"
                    name="confirmpassword"
                    ref={register({
                      validate: value =>
                        value === password.current || "Password doesn't match"
                    })}
                  />
                </div>
                <p style={{
                  marginTop: -18
                }}>Minimum 8 karakter termasuk A-Z, a-z, dan 0-9
                </p>
                {errors.confirmpassword && <p style={{color: 'red'}}>{errors.confirmpassword.message}</p>}
                <Button color="success" block>Create Account</Button>
              </form>
              <div style={{marginTop: 10}}>
              Sudah punya akun ? <Link to="/login"> Login</Link>
              </div>
            </CardBody>
            <CardFooter className="p-4">
              <Row>
                <span>Jazaa Payment Gateway &copy; 2020</span>
                <span className="ml-auto">Powered by Digest</span>
              </Row>
            </CardFooter>
          </Card> :
            <center>
              <div style={{
                marginBottom: 350
              }}>
              <AiFillSafetyCertificate
                color={"#34b7eb"}
                size={200}
              />
              <p style={{
                fontSize: 18,
                fontWeight: 'bold'
              }}>Registrasi berhasil :). Silahkan cek email untuk verifikasi.</p>
              <a href="/login"><Button color="info">Login</Button></a>
              </div>
            </center>
          }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;
