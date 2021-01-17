import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
      <Tooltip title={"Tambah Data Rekening"}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </DropdownToggle>
      <DropdownMenu style={{marginLeft: -90}}>
        <Link to="/create-rekening"><DropdownItem>Tambah Data Rekening</DropdownItem></Link>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;

