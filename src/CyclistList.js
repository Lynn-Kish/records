import React, { Component } from 'react';

class CyclistList extends Component {
  render() {
    const { cyclists, handleEdit, handleDelete } = this.props;

    const cyclistItems = cyclists.map((cyclist, index) => (
      <div key={index}>
        <p>Name: {cyclist.name}</p>
        {/* Display other cyclist information */}
        <button type="button" onClick={() => handleEdit(index)}>Edit</button>
        <button type="button" onClick={() => handleDelete(index)}>Delete</button>
      </div>
    ));

    return (
      <div>
        <h2>Registered Boda-Boda Cyclists</h2>
        {cyclistItems}
      </div>
    );
  }
}

export default CyclistList;
