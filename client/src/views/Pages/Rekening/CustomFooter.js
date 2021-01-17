import React from "react";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const defaultFooterStyles = {
};

class CustomFooter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
       page: 1
    }
  }

  render() {

    return (
      <TableFooter>
        <TableRow style={{textAlign: 'center', height: '40px'}} >
          <div style={{margin: 'auto', marginTop: 5}}>
            <div>
              {/* Rows per page &nbsp;
              <select
                style={{backgroundColor: 'white', border: 'white', marginRight: 15}}
                defaultValue={10}
                // onChange={handleChange}
                // displayEmpty
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select> */}
              <span>
                Page &nbsp;
                <button onClick={this.props.substract} disabled={this.props.page === 1 ? true: false} style={{border: 'none', backgroundColor: 'white'}}><ArrowBackIcon style={{fontSize: 13, fontWeight: 'bold', cursor: 'pointer'}} /></button>
                <input value={this.props.page} style={{width: 20, textAlign: 'center', marginLeft: 5, marginRight: 5}} />
                <button onClick={this.props.add} style={{border: 'none', backgroundColor: 'white'}}><ArrowForwardIcon style={{fontSize: 13, fontWeight: 'bold', cursor: 'pointer'}} /></button>
              </span>
            </div>
          </div>
        </TableRow>
      </TableFooter>
    );
  }

}

export default withStyles(defaultFooterStyles, { name: "CustomFooter" })(CustomFooter);
