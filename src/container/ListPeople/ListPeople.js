import React from 'react';
import { TableEx } from './ListPeople.style';
import RowContainer from './RowContainer';


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


export default ListPeople;
