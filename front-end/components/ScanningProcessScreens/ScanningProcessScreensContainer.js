import React, { Component } from 'react';
import { screenWidth } from '../../utils/dimensions';
import ScanningProcessScreens from './ScanningProcessScreens';
import PrepScanningScreenContainer from '../PrepScanningScreen/PrepScanningScreenContainer';
import ScanningScreenContainer from '../ScanningScreen/ScanningScreenContainer';
import ScanningResultScreenContainer from '../ScanningResultScreen/ScanningResultScreenContainer';

class ScanningProcessScreensContainer extends Component {
  currentActiveItemIndex = 0;
  flatListRef = null;

  moveToNextScreen = () => {
    this.currentActiveItemIndex += 1;
    this.flatListRef.scrollToOffset({
      offset: this.currentActiveItemIndex * screenWidth
    });
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
          onPressNextStep={() =>
            this.props.navigation.navigate('userInputContainer')}
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

export default ScanningProcessScreensContainer;
