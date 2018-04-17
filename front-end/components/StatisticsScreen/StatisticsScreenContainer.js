import React, { Component } from 'react';
import StatisticsScreen from './StatisticsScreen';
import colorCode from '../../utils/colorCode';
import { Icon } from 'react-native-elements';

class StatisticsScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Tracking',
    tabBarLabel: 'Tracking',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="graph" type="simple-line-icon" color={tintColor} />
    )
  });

  state = {
    selectedIndex: 0,
    dateRange: {
      startDate: '15. Apr',
      endDate: '22. Apr'
    }
  };
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
    pigmentScore: 20
  };

  buttons = ['Weekly', 'Monthly'];

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    return (
      <StatisticsScreen
        buttons={this.buttons}
        selectedIndex={this.state.selectedIndex}
        updateIndex={this.updateIndex}
        startDate={this.state.dateRange.startDate}
        endDate={this.state.dateRange.endDate}
        score={this.overallScore.score}
        scoreTag={this.overallScore.scoreTag}
        scoreTagColor={this.overallScore.scoreTagColor}
        lightVersion={this.overallScore.lightVersion}
        displayRow={this.overallScore.displayRow}
        moistureScore={this.skinConditionResult.moistureScore}
        dirtScore={this.skinConditionResult.dirtScore}
        uvScore={this.skinConditionResult.uvScore}
        pigmentScore={this.skinConditionResult.pigmentScore}
      />
    );
  }
}

export default StatisticsScreenContainer;
