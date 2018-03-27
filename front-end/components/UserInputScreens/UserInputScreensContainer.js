import React, { Component } from 'react';
import UserInputScreens from './UserInputScreens';
import { screenWidth } from '../../utils/dimensions';
import AgeScreenContainer from '../AgeScreen/AgeScreenContainer';
import GenderScreenContainer from '../GenderScreen/GenderScreenContainer';
import SkinColorScreenContainer from '../SkinColorScreen/SkinColorScreenContainer';
import SkinTypeScreenContainer from '../SkinTypeScreen/SkinTypeScreenContainer';
import LocationScreenContainer from '../LocationScreen/LocationScreenContainer';
import { Button } from 'react-native-elements';

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

  onTouchNextScreen = () => {
    if (this.currentActiveItemIndex >= this.data.length - 1) {
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

export default UserInputScreensContainer;
