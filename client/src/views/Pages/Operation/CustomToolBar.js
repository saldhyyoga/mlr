import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Operation.css'
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { Link } from 'react-router-dom';

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle style={{backgroundColor:'white', border: 'none'}} caret>
      <Tooltip title={"Tambah Data User (Operation)"}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </DropdownToggle>
      <DropdownMenu style={{marginLeft: -80}}>
        <Link to="/add-user"><DropdownItem>Tambah Data User</DropdownItem></Link>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;

