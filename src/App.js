import React, { Component } from 'react';
import './App.css';
import CyclistRegistration from './CyclistRegistration';
import CyclistList from './CyclistList';
import EditCyclist from './EditCyclist';
import DeleteCyclist from './DeleteCyclist';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cyclists: [],
      showEditForm: false,
      showDeleteForm: false,
      editCyclist: null,
      deleteCyclist: null,
    };
  }

  addCyclist = (cyclist) => {
    this.setState((prevState) => ({
      cyclists: [...prevState.cyclists, cyclist],
    }));
  };

  handleEdit = (index) => {
    this.setState({
      showEditForm: true,
      editCyclist: this.state.cyclists[index],
    });
  };

  handleDelete = (index) => {
    this.setState({
      showDeleteForm: true,
      deleteCyclist: this.state.cyclists[index],
    });
  };

  saveEditedCyclist = (editedCyclist) => {
    // Handle the logic to update cyclist data in your state or backend
    this.setState((prevState) => ({
      showEditForm: false,
      editCyclist: null,
      cyclists: prevState.cyclists.map((cyclist) =>
        cyclist === this.state.editCyclist ? editedCyclist : cyclist
      ),
    }));
  };

  deleteCyclist = () => {
    // Handle the logic to delete a cyclist from your state or backend
    this.setState((prevState) => ({
      showDeleteForm: false,
      deleteCyclist: null,
      cyclists: prevState.cyclists.filter((cyclist) => cyclist !== this.state.deleteCyclist),
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>KCCA BODA-BODA CYCLISTS RECORDS</h1>
        <CyclistRegistration addCyclist={this.addCyclist} />
        <CyclistList
          cyclists={this.state.cyclists}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
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

export default App;
