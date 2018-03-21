import React, { Component } from 'react';
import AgeScreen from './AgeScreen';

class AgeScreenContainer extends Component {
  state = {
    age: 0
  };

  render() {
    return (
      <AgeScreen
        age={this.state.age}
        onAgeChange={newAge => this.setState({ age: newAge })}
      />
    );
  }
}

export default AgeScreenContainer;
