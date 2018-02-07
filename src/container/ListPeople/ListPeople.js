import React from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete from 'react-places-autocomplete';
import { TableEx, ButtonEx, ButtonGroupEx, InputEx } from './ListPeople.style';
import RowContainer from './RowContainer';
import Editable from './Editable';


class ListPeople extends React.Component {
  render () {
    const {people, onSave, onDelete} = this.props;
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
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.people.map(person => (
            <RowContainer key={person.email} data={person}
              onSave={onSave} onDelete={onDelete}/>
          ))}
        </tbody>

      </TableEx>
    );
  }
}

ListPeople.propTypes = {
  // Add proptypes here for validation
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired
  })
}

export default ListPeople;
