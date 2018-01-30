import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';
import { TableEx, ButtonEx, ButtonGroupEx, InputEx } from './ListPeople.style';
import Display from './Display';
import Editable from './Editable';


class ListPeople extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.dataPeople,
      editing: null
    }

    this.onEdit = this.onEdit.bind(this);
    console.log('ListPeople',this.state);
  }

  onEdit(index) {
    this.setState({ editing: index}, () => {
      console.log(this.state.editing);
    });
  }

  shouldComponentUpdate(nextState) {
    if (nextState.editing !== null) {
      return true;
    }
  }

  render () {
    var onEdit = this.onEdit;


    return (
      <TableEx responsive hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((person, index) => (
            this.state.editing === {index} ?
              <Editable key = {index} person={person} index={index}/> :
              <Display key = {index} person={person} index={index}
                onEdit = {index => this.onEdit(index)}/>
          ))}
        </tbody>

      </TableEx>
    );
  }
}

export default ListPeople;
