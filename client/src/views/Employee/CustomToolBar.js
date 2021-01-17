import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './Employee.css'
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
      <Tooltip title={"Tambah Data Karyawan"}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </DropdownToggle>
      <DropdownMenu>
        <Link to="/add-employee-data-form"><DropdownItem>Form Input</DropdownItem></Link>
        <Link to="/add-employee-data-upload"><DropdownItem>Upload File Excel</DropdownItem></Link>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;

