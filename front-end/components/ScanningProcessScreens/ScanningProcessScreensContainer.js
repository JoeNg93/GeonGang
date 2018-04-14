import React, { Component } from 'react';
import { screenWidth } from '../../utils/dimensions';
import ScanningProcessScreens from './ScanningProcessScreens';
import PrepScanningScreenContainer from '../PrepScanningScreen/PrepScanningScreenContainer';
import ScanningScreenContainer from '../ScanningScreen/ScanningScreenContainer';
import ScanningResultScreenContainer from '../ScanningResultScreen/ScanningResultScreenContainer';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getMyProfile } from '../../actions/user_info';

class ScanningProcessScreensContainer extends Component {
  currentActiveItemIndex = 0;
  flatListRef = null;

  moveToNextScreen = () => {
    this.currentActiveItemIndex += 1;
    this.flatListRef.scrollToOffset({
      offset: this.currentActiveItemIndex * screenWidth
    });
  };

  onPressNextStepAfterScanningResult = async () => {
    await this.props.getMyProfile();
    if (_.isEmpty(this.props.userInfo)) {
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
        <ScanningScreenContainer onFinishScanning={this.moveToNextScreen} />
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
  userInfo: state.userInfo.userInfo
});

export default connect(mapStateToProps, { getMyProfile })(
  ScanningProcessScreensContainer
);
