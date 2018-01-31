import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';
import { TableEx, ButtonEx, ButtonGroupEx, InputEx } from './ListPeople.style';
import RowContainer from './RowContainer';
import Editable from './Editable';


class ListPeople extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.dataPeople,
      editing: null
    }

  }

  onSave = (newRow) => {
    this.props.onEdit(newRow);
  }

  onDelete = (thisRow) => {
    this.props.onDelete(thisRow);
  }

  render () {
    return (
      <TableEx responsive hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Sur Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((person, index) => (
            <RowContainer key={index} numList={index} data={person}
              onSave={newRow => this.onSave(newRow)} onDelete={thisRow => this.onDelete(thisRow)}/>
          ))}
        </tbody>

      </TableEx>
    );
  }
}

export default ListPeople;
