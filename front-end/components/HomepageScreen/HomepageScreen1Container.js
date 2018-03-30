import React, { Component } from 'react';
import colorCode from '../../utils/colorCode';
import HomepageScreen1 from './HomepageScreen1';

class HomepageScreen1Container extends Component {
  gradientBackground = colorCode.moderateGradient;
  overallScore = {
    score: 67.8,
    scoreTag: 'moderate',
    scoreTagColor: colorCode.moderateTag,
    lightVersion: true,
    displayRow: false
  };
  skinConditionResult = {
    recommendText:
      'Your skin is thisty, tired with lots of dirts and oil. We recommend cleaning your face and moisturizing before go to bed.'
  };

  render() {
    return (
      <HomepageScreen1
        gradientBackground={this.gradientBackground}
        score={this.overallScore.score}
        scoreTag={this.overallScore.scoreTag}
        scoreTagColor={this.overallScore.scoreTagColor}
        lightVersion={this.overallScore.lightVersion}
        displayRow={this.overallScore.displayRow}
        recommendText={this.skinConditionResult.recommendText}
      />
    );
  }
}

export default HomepageScreen1Container;
