import React, {Component} from 'react';
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane
} from 'reactstrap';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import About from './About';

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }

  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }

  tabPane() {
    return (
      <>
        <TabPane tabId="1">
          <EditProfile />
        </TabPane>
        <TabPane tabId="2">
          <ChangePassword />
        </TabPane>
        <TabPane tabId="3">
          <About />
        </TabPane>
      </>
    );
  }

  render() {
    return (
      <div className="animated fadeIn" style={{marginBottom: 15}} >
        <Row>
          <Col xl="12" xs="12" md="12" lg="12" >
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                 <i class="icon-note"></i>Edit Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                 <i class="icon-lock"></i> Change Password
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent xl="12" xs="12" md="6" lg="12" activeTab={this.state.activeTab[0]} >
              {this.tabPane()}
            </TabContent>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Tabs;
