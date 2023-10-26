import React, { Component } from 'react';

class CyclistList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cyclists: [],
    };
  }

  handleDelete = (index) => {
    // Handle deletion logic, e.g., remove the cyclist from the list
  };

  handleEdit = (index) => {
    // Handle edit logic, e.g., open a modal for editing
  };

  render() {
    const cyclists = this.state.cyclists.map((cyclist, index) => (
      <div key={index}>
        <p>Name: {cyclist.name}</p>
        {/* Display other cyclist information */}
        <button type="button" onClick={() => this.handleEdit(index)}>Edit</button>
        <button type="button" onClick={() => this.handleDelete(index)}>Delete</button>
      </div>
    ));

    return (
      <div>
        <h2>Registered Boda-Boda Cyclists</h2>
        {cyclists}
      </div>
    );
  }
}

export default CyclistList;