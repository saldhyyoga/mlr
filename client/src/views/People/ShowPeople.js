import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import UserData from './PeopleData';

function UserRow(props){
    const userss = props.entry;
    const userLink = `/userss/${userss.id}`;

    const getBadge = status => {
        return status === 'Active' ? 'success':
          status === 'Inactive' ? 'secondary':
            status === 'Pending' ? 'warning':
              status === 'Banned' ? 'danger':
                'primary'
    }

    return (
        <tr key={userss.id.toString()}>
            <th scope="row"><Link to={userLink}>{userss.id}</Link></th>
            <td><Link to={userLink}>{userss.name}</Link></td>
            <td>{userss.registered}</td>
            <td>{userss.role}</td>
            <td><Link to={userLink}><Badge color={getBadge(userss.status)}>{userss.status}</Badge></Link></td>
        </tr>
    )
}

export default class ShowPeople extends Component {
    render() {
        const userList = UserData.filter((user) => user.id < 10)
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                USERS
                            </CardHeader>
                            <CardBody>
                                <Table responsive hover>
                                <thead>
                                  <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">name</th>
                                    <th scope="col">registered</th>
                                    <th scope="col">role</th>
                                    <th scope="col">status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                    {userList.map((entry,index) => (
                                        <UserRow key={index} user={entry} />
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
