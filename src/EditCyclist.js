import React, { Component } from 'react';

class EditCyclist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedCyclist: { ...this.props.cyclist }, // Initialize with the cyclist's data
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      editedCyclist: {
        ...prevState.editedCyclist,
        [name]: value,
      },
    }));
  };

  handleSave = () => {
    // Call a function passed from the App component to save the edited cyclist data
    this.props.saveEditedCyclist(this.state.editedCyclist);
  };

  render() {
    return (
      <div>
        <h2>Edit Boda-Boda Cyclist</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleInputChange}
              value={this.state.editedCyclist.name}
            />
          </label>
          {/* Add similar input fields for other cyclist information */}
          <button type="button" onClick={this.handleSave}>
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default EditCyclist;
