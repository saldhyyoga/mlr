import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import Tooltip from "@material-ui/core/Tooltip";
import FindInPageIcon from '@material-ui/icons/FindInPage';
import { Button, Input, FormGroup } from 'reactstrap';
import './Transaction.css';

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{backgroundColor:'white', border: 'none', marginRight: 30}} caret>
      <Tooltip title={"Search All Data Transaction"}>
        <i className="fa fa-search"></i>
      </Tooltip>
      </DropdownToggle>
      <DropdownMenu style={{marginLeft: -150,marginTop: -10, width: 250}}>
        <div>
          <FormGroup style={{
            marginTop: 10, marginLeft: 10,
            display: 'flex', flexDirection: 'column'
          }}>
          <Input onChange={e => props.addFilterBy(e.target.value)} style={{width: 210}} type="select" name="select" id="exampleSelect">
            <option value="" disabled selected>Filter</option>
            <option value="bill_id">Bill_ID</option>
            <option value="ref_id">Ref_ID</option>
            <option value="ref_id2">Ref_ID2</option>
            <option value="subscribe_id">Subscribe_ID</option>
            {/* <option>Date_Time</option> */}
          </Input>
          <Input onChange={e => props.addFilterValue(e.target.value)} style={{width: 210, marginTop: 10}} type="text" placeholder="Data yang dicari" />
          </FormGroup>
        </div>
          <Button onClick={() => {
            props.addFilterTrue();
            toggle();
            }}
            style={{marginLeft: 10, marginBottom: 10, width: 100}}
            color="primary"
          >Filter
          </Button>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;
