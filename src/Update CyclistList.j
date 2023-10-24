import React, { Component } from 'react';
import EditCyclist from './EditCyclist';
import DeleteCyclist from './DeleteCyclist';

class CyclistList extends Component {
  // ... (same constructor and handle methods as before)

  render() {
    const cyclists = this.props.cyclists.map((cyclist, index) => (
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
        {this.state.showEditForm && (
          <EditCyclist cyclist={this.state.editCyclist} saveEditedCyclist={this.saveEditedCyclist} />
        )}
        {this.state.showDeleteForm && (
          <DeleteCyclist cyclist={this.state.deleteCyclist} onDelete={this.deleteCyclist} />
        )}
      </div>
    );
  }
}

export default CyclistList;
