import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, FormGroup, Input, Label } from 'reactstrap';

const CardNumberData = [
    {id: 'BI001', vendor: 'TELKOMSEL'},
    {id: 'BI002', vendor: 'INDOSAT'},
    {id: 'BI003', vendor: 'XL AXIATA'},
    {id: 'BI004', vendor: 'SMARTFREN'}
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
                case "partner":
                    return cardnumber.filter(
                        data => data.vendor.toLowerCase().includes(this.state.valueforsearch.toLowerCase())
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
                                Card Failed Transaction
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
                                        <option value="id" defaultValue>Biller Id</option>
                                        <option value="partner">Vendor Name</option>
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
                                    <th scope="col">Bill Id</th>
                                    <th scope="col">Vendor</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {this.filterCardNumberData().map((entry,index) => (
                                        <tr key={index}>
                                            <th scope="row">{entry.id}</th>
                                            <td>{entry.vendor}</td>
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
