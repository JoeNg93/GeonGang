import React, { Component } from 'react';
import colorCode from '../../utils/colorCode';
import HomepageScreen1 from './HomepageScreen1';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getRecords } from '../../actions/record';
import _ from 'lodash';
import { DATETIME_FORMAT_FROM_BACKEND } from '../../utils/index';
import moment from 'moment';
import { setTagFilter } from '../../actions/homepage1';

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
    inputTagColor: colorCode.blue
  };

  tagList = [
    { name: 'good', color: colorCode.goodTag },
    { name: 'moderate', color: colorCode.moderateTag },
    { name: 'bad', color: colorCode.badTag },
    { name: 'cautious', color: colorCode.cautiousTag },
    { name: 'star', color: colorCode.star }
  ];

  componentWillMount = () => {
    // this.props.getRecords();
    this.props.getRecords().then(response => console.log(response.data));
  };

  recordSearchHandle = text => {
    // Already submit => bounce back => clear text search
    if (this.state.inputSubmit) {
      this.props.setTagFilter('');
    }
    this.setState(prevState => ({
      inputSubmit: !prevState.inputSubmit
    }));
  };

  recordUserInput = text => {
    const tag = this.tagList.find(
      eachTag => eachTag.name === text.toLowerCase()
    );
    const inputTagColor = tag ? tag.color : colorCode.blue;
    this.props.setTagFilter(text);
    this.setState({
      inputTagColor: inputTagColor
    });
  };

  render() {
    let records = _.orderBy(
      Object.values(this.props.myRecords),
      record => moment(record.date, DATETIME_FORMAT_FROM_BACKEND),
      'desc'
    );

    // If user submit search filter
    if (this.state.inputSubmit && this.props.tagFilter.length) {
      records = records.filter(record => record.tag === this.props.tagFilter);
    }

    const record = records.length
      ? {
          ...records[0],
          gradientBackground: colorCode[`${records[0].tag}Gradient`],
          scoreTagColor: colorCode[`${records[0].tag}Tag`],
          lightVersion: true,
          displayRow: false
        }
      : {};

    return (
      <HomepageScreen1
        gradientBackground={
          record.gradientBackground || colorCode.moderateGradient
        }
        item={record}
        nonInteractive={true}
        recordSearchHandle={this.recordSearchHandle}
        recordUserInput={this.recordUserInput}
        inputSubmit={this.state.inputSubmit}
        textValue={this.props.tagFilter}
        inputTagColor={this.state.inputTagColor}
        onSwipeLeft={() => this.props.navigation.navigate('homepage2')}
        onPressRecordCard={() => this.props.navigation.navigate('homepage2')}
      />
    );
  }
}

const mapStateToProps = state => ({
  myRecords: state.record.myRecords,
  tagFilter: state.ui.homepage1Screen.tagFilter
});

export default connect(mapStateToProps, { getRecords, setTagFilter })(
  HomepageScreen1Container
);
