import React, { Component } from 'react';
import HomepageScreen2 from './HomepageScreen2';
import colorCode from '../../utils/colorCode';

class HomepageScreen2Container extends Component {
  cards = [
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
      },
      date: '15. March 2018',
      starAdded: false
    },
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
        recommendText:
          'Your skin is in danger with lack of care and is easily prone to acne. We recommend cleaning your face and moisturizing before go to bed. '
      },
      date: '16. March 2018',
      starAdded: false
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
        recommendText:
          'Your skin is healthy and has improved so far. Keep up with the good work and continue to wash your face.'
      },
      date: '17. March 2018',
      starAdded: false
    }
  ];

  state = {
    currentIndex: 0
  };

  favoriteHandle = () => {
    this.setState({ currentIndex: this.state.currentIndex });
    this.cards[this.state.currentIndex].starAdded = !this.cards[
      this.state.currentIndex
    ].starAdded;
  };

  render() {
    return (
      <HomepageScreen2
        cards={this.cards}
        favoriteHandle={this.favoriteHandle}
        currentIndex={this.state.currentIndex}
        onChangeCardIndex={index => this.setState({ currentIndex: index })}
      />
    );
  }
}

export default HomepageScreen2Container;
