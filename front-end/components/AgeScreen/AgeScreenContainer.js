import React, { Component } from 'react';
import AgeScreen from './AgeScreen';
import { connect } from 'react-redux';
import { setAge } from '../../actions/userInput';

class AgeScreenContainer extends Component {
  render() {
    return (
      <AgeScreen
        age={this.props.age}
        onAgeChange={newAge => this.props.setAge(newAge)}
      />
    );
  }
}

const mapStateToProps = state => ({
  age: state.userInput.age
});

export default connect(mapStateToProps, { setAge })(AgeScreenContainer);
