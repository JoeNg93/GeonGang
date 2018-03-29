import React, { Component } from 'react';
import colorCode from '../../utils/colorCode';
import ScanningResultScreen from './ScanningResultScreen';

class ScanningResultScreenContainer extends Component {
  overallScore = {
    score: 67.8,
    scoreTag: 'moderate',
    scoreTagColor: colorCode.moderateTag,
    lightVersion: false,
    displayRow: true
  };
  skinConditionResult = {
    moistureScore: 45,
    dirtScore: 62,
    uvScore: 88,
    pigmentScore: 20,
    recommendText:
      'Your skin is thisty, tired with lots of dirts and oil. We recommend cleaning your face and moisturizing before go to bed.'
  };

  render() {
    return (
      <ScanningResultScreen
        score={this.overallScore.score}
        scoreTag={this.overallScore.scoreTag}
        scoreTagColor={this.overallScore.scoreTagColor}
        lightVersion={this.overallScore.lightVersion}
        displayRow={this.overallScore.displayRow}
        moistureScore={this.skinConditionResult.moistureScore}
        dirtScore={this.skinConditionResult.dirtScore}
        uvScore={this.skinConditionResult.uvScore}
        pigmentScore={this.skinConditionResult.pigmentScore}
        recommendText={this.skinConditionResult.recommendText}
      />
    );
  }
}

export default ScanningResultScreenContainer;
