import React, { Component } from 'react';
import UserInputScreens from './UserInputScreens';
import { screenWidth } from '../../utils/dimensions';
import AgeScreenContainer from '../AgeScreen/AgeScreenContainer';
import GenderScreenContainer from '../GenderScreen/GenderScreenContainer';
import SkinColorScreenContainer from '../SkinColorScreen/SkinColorScreenContainer';
import SkinTypeScreenContainer from '../SkinTypeScreen/SkinTypeScreenContainer';
import LocationScreenContainer from '../LocationScreen/LocationScreenContainer';
import RecommendationScreenContainer from '../RecommendationScreen/RecommendationScreenContainer';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { postUserInputs } from '../../actions/user_input';

class UserInputScreensContainer extends Component {
  data = [
    { component: <AgeScreenContainer />, id: 0 },
    { component: <GenderScreenContainer />, id: 1 },
    { component: <SkinColorScreenContainer />, id: 2 },
    { component: <SkinTypeScreenContainer />, id: 3 },
    { component: <LocationScreenContainer />, id: 4 },
    { component: <RecommendationScreenContainer />, id: 5 }
  ];
  flatListRef = null;

  state = {
    currentActiveItemIndex: 0
  };

  onTouchNextScreen = async () => {
    if (this.state.currentActiveItemIndex === 5) {
      this.props.navigation.navigate('mainContainer');
      return;
    }
    if (this.state.currentActiveItemIndex === 4) {
      // Finish input, attempt to save user input to db
      const { age, gender, skinType, skinColor, climate } = this.props;
      const response = await this.props.postUserInputs({
        name: 'Joe',
        age,
        gender,
        skinType,
        skinColor,
        climate
      });
      console.log(response.status);
      console.log(response.data);
    }
    const newIndex = this.state.currentActiveItemIndex + 1;
    this.setState({ currentActiveItemIndex: newIndex });
    this.flatListRef.scrollToOffset({
      offset: newIndex * screenWidth
    });
  };

  onTouchPrevScreen = () => {
    if (this.state.currentActiveItemIndex <= 0) {
      return;
    }
    const newIndex = this.state.currentActiveItemIndex - 1;
    this.setState({ currentActiveItemIndex: newIndex });
    this.flatListRef.scrollToOffset({
      offset: newIndex * screenWidth
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
        currentActiveItemIndex={this.state.currentActiveItemIndex}
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
