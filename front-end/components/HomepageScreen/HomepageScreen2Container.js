import React, { Component } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';
import HomepageScreen2 from './HomepageScreen2';
import colorCode from '../../utils/colorCode';
import { Icon } from 'react-native-elements';
import moment from 'moment';
import { connect } from 'react-redux';
import { openRecordDetailModal } from '../../actions/modals_control';
import { DATETIME_FORMAT_FROM_BACKEND } from '../../utils/index';
import _ from 'lodash';

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

  state = {
    currentIndex: 0,
    translateXAnim: new Animated.Value(100),
    currentCardMonth: 'May'
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
    // Change from object of records to array of record sorted by date
    this.cards = _.orderBy(
      Object.values(this.props.myRecords),
      record => moment(record.date, DATETIME_FORMAT_FROM_BACKEND),
      'desc'
    );
    this.cards = this.cards.map(card => ({
      ...card,
      gradientBackground: colorCode[`${card.tag}Gradient`],
      scoreTagColor: colorCode[`${card.tag}Tag`],
      starAdded: false,
      emptyCard: false,
      fadeOutAnim: new Animated.Value(1),
      lightVersion: true,
      displayRow: false
    }));
    // Set month for top nav bar
    this.setState({
      currentCardMonth: moment(
        this.cards[0].date,
        DATETIME_FORMAT_FROM_BACKEND
      ).format('MMMM')
    });
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
    const newCardMonth = moment(
      this.cards[index].date,
      DATETIME_FORMAT_FROM_BACKEND
    ).format('MMMM');
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
        onPressOpenRecordDetailModal={this.props.openRecordDetailModal}
        recordDetailModalVisible={this.props.recordDetailModalVisible}
      />
    );
  }
}

const mapStateToProps = state => ({
  recordDetailModalVisible: state.modal.recordDetailModalVisible,
  myRecords: state.record.myRecords
});

export default connect(mapStateToProps, { openRecordDetailModal })(
  HomepageScreen2Container
);
