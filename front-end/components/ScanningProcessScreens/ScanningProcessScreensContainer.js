import React, { Component } from 'react';
import { screenWidth } from '../../utils/dimensions';
import ScanningProcessScreens from './ScanningProcessScreens';
import PrepScanningScreenContainer from '../PrepScanningScreen/PrepScanningScreenContainer';
import ScanningScreenContainer from '../ScanningScreen/ScanningScreenContainer';
import ScanningResultScreenContainer from '../ScanningResultScreen/ScanningResultScreenContainer';
import { connect } from 'react-redux';
import {
  startScanningAnimation,
  stopScanningAnimation
} from '../../actions/scanning_screen';
import _ from 'lodash';
import { getMyProfile } from '../../actions/user_info';

class ScanningProcessScreensContainer extends Component {
  currentActiveItemIndex = 0;
  flatListRef = null;

  moveToNextScreen = () => {
    this.currentActiveItemIndex += 1;
    // About to move to Scanning Screen, trigger animation
    if (this.currentActiveItemIndex === 1) {
      this.props.startScanningAnimation();
    }
    this.flatListRef.scrollToOffset({
      offset: this.currentActiveItemIndex * screenWidth
    });
  };

  onPressNextStepAfterScanningResult = async () => {
    await this.props.getMyProfile();
    if (_.isEmpty(this.props.myProfile)) {
      this.props.navigation.navigate('userInputContainer');
      return;
    }
    this.props.navigation.navigate('mainContainer');
  };

  screens = [
    {
      component: (
        <PrepScanningScreenContainer
          startAnalyzingHandle={this.moveToNextScreen}
        />
      ),
      id: 0
    },
    {
      component: (
        <ScanningScreenContainer
          onFinishScanning={() => {
            this.moveToNextScreen();
            this.props.stopScanningAnimation();
          }}
        />
      ),
      id: 1
    },
    {
      component: (
        <ScanningResultScreenContainer
          onPressNextStep={this.onPressNextStepAfterScanningResult}
        />
      ),
      id: 2
    }
  ];

  render() {
    return (
      <ScanningProcessScreens
        onGetFlatListRef={ref => (this.flatListRef = ref)}
        screens={this.screens}
      />
    );
  }
}

const mapStateToProps = state => ({
  myProfile: state.userInfo.myProfile
});

export default connect(mapStateToProps, {
  getMyProfile,
  startScanningAnimation,
  stopScanningAnimation
})(ScanningProcessScreensContainer);
