import React, { Component } from 'react';
import HomepageScreen2 from './HomepageScreen2';
import colorCode from '../../utils/colorCode';

class HomepageScreen2Container extends Component {
  cards = [
    {
      gradientBackground: colorCode.cautiousGradient,
      overallScore: {
        score: 22.9,
        scoreTag: 'cautious',
        scoreTagColor: colorCode.cautiousTag,
        lightVersion: true,
        displayRow: false
      },
      skinConditionResult: {
        recommendText: 'Your skin is shit'
      }
    },
    {
      gradientBackground: colorCode.moderateGradient,
      overallScore: {
        score: 67.8,
        scoreTag: 'moderate',
        scoreTagColor: colorCode.moderateTag,
        lightVersion: true,
        displayRow: false
      },
      skinConditionResult: {
        recommendText:
          'Your skin is thisty, tired with lots of dirts and oil. We recommend cleaning your face and moisturizing before go to bed.'
      }
    },
    {
      gradientBackground: colorCode.goodGradient,
      overallScore: {
        score: 89.1,
        scoreTag: 'good',
        scoreTagColor: colorCode.goodTag,
        lightVersion: true,
        displayRow: false
      },
      skinConditionResult: {
        recommendText: 'Your skin is kinda good'
      }
    }
  ];

  state = {
    currentIndex: 0
  };

  render() {
    return (
      <HomepageScreen2
        cards={this.cards}
        currentIndex={this.state.currentIndex}
        onChangeCardIndex={index => this.setState({ currentIndex: index })}
      />
    );
  }
}

export default HomepageScreen2Container;
