import React, { Component } from 'react';

class CyclistRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      address: '',
      contact: '',
      nextOfKinAddress: '',
      nextOfKinContact: '',
      registrationNo: '',
      stage: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleRegister = () => {
    // Create a new cyclist object with the registration data
    const newCyclist = {
      name: this.state.name,
      age: this.state.age,
      address: this.state.address,
      contact: this.state.contact,
      nextOfKinAddress: this.state.nextOfKinAddress,
      nextOfKinContact: this.state.nextOfKinContact,
      registrationNo: this.state.registrationNo,
      stage: this.state.stage,
    };

    // Call the addCyclist function passed from the App component to add the new cyclist
    this.props.addCyclist(newCyclist);

    // Clear the form inputs after registration
    this.setState({
      name: '',
      age: '',
      address: '',
      contact: '',
      nextOfKinAddress: '',
      nextOfKinContact: '',
      registrationNo: '',
      stage: '',
    });
  };

  render() {
    return (
      <div>
        <h2>Register a New Boda-Boda Cyclist</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.name}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              name="age"
              onChange={this.handleInputChange}
              value={this.state.age}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              onChange={this.handleInputChange}
              value={this.state.address}
            />
          </label>
          <label>
            Contact:
            <input
              type="text"
              name="contact"
              onChange={this.handleInputChange}
              value={this.state.contact}
            />
          </label>
          <label>
            Next of Kin Address:
            <input
              type="text"
              name="nextOfKinAddress"
              onChange={this.handleInputChange}
              value={this.state.nextOfKinAddress}
            />
          </label>
          <label>
            Next of Kin Contact:
            <input
              type="text"
              name="nextOfKinContact"
              onChange={this.handleInputChange}
              value={this.state.nextOfKinContact}
            />
          </label>
          <label>
            Registration No:
            <input
              type="text"
              name="registrationNo"
              onChange={this.handleInputChange}
              value={this.state.registrationNo}
            />
          </label>
          <label>
            Stage:
            <input
              type="text"
              name="stage"
              onChange={this.handleInputChange}
              value={this.state.stage}
            />
          </label>
          <button type="button" onClick={this.handleRegister}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default CyclistRegistration;
