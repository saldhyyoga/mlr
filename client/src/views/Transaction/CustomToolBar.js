// import React from "react";
// import IconButton from "@material-ui/core/IconButton";
// import Tooltip from "@material-ui/core/Tooltip";
// import AddIcon from "@material-ui/icons/Add";
// import { withStyles } from "@material-ui/core/styles";
// import { Link } from 'react-router-dom';

// const defaultToolbarStyles = {
//   iconButton: {
//   },
// };

// class CustomToolbar extends React.Component {

//   handleClick = () => {
//     console.log("clicked on icon!");
//   }

//   render() {
//     const { classes } = this.props;

//     return (
//       <React.Fragment>
        // <Tooltip title={"Tambah Data Karyawan"}>
        //   <IconButton className={classes.iconButton} onClick={this.handleClick}>
        //     <Link to="/add-employee-data" style={{color: 'black'}}><AddIcon className={classes.deleteIcon} /></Link>
        //   </IconButton>
        // </Tooltip>
//       </React.Fragment>
//     );
//   }

// }

// export default withStyles(defaultToolbarStyles, { name: "CustomToolbar" })(CustomToolbar);

import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './CustomToolBar.css';
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
      <Tooltip title={"Add Transaction"}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </DropdownToggle>
      <DropdownMenu>
        <Link to="/manual-transaction"><DropdownItem>Add Manual Transaction</DropdownItem></Link>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;

