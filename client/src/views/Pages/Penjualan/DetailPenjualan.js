import React, {useState, useEffect} from 'react';
import { Row, Button, Col, Card, CardBody, CardHeader, CardFooter, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { API_SERVER, token} from '../../../helper/variable';
import {success, error} from '../../../functions/toast';

export default function DetailPenjualan(props) {
    const [modalDelete, setModalDelete] = useState(false)
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2019);
    const [product, setProduct] = useState(1);
    const [amount, setAmount] = useState(0);
    const [dataProduct, setDataProduct] = useState([]);
    const id = props.match.params.id;

    useEffect(() => {
        axios
        .get(`${API_SERVER}/detail-penjualan/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setMonth(res.data.data.bulan);
            setYear(res.data.data.tahun);
            setProduct(res.data.data.product.id);
            setAmount(res.data.data.jumlah);
        })
        .catch(err => console.log(err))

        const getProducts = () => {
            axios
            .get(`${API_SERVER}/products`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => setDataProduct(res.data.data))
            .catch(err => console.log(err))
        }
        getProducts();
    }, [])

    const submitData = async (e) => {
        const id = props.match.params.id;
        e.preventDefault();
        try {
          const result = await axios.put(`${API_SERVER}/update-penjualan/${id}`,{
              bulan: month,
              tahun: year,
              product_id: product,
              jumlah: amount
            },{
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          )
          if(result.data.status === 'OK' && result.data.data.length !== 0){
            success('Data berhasil diedit', "sales")
          }else{
            error('Terdapat kesalahan pada server')
          }
        } catch (error) {
          console.log(error)
        }
      }

      const toggleDelete = () => setModalDelete(!modalDelete);

      const deleteDataProduct = async () => {
        const id = props.match.params.id;
        try {
          const res = await axios.delete(`${API_SERVER}/delete-penjualan/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          setModalDelete(!modalDelete)
          if (res.data.data) {
            toast.success("Delete Data Penjualan Success", {
              onClose: () => (window.location.href = "/sales"),
              autoClose: 2000,
            });
          }else {
            toast.error("Delete Data Penjualan Failed", {
              onClose: () => (window.location.href = "/sales"),
              autoClose: 2000,
            });
          }
        } catch (error) {
          console.log(error)
        }
      }

      const deleteData = () => {
        return(
          <div>
            <Modal isOpen={modalDelete} toggle={toggleDelete}>
              <ModalHeader toggle={toggleDelete}>Delete Data Penjualan</ModalHeader>
              <ModalBody>
                Apakah anda yakin akan menghapus data ini?
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={deleteDataProduct}>Delete</Button>{' '}
                <Button color="secondary" onClick={toggleDelete}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </div>
        )
      }

    return (
    <Row>
      <ToastContainer position={toast.POSITION.TOP_CENTER}/>
        <Col xs="12">
            <Card>
            <Form onSubmit={submitData} className="form-horizontal">
              <CardHeader>
                <i className="fa fa-edit"></i>Edit Data Penjualan
              </CardHeader>
                <CardBody>
                    <FormGroup>
                      <Label>Bulan</Label>
                        <Col sm="3" style={{marginLeft: -14}}>
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
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="phonenumber">Tahun</Label>
                        <Col sm="3" style={{marginLeft: -14}}>
                          <Input value={year} onChange={e => setYear(e.target.value)} name="year" id="year" size="16" type="number" required />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label>Nama Produk</Label>
                        <Col sm="3" style={{marginLeft: -14}}>
                        <Input
                            value={product}
                            onChange={(e) => setMonth(e.target.value)}
                            type="select"
                        >
                            {dataProduct.map((item, index) => {
                                return(
                                    <option value={item.id}>{item.name}</option>
                                )
                            })}
                        </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="amount">Jumlah</Label>
                        <Col sm="3" style={{marginLeft: -14}}>
                          <Input value={amount} onChange={e => setAmount(e.target.value)} name="amount" id="amount" size="16" type="number" required />
                        </Col>
                    </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button type="submit" size="sm" color="success" style={{marginRight: '10px'}}><i className="fa fa-dot-circle-o"></i>Edit</Button>
                  <Button onClick={toggleDelete} type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Delete</Button>
                  {deleteData()}
                </CardFooter>
              </Form>
            </Card>
        </Col>
      </Row>
    )
}
