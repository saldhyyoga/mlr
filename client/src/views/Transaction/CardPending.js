import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, FormGroup, Input, Label } from 'reactstrap';

const CardNumberData = [
    {id: 'SI10', price: '10.000'},
    {id: 'SI20', price: '20.000'},
    {id: 'SI30', price: '30.000'},
    {id: 'SI30', price: '40.000'}
]


export default class CardNumber extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tipe: 'id',
             valueforsearch: '',
             data: CardNumberData
        }
    }
    
    handleChange = (e) => this.setState({ valueforsearch: e.target.value})
    changeTypeFilter = e => this.setState({tipe: e.target.value})

    filterCardNumberData = () => {
        const cardnumber = this.state.data
        if(cardnumber && cardnumber.length > 0){
            switch(this.state.tipe){
                case "id":
                    return cardnumber.filter(
                        data => data.id.toLowerCase().includes(this.state.valueforsearch.toLowerCase())
                    )
                case "price":
                    return cardnumber.filter(
                        data => data.price.toLowerCase().includes(this.state.valueforsearch.toLowerCase())
                    )
                default:
                    return cardnumber;
            }
        } else {
            return [];
        }
    }
    
    render() {
        console.log(this.state.tipe)
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                Card Pending Transaction
                            </CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for="exampleSelect" sm={2}>Filter By</Label>
                                    <Col>
                                    <Input type="select" name="select" id="exampleSelect"
                                    onChange={this.changeTypeFilter} style={{
                                        marginLeft: -100,
                                        width: 200
                                    }}
                                    >
                                        <option value="id" defaultValue>Product Id</option>
                                        <option value="price">Price</option>
                                    </Input>
                                    
                                    </Col>
                                    <Col>
                                    <Input type="text" name="valueforsearch" id="partner" style={{
                                        width: 200,
                                        marginLeft: -320,
                                    }}
                                    value={this.state.valueforsearch}
                                    onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>

                                <Table responsive hover>
                                <thead className="thead-light">
                                  <tr>
                                    <th scope="col">Product Id</th>
                                    <th scope="col">Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {this.filterCardNumberData().map((entry,index) => (
                                        <tr key={index}>
                                            <th scope="row">{entry.id}</th>
                                            <td>{entry.price}</td>
                                        </tr>
                                    )
                                    )}
                                </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
