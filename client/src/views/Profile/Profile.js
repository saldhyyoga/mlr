import React, { Component } from 'react';
import { Row } from 'reactstrap';
import TabProfile from './TabProfile';

class Profile extends Component {
  render() {
    return (
      <div>
        <h2>Profile Details</h2>
        <Row>
            <TabProfile />
        </Row>
      </div>
    )
  }
}

export default Profile;
