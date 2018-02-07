import React from 'react'
import PropTypes from 'prop-types'
import { TableEx, ButtonEx, ButtonGroupEx, InputEx } from './ListPeople.style';
import PlacesAutocomplete from 'react-places-autocomplete'


class Editable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: this.props.person,
      firstName: this.props.person.firstName,
      surName: this.props.person.surName,
      company: this.props.person.company,
      email: this.props.person.email,
      phone: this.props.person.phone,
      address: `${this.props.person.street} ${this.props.person.state} ${this.props.person.city}`,
      gender: this.props.person.gender,
      about: this.props.person.about,
      tags: this.props.person.tags,
      index: this.props.index
    }
    this.onChange = (address) => this.setState({ address });
    this.change = this.change.bind(this);
    console.log(this.state.person);
  }

  change(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render () {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <tr key={this.state.index}>
        <td>
          <InputEx
            type="text"
            name="firstName"
            id="firstName"
            value={this.state.firstName}
            onChange={e => this.change(e)}
            ></InputEx>
        </td>
        <td>
          <InputEx
            type="text"
            name="surName"
            id="surName"
            value={this.state.surName}
            onChange={e => this.change(e)}
            ></InputEx>
        </td>
        <td>
          <InputEx
            type="text"
            name="company"
            id="company"
            value={this.state.company}
            onChange={e => this.change(e)}
            ></InputEx>
        </td>
        <td>
          <InputEx
            type="phone"
            name="phone"
            id="phone"
            value={this.state.phone}
            onChange={e => this.change(e)}
            ></InputEx>
        </td>
        <td>
          <InputEx
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={e => this.change(e)}
            ></InputEx>
        </td>
        <td>
          <InputEx
            type="select"
            name="gender"
            id="genderSelect"
            value={this.state.gender}
            onChange={e => this.change(e)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
          </InputEx>
        </td>
        <td>
          <PlacesAutocomplete
            inputProps={inputProps}
            id="address"
            name="address"
            onFocus={e => e.target.value = ''}
            />
        </td>
      </tr>
    )


  }
}

export default Editable;
