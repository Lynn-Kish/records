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
    // Create a cyclist object from the state
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

    // Call the function passed from the App component to add the cyclist
    this.props.addCyclist(newCyclist);

    // Clear the input fields after registration
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
            <input type="text" name="name" onChange={this.handleInputChange} value={this.state.name} />
          </label>
          {/* Add similar input fields for other cyclist information */}
          <button type="button" onClick={this.handleRegister}>Register</button>
        </form>
      </div>
    );
  }
}

export default CyclistRegistration;
