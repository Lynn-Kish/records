import React, { Component } from 'react';

class DataChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedData: [], // Stores checked cyclist data
    };
  }

  checkData = () => {
    // Simulate data checking logic (you can replace this with your own logic)
    const checkedCyclists = this.props.cyclists.map((cyclist) => {
      const isChecked = Math.random() < 0.5; // Simulate random checking

      return {
        ...cyclist,
        isChecked,
      };
    });

    this.setState({ checkedData: checkedCyclists });
  };

  render() {
    const { checkedData } = this.state;

    return (
      <div className="DataChecker">
        <h2>Data Checker</h2>
        <button onClick={this.checkData}>Check Data</button>
        <div>
          {checkedData.map((cyclist, index) => (
            <div key={index} className="CheckedCyclist">
              <p>Name: {cyclist.name}</p>
              <p>Age: {cyclist.age}</p>
              {/* Display more cyclist details */}
              <p>
                Checked: {cyclist.isChecked ? 'Checked' : 'Not Checked'}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DataChecker;
