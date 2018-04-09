import React, { Component } from 'react';
import UserInputScreens from './UserInputScreens';
import { screenWidth } from '../../utils/dimensions';
import AgeScreenContainer from '../AgeScreen/AgeScreenContainer';
import GenderScreenContainer from '../GenderScreen/GenderScreenContainer';
import SkinColorScreenContainer from '../SkinColorScreen/SkinColorScreenContainer';
import SkinTypeScreenContainer from '../SkinTypeScreen/SkinTypeScreenContainer';
import LocationScreenContainer from '../LocationScreen/LocationScreenContainer';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { postUserInputs } from '../../actions/userInput';

class UserInputScreensContainer extends Component {
  data = [
    { component: <AgeScreenContainer />, id: 0 },
    { component: <GenderScreenContainer />, id: 1 },
    { component: <SkinColorScreenContainer />, id: 2 },
    { component: <SkinTypeScreenContainer />, id: 3 },
    { component: <LocationScreenContainer />, id: 4 }
  ];
  currentActiveItemIndex = 0;
  flatListRef = null;

  onTouchNextScreen = async () => {
    if (this.currentActiveItemIndex === 4) {
      // Last screen, attempt to save user input to db
      const { age, gender, skinType, skinColor, climate } = this.props;
      const response = await this.props.postUserInputs({
        name: 'Joe',
        age,
        gender,
        skinType,
        skinColor,
        climate
      });
      return;
    }
    this.currentActiveItemIndex += 1;
    this.flatListRef.scrollToOffset({
      offset: this.currentActiveItemIndex * screenWidth
    });
  };

  onTouchPrevScreen = () => {
    if (this.currentActiveItemIndex <= 0) {
      return;
    }
    this.currentActiveItemIndex -= 1;
    this.flatListRef.scrollToOffset({
      offset: this.currentActiveItemIndex * screenWidth
    });
  };

  render() {
    return (
      <UserInputScreens
        data={this.data}
        onGetFlatListRef={ref => {
          this.flatListRef = ref;
        }}
        onTouchNextScreen={this.onTouchNextScreen}
        onTouchPrevScreen={this.onTouchPrevScreen}
      />
    );
  }
}

const mapStateToProps = state => ({
  age: state.userInput.age,
  gender: state.userInput.gender,
  skinColor: state.userInput.skinColor,
  skinType: state.userInput.skinType,
  climate: state.userInput.climate
});

export default connect(mapStateToProps, { postUserInputs })(
  UserInputScreensContainer
);
