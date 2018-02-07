import React from 'react';

import { ButtonEx, FormEx, FormGroupEx,
  LabelEx, InputEx, ColEx } from './AddNew.style';
import PlacesAutocomplete from 'react-places-autocomplete'
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import {FormErrors} from './FormErrors';

class AddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      firstName: '',
      surName: '',
      about: '',
      company: '',
      email: '',
      phone: '',
      gender: 'male',
      tags: [],
      address: '',
      tagsInputValue: '',
      formErrors: {
        firstName: '',
        surName: '',
        company: '',
        email: '',
        phone: '',
        address: ''
      },
      firstNameValid: false,
      surNameValid: false,
      companyValid: false,
      emailValid: false,
      phoneValid: false,
      addressValid: false
    };
    this.onChange = (address) => {
      let check = this.state.addressValid;
      if (address !== "") {
       check = true
      }
      this.setState({ address,
        addressValid: check
      })};
    this.change = this.change.bind(this);
  }

  change = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    },
    () => { this.validateField(name, value)
     }

  );
  };

  validateField(fieldName, value) {
  let fieldValidationErrors = this.state.formErrors;
  let emailValid = this.state.emailValid;
  let firstNameValid = this.state.firstNameValid;
  let surNameValid = this.state.surNameValid;
  let companyValid = this.state.companyValid;
  let addressValid = this.state.addressValid;
  let phoneValid = this.state.phoneValid;

  switch(fieldName) {
    case 'email':
      emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) !== null;
      fieldValidationErrors.email = emailValid ? '' : ' is invalid';
      break;
    case 'firstName':
      firstNameValid = firstNameValid !== "";
      fieldValidationErrors.firstName = firstNameValid ? '': ' is missing';
      break;
    case 'surName':
        surNameValid = surNameValid !== "";
        fieldValidationErrors.surName = surNameValid ? '': ' is missing';
        break;
    case 'company':
        companyValid = companyValid !== "";
        fieldValidationErrors.company = companyValid ? '': ' is missing';
        break;

    case 'phone':
        phoneValid = value.match(/^[+#*\(\)\[\]]*([0-9][ ext+-pw#*\(\)\[\]]*){6,45}$/) !== null;
        fieldValidationErrors.phone = phoneValid ? '': ' is invalid';
        break;
    default:
      break;
  }
  this.setState({formErrors: fieldValidationErrors,
                  firstNameValid: firstNameValid,
                  surNameValid: surNameValid,
                  companyValid: companyValid,
                  emailValid: emailValid,
                  phoneValid: phoneValid,
                  addressValid: addressValid
                }, this.validateForm );
}

validateForm() {
  let check = this.state.emailValid && this.state.firstNameValid
                            && this.state.surNameValid && this.state.companyValid
                            && this.state.phoneValid  && this.state.addressValid;
this.setState({formValid: check}, () => console.log(this.state.addressValid));
}

errorClass(error) {
   return(error.length === 0 ? true : false);
}


  handleChange(tags) {
    this.setState({tags});
  }

  onSubmit = e => {
    this.props.onSubmit(this.state);
    this.setState({
      firstName: '',
      surName: '',
      about: '',
      company: '',
      email: '',
      phone: '',
      gender: 'male',
      tags: [],
      address: '',

    });

  }

  render () {

    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <FormEx>

        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        <FormGroupEx row>
          <LabelEx for="firstName" sm={2}>First Name</LabelEx>
          <ColEx sm={10}>
            <InputEx valid={this.errorClass(this.state.formErrors.firstName)}
              type="text"
              name="firstName"
              id="firstName"
              value={this.state.firstName}
              onChange={e => this.change(e)}
              />

          </ColEx>
        </FormGroupEx>

        <FormGroupEx row >
          <LabelEx for="surName" sm={2} >Last Name</LabelEx>
          <ColEx sm={10}>
            <InputEx valid={this.errorClass(this.state.formErrors.surName)}
              type="text"
              name="surName"
              id="surName"
              value={this.state.surName}
              onChange={e => this.change(e)}
              ></InputEx>
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row>
          <LabelEx for="address" sm={2}>Address</LabelEx>
          <ColEx sm={10}>
            <PlacesAutocomplete valid={this.errorClass(this.state.formErrors.email)}
              inputProps={inputProps}
              id="address"
              name="address"
              />
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row>
          <LabelEx for="company" sm={2}
            >Company</LabelEx>
          <ColEx sm={10}>
            <InputEx valid={this.errorClass(this.state.formErrors.company)}
              type="text"
              name="company"
              id="company"
              value={this.state.company}
              onChange={e => this.change(e)}
              ></InputEx>
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row>
          <LabelEx for="phone" sm={2}
            >Phone</LabelEx>
          <ColEx sm={10}>
            <InputEx valid={this.errorClass(this.state.formErrors.phone)}
              type="phone"
              name="phone"
              id="phone"
              value={this.state.phone}
              onChange={e => this.change(e)}
              ></InputEx>
          </ColEx>
        </FormGroupEx>

        <FormGroupEx row >
          <LabelEx for="email" sm={2}
            >Email</LabelEx>
          <ColEx sm={10}>
            <InputEx valid={this.errorClass(this.state.formErrors.email)}
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={e => this.change(e)} required
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

        <FormGroupEx row >
          <LabelEx for="about" sm={2}
            >About</LabelEx>
          <ColEx sm={10}>
            <InputEx
              type="textarea"
              name="about"
              id="about"
              value={this.state.about}
              onChange={e => this.change(e)}
              ></InputEx>
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

        <ButtonEx onClick={e => this.onSubmit(e)}
          disabled={!this.state.formValid}
          >Submit</ButtonEx>
      </FormEx>
    );
  }
}



export default AddNew;
