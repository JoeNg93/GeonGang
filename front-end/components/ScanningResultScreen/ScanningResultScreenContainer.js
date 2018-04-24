import React, { Component } from 'react';
import colorCode from '../../utils/colorCode';
import ScanningResultScreen from './ScanningResultScreen';
import PropTypes from 'prop-types';
import _ from 'lodash';

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
      'Your skin is dry, tired with a lot of dirt and oil. We recommend cleaning your face and moisturizing before going to bed.'
  };

  MIN_POSITIVE_SCORE = 50;
  MAX_POSITIVE_SCORE = 100;
  MIN_NEGATIVE_SCORE = 0;
  MAX_NEGATIVE_SCORE = 50;

  randomizeScanningResult = () => {
    const moistureScore = _.random(
      this.MIN_POSITIVE_SCORE,
      this.MAX_POSITIVE_SCORE,
      true
    );
    const uvScore = _.random(
      this.MIN_POSITIVE_SCORE,
      this.MAX_POSITIVE_SCORE,
      true
    );
    const dirtScore = _.random(
      this.MIN_NEGATIVE_SCORE,
      this.MAX_NEGATIVE_SCORE,
      true
    );
    const pigmentScore = _.random(
      this.MIN_NEGATIVE_SCORE,
      this.MAX_NEGATIVE_SCORE,
      true
    );
    const overallScore =
      (moistureScore + uvScore - dirtScore - pigmentScore) / 2;
    return {
      moistureScore,
      uvScore,
      dirtScore,
      pigmentScore,
      overallScore: _.clamp(overallScore, 0, 100)
    };
  };

  getScoreTag = overallScore => {
    if (overallScore <= 25) {
      return 'cautious';
    } else if (overallScore > 25 && overallScore <= 50) {
      return 'bad';
    } else if (overallScore > 50 && overallScore <= 75) {
      return 'moderate';
    } else {
      return 'good';
    }
  };

  getRecommendedText = scoreTag => {
    switch (scoreTag) {
      case 'cautious':
        return 'Uh oh! Your skin is not feeling well today! Please go through your day and see what is different from other days to help make your skin better tomorrow!';
      case 'bad':
        return 'Your skin has seen better days than this! Good skin only needs to be cleaned, hydrated and protected.';
      case 'moderate':
        return 'Your skin is dried, tired with a lot of dirt and oil. We recommend cleaning your face and moisturizing before going to bed.';
      case 'good':
        return 'Your skin is healthy and has improved so far. Keep up with the good work and continue to wash your face.';
    }
  };

  render() {
    const {
      moistureScore,
      uvScore,
      dirtScore,
      pigmentScore,
      overallScore
    } = this.randomizeScanningResult();
    const scoreTag = this.getScoreTag(overallScore);
    const recommendedText = this.getRecommendedText(scoreTag);

    return (
      <ScanningResultScreen
        score={overallScore}
        scoreTag={scoreTag}
        scoreTagColor={colorCode[`${scoreTag}Tag`]}
        lightVersion={false}
        displayRow={true}
        moistureScore={moistureScore}
        dirtScore={dirtScore}
        uvScore={uvScore}
        pigmentScore={pigmentScore}
        recommendText={recommendedText}
        onPressNextStep={this.props.onPressNextStep}
      />
    );
  }
}

ScanningResultScreenContainer.propTypes = {
  onPressNextStep: PropTypes.func
};

ScanningResultScreenContainer.defaultProps = {
  onPressNextStep: () => {}
};

export default ScanningResultScreenContainer;
