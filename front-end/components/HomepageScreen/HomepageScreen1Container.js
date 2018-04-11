import React, { Component } from 'react';
import colorCode from '../../utils/colorCode';
import HomepageScreen1 from './HomepageScreen1';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

class HomepageScreen1Container extends Component {
  // Header styling
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colorCode.white,
      // Remove the border bottom line of header
      borderBottomWidth: 0
    },
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
    )
  });

  gradientBackground = colorCode.moderateGradient;
  record = {
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
  };
  state = {
    inputSubmit: false,
    textValue: '',
    inputTagColor: colorCode.blue
  };

  tagList = [
    { name: 'good', color: colorCode.goodTag },
    { name: 'moderate', color: colorCode.moderateTag },
    { name: 'bad', color: colorCode.badTag },
    { name: 'cautious', color: colorCode.cautiousTag },
    { name: 'star', color: colorCode.star }
  ];

  recordSearchHandle = text => {
    this.setState(prevState => ({
      inputSubmit: !prevState.inputSubmit
    }));
  };

  recordUserInput = text => {
    const tag = this.tagList.find(
      eachTag => eachTag.name === text.toLowerCase()
    );
    const inputTagColor = tag ? tag.color : colorCode.blue;
    this.setState({
      textValue: text,
      inputTagColor: inputTagColor
    });
  };

  render() {
    return (
      <HomepageScreen1
        gradientBackground={this.gradientBackground}
        item={this.record}
        nonInteractive={true}
        recordSearchHandle={this.recordSearchHandle}
        recordUserInput={this.recordUserInput}
        inputSubmit={this.state.inputSubmit}
        textValue={this.state.textValue}
        inputTagColor={this.state.inputTagColor}
        onSwipeLeft={() => this.props.navigation.navigate('homepage2')}
      />
    );
  }
}

export default HomepageScreen1Container;
