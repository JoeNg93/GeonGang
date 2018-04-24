import React, { Component } from 'react';
import StatisticsScreen from './StatisticsScreen';
import colorCode from '../../utils/colorCode';
import { Icon } from 'react-native-elements';
import LoaderContainer from '../common/LoaderContainer';

class StatisticsScreenContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colorCode.white,
      // Remove the border bottom line of header
      borderBottomWidth: 0,
      height: 0
    },
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
    },
    isLoading: true
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

  componentDidMount = () => {
    setTimeout(() => this.setState({ isLoading: false }), 1500);
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  render() {
    if (this.state.isLoading) {
      return <LoaderContainer />;
    }

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
