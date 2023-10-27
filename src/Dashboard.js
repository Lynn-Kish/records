import React, { Component } from 'react';
import './Dashboard.css';
import CyclistRegistration from './CyclistRegistration';
import CyclistList from './CyclistList';
import DataChecker from './DataChecker';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cyclists: [],
      isChecking: false,
    };
  }

  addCyclist = (newCyclist) => {
    this.setState((prevState) => ({
      cyclists: [...prevState.cyclists, newCyclist],
    }));
  };

  toggleChecking = () => {
    this.setState((prevState) => ({
      isChecking: !prevState.isChecking,
    }));
  };

  render() {
    const { cyclists, isChecking } = this.state;

    return (
      <div className="Dashboard">
        <h1>Boda-Boda Cyclist Dashboard</h1>
        <button onClick={this.toggleChecking}>
          {isChecking ? 'Stop Checking' : 'Start Checking'}
        </button>
        <CyclistRegistration addCyclist={this.addCyclist} />
        <CyclistList cyclists={cyclists} isChecking={isChecking} />
        {isChecking && <DataChecker cyclists={cyclists} />}
      </div>
    );
  }
}

export default Dashboard;
