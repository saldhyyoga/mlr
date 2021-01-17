import React, {Component} from "react";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class CustomFooter extends Component {
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

export default CustomFooter;
