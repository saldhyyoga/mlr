import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import './UserManagement.css'
import Tooltip from "@material-ui/core/Tooltip";
import FindInPageIcon from '@material-ui/icons/FindInPage';
import { Button, Input, FormGroup } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{backgroundColor:'white', border: 'none', marginRight: 30}} caret>
      <Tooltip title={"Search All Data Transaction"}>
        <FindInPageIcon  />
      </Tooltip>
      </DropdownToggle>
      <DropdownMenu style={{marginLeft: -150,marginTop: -10, width: 250}}>
        <div>
          <FormGroup style={{
            marginTop: 10, marginLeft: 10,
            display: 'flex', flexDirection: 'column'
          }}>
          <Input style={{width: 210}} type="select" name="select" id="exampleSelect">
            <option value="" disabled selected>Filter</option>
            <option>Username</option>
            <option>Merchant Name</option>
            <option>Phone</option>
          </Input>
          <Input style={{width: 210, marginTop: 10}} type="text" placeholder="Data yang dicari" />
          </FormGroup>
        </div>
          <Button style={{marginLeft: 10, marginBottom: 10, width: 100}} color="primary">Filter</Button>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;

