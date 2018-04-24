import React, { Component } from 'react';
import colorCode from '../../utils/colorCode';
import ScanningResultScreen from './ScanningResultScreen';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { postRecord } from '../../actions/record';
import { connect } from 'react-redux';

class ScanningResultScreenContainer extends Component {
  MIN_POSITIVE_SCORE = 70;
  MAX_POSITIVE_SCORE = 100;
  MIN_NEGATIVE_SCORE = 0;
  MAX_NEGATIVE_SCORE = 50;

  componentWillMount = () => {
    const {
      moistureScore,
      uvScore,
      dirtScore,
      pigmentScore,
      overallScore
    } = this.randomizeScanningResult();
    this.moistureScore = moistureScore;
    this.uvScore = uvScore;
    this.dirtScore = dirtScore;
    this.pigmentScore = pigmentScore;
    this.overallScore = overallScore;
    this.scoreTag = this.getScoreTag(this.overallScore);
    this.recommendedText = this.getRecommendedText(this.scoreTag);

    // This component will mount even before pressing the scan button
    // FIXME: Make it wait until the scanning is done to get real scores if connect to real device
    this.props.postRecord({
      overallScore: this.overallScore,
      tag: this.scoreTag,
      moisture: this.moistureScore,
      dirt: this.dirtScore,
      uv: this.uvScore,
      pigmentation: this.pigmentScore,
      recommendedText: this.recommendedText
    });
  };

  randomizeScanningResult = () => {
    const moistureScore = _.random(
      this.MIN_POSITIVE_SCORE,
      this.MAX_POSITIVE_SCORE
    );
    const uvScore = _.random(this.MIN_POSITIVE_SCORE, this.MAX_POSITIVE_SCORE);
    const dirtScore = _.random(
      this.MIN_NEGATIVE_SCORE,
      this.MAX_NEGATIVE_SCORE
    );
    const pigmentScore = _.random(
      this.MIN_NEGATIVE_SCORE,
      this.MAX_NEGATIVE_SCORE
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
        return 'Your skin is dry, tired with a lot of dirt and oil. We recommend cleaning your face and moisturizing before going to bed.';
      case 'good':
        return 'Your skin is healthy and has improved so far. Keep up the good work and continue to wash your face.';
    }
  };

  render() {
    return (
      <ScanningResultScreen
        score={this.overallScore}
        scoreTag={this.scoreTag}
        scoreTagColor={colorCode[`${this.scoreTag}Tag`]}
        lightVersion={false}
        displayRow={true}
        moistureScore={this.moistureScore}
        dirtScore={this.dirtScore}
        uvScore={this.uvScore}
        pigmentScore={this.pigmentScore}
        recommendText={this.recommendedText}
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

export default connect(null, { postRecord })(ScanningResultScreenContainer);
