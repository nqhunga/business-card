import React from 'react';
import PropTypes from 'prop-types';
import { ButtonEx, FormEx, FormGroupEx, LabelEx, InputEx, FormTextEx, ColEx } from './AddNew.style';
import PlacesAutocomplete from 'react-places-autocomplete'
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

class AddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      surName: '',
      about: '',
      company: '',
      email: '',
      phone: '',
      tags: [],
      address: '',
      tagsInputValue: ''
    };
    this.onChange = (address) => this.setState({ address });
    this.change = this.change.bind(this);
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange(tags) {
    this.setState({tags});
  }

  onSubmit = e => {
    this.props.onSubmit(this.state);

  }

  render () {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <FormEx>

        <FormGroupEx row>
          <LabelEx for="firstName" sm={2}>First Name</LabelEx>
          <ColEx sm={10}>
            <InputEx
              type="text"
              name="firstName"
              id="firstName"
              value={this.state.firstName}
              onChange={e => this.change(e)}
              ></InputEx>
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row>
          <LabelEx for="surName" sm={2}>Last Name</LabelEx>
          <ColEx sm={10}>
            <InputEx
              type="text"
              name="surName"
              id="surName"
              value={this.state.surName}
              onChange={e => this.change(e)}
              ></InputEx>
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row>
          <LabelEx for="company" sm={2}>Company</LabelEx>
          <ColEx sm={10}>
            <InputEx
              type="text"
              name="company"
              id="company"
              value={this.state.company}
              onChange={e => this.change(e)}
              ></InputEx>
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row>
          <LabelEx for="phone" sm={2}>Phone</LabelEx>
          <ColEx sm={10}>
            <InputEx
              type="phone"
              name="phone"
              id="phone"
              value={this.state.phone}
              onChange={e => this.change(e)}
              ></InputEx>
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row>
          <LabelEx for="email" sm={2}>Email</LabelEx>
          <ColEx sm={10}>
            <InputEx
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={e => this.change(e)}
              ></InputEx>
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row>
          <LabelEx for="genderSelect" sm={2}>Gender</LabelEx>
          <ColEx sm={10}>
            <InputEx
              type="select"
              name="gender"
              id="genderSelect"
              value={this.state.gender}
              onChange={e => this.change(e)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </InputEx>
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row>
          <LabelEx for="address" sm={2}>Address</LabelEx>
          <ColEx sm={10}>
            <PlacesAutocomplete
              inputProps={inputProps}
              id="address"
              name="address"
              />
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row>
          <LabelEx for="tags" sm={2}>Tags</LabelEx>
          <ColEx sm={10}>
            <TagsInput
              id="tags"
              value={this.state.tags}
              onChange={this.handleChange.bind(this)}
              name="tags"
              inputProps={{
                placeholder: 'Tab to add'
              }}
              />
          </ColEx>
        </FormGroupEx>

        <ButtonEx onClick={e => this.onSubmit(e)}>Submit</ButtonEx>
      </FormEx>
    );
  }
}

export default AddNew;
