import React from 'react'
import PropTypes from 'prop-types'
import { TableEx, ButtonEx, ButtonGroupEx, InputEx } from './ListPeople.style';
import PlacesAutocomplete from 'react-places-autocomplete'



class RowContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.data.firstName,
      surName: this.props.data.surName,
      company: this.props.data.company,
      email: this.props.data.email,
      phone: this.props.data.phone,
      street: this.props.data.street,
      state: this.props.data.state,
      city: this.props.data.city,
      address: this.props.data.address,
      gender: this.props.data.gender,
      isEditing: false,
    }
    this.change = this.change.bind(this);
    this.onChange = (address) => this.setState({ address });
  }

  onEdit(){
    this.setState({
      isEditing: true
    });
  }

  onCancel(){
    this.setState({
      isEditing: false
    });
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSave = e => {
    this.props.onSave(this.state);
    this.setState({
      isEditing: false
    });

  }

  onDelete = e => {
    this.props.onDelete(this.state);
  }

  renderRow(isEditing) {
    let addressValue = (this.state.address !== undefined) ?
                        this.state.address : `${this.state.street} ${this.state.state} ${this.state.city}`;

    const inputProps = {
      value: addressValue,
      onChange: this.onChange
    }

    switch(isEditing) {
      case true:
        return(
          [
            <td key="firstName">
              <InputEx
                type="text"
                name="firstName"
                id="firstName"
                value={this.state.firstName}
                onChange={e => this.change(e)}
                ></InputEx>
            </td>,
            <td key="surName">
              <InputEx
                type="text"
                name="surName"
                id="surName"
                value={this.state.surName}
                onChange={e => this.change(e)}
                ></InputEx>
            </td>,
            <td key="gender">
              <InputEx
                type="select"
                name="gender"
                id="genderSelect"
                value={this.state.gender}
                onChange={e => this.change(e)}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
              </InputEx>
            </td>,
            <td key="email">
              <InputEx
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={e => this.change(e)}
                ></InputEx>
            </td>,
            <td key="phone">
              <InputEx
                type="phone"
                name="phone"
                id="phone"
                value={this.state.phone}
                onChange={e => this.change(e)}
                ></InputEx>
            </td>,
            <td key="company">
              <InputEx
                type="text"
                name="company"
                id="company"
                value={this.state.company}
                onChange={e => this.change(e)}
                ></InputEx>
            </td>,


            <td key="address">
              <PlacesAutocomplete
                inputProps={inputProps}
                id="address"
                name="address"
                className="form-control"
                />
            </td>,
            <td key="buttonEdit">
              <ButtonGroupEx>
                <ButtonEx color="primary" onClick={e => this.onSave(e)}>Save</ButtonEx>
                <ButtonEx color="danger" onClick={e => this.onCancel(e)}>Cancel</ButtonEx>
              </ButtonGroupEx>
            </td>
          ]
        )


      case false:
        return(
          [
            <td key="firstName">{this.state.firstName}</td>,
            <td key="surName">{this.state.surName}</td>,
            <td key="gender">
              {this.state.gender.toUpperCase()}
            </td>,
            <td key="email">{this.state.email}</td>,
            <td key="phone">{this.state.phone}</td>,
            <td key="company">{this.state.company}</td>,
            <td key="address">
              {
                this.state.address !== undefined ?
                <p>{this.state.address}</p> :
                <p>{`${this.state.street}, ${this.state.state}, ${this.state.city}`}</p>
              }
            </td>,
            <td key="buttonEdit">
              <ButtonGroupEx>
                <ButtonEx color="primary" onClick={(e) => this.onEdit(e)}>Edit</ButtonEx>
                <ButtonEx color="danger" onClick={(e) => this.onDelete(e)}>Delete</ButtonEx>
              </ButtonGroupEx>
            </td>
          ]
        )


    }
  }

  render () {
    return (
      <tr key={this.state.firstName}>
        { this.renderRow(this.state.isEditing) }
      </tr>
    )

  }


}

export default RowContainer;
