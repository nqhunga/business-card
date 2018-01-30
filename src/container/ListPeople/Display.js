import React from 'react'
import PropTypes from 'prop-types'
import { TableEx, ButtonEx, ButtonGroupEx, InputEx } from './ListPeople.style';



class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: this.props.person,
      index: this.props.index
    }
  }

  render () {
    var onEdit = this.props.onEdit;
    return (
      <tr key={this.state.index}>
        <th scope="row">{this.state.index+1}</th>
        <td><p>{`${this.state.person.firstName} ${this.state.person.surName}`}</p></td>
        <td>
          {this.state.person.gender.toUpperCase()}
        </td>
        <td>{this.state.person.email}</td>
        <td>{this.state.person.phone}</td>
        <td>{this.state.person.company}</td>
        <td>
          {
            this.state.person.hasOwnProperty('address') ?
            <p>{this.state.person.address}</p> :
            <p>{`${this.state.person.street}, ${this.state.person.state}, ${this.state.person.city}`}</p>
          }
        </td>
        <td>
          <ButtonGroupEx>
            <ButtonEx color="primary" onClick={() => onEdit(this.state.index)}>Edit</ButtonEx>
            <ButtonEx color="danger">Delete</ButtonEx>
          </ButtonGroupEx>
        </td>
      </tr>
    )

  }
}

export default Display;
