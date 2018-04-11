import React, { Component } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';
import HomepageScreen2 from './HomepageScreen2';
import colorCode from '../../utils/colorCode';
import { Icon } from 'react-native-elements';
import moment from 'moment';

class HomepageScreen2Container extends Component {
  // Header styling
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colorCode.white,
      // Remove the border bottom line of header
      borderBottomWidth: 0
    },
    headerTitle:
      (navigation.state.params && navigation.state.params.currentMonth) || null,
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="home" type="simple-line-icon" color={tintColor} />
    ),
    // Set "+" icon on the right
    headerRight: (
      <TouchableOpacity
        style={{ marginRight: 10 }}
        onPress={() => navigation.navigate('scanningContainer')}
      >
        <Icon name="add" iconStyle={{ color: colorCode.darkBlue }} size={32} />
      </TouchableOpacity>
    ),
    // Set "<" icon on the left
    headerLeft: (
      <TouchableOpacity
        style={{ marginLeft: 10 }}
        onPress={() => navigation.goBack()}
      >
        <Icon
          name="keyboard-arrow-left"
          iconStyle={{ color: colorCode.darkBlue }}
          size={40}
        />
      </TouchableOpacity>
    )
  });

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
      date: '2018-03-17',
      starAdded: false,
      fadeOutAnim: new Animated.Value(1),
      emptyCard: false
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
      date: '2018-04-18',
      starAdded: false,
      fadeOutAnim: new Animated.Value(1),
      emptyCard: false
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
      date: '2018-06-12',
      starAdded: false,
      fadeOutAnim: new Animated.Value(1),
      emptyCard: false
    },
    {
      gradientBackground: colorCode.emptyCardGradient,
      date: '2018-07-12',
      emptyCard: true
    }
  ];

  state = {
    currentIndex: 0,
    translateXAnim: new Animated.Value(100),
    currentCardMonth: moment(this.cards[0].date).format('MMMM')
  };

  componentWillMount() {
    this.props.navigation.setParams({
      currentMonth: this.state.currentCardMonth
    });
  }

  componentDidMount() {
    Animated.timing(this.state.translateXAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start();
  }

  favoriteHandle = () => {
    this.setState({ currentIndex: this.state.currentIndex });
    this.cards[this.state.currentIndex].starAdded = !this.cards[
      this.state.currentIndex
    ].starAdded;
  };

  deleteHandle = () => {
    Animated.timing(this.cards[this.state.currentIndex].fadeOutAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }).start(() => {
      this.cards.splice(this.state.currentIndex, 1);
      if (this.state.currentIndex === 0) {
        this.setState({
          translateXAnim: new Animated.Value(100)
        });
      } else {
        this.setState({
          currentIndex: this.state.currentIndex
        });
      }
      Animated.timing(this.state.translateXAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      }).start();
    });
  };

  onChangeCardIndex = index => {
    const newCardMonth = moment(this.cards[index].date).format('MMMM');
    this.setState({
      currentIndex: index,
      currentCardMonth: newCardMonth
    });
    this.props.navigation.setParams({ currentMonth: newCardMonth });
  };

  render() {
    return (
      <HomepageScreen2
        cards={this.cards}
        favoriteHandle={this.favoriteHandle}
        deleteHandle={this.deleteHandle}
        currentIndex={this.state.currentIndex}
        onChangeCardIndex={this.onChangeCardIndex}
        fadeOutAnim={this.state.fadeOutAnim}
        translateXAnim={this.state.translateXAnim}
      />
    );
  }
}

export default HomepageScreen2Container;
