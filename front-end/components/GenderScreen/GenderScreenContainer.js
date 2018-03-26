import React, { Component } from 'react';
import GenderScreen from './GenderScreen';
import { connect } from 'react-redux';
import { setGender } from '../../actions/userInput';

class GenderScreenContainer extends Component {
  render() {
    console.log(this.props.gender);
    return (
      <GenderScreen
        gender={this.props.gender}
        onTouchMaleBtn={() => this.props.setGender('male')}
        onTouchFemaleBtn={() => this.props.setGender('female')}
        onTouchUnknownBtn={() => this.props.setGender('unknown')}
      />
    );
  }
}

const mapStateToProps = state => ({
  gender: state.userInput.gender
});

export default connect(mapStateToProps, { setGender })(GenderScreenContainer);
