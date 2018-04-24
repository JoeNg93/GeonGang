import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ButtonGroup, Icon } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import colorCode from '../../utils/colorCode';
import OverallScore from '../common/OverallScore';
import PropTypes from 'prop-types';

const StatisticsScreen = ({
  buttons,
  selectedIndex,
  updateIndex,
  startDate,
  endDate,
  score,
  scoreTag,
  scoreTagColor,
  lightVersion,
  displayRow,
  moistureScore,
  dirtScore,
  uvScore,
  pigmentScore
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={styles.buttonGroupContainer}
          buttonStyle={styles.buttonGroupButtons}
          selectedButtonStyle={styles.selectedButton}
          textStyle={[styles.buttonGroupText, commonStyles.fontMontserratLight]}
          selectedTextStyle={[styles.selectedButtonText]}
          innerBorderStyle={{ width: -1, color: 'transparent' }}
        />
        <View style={styles.dateContainer}>
          <Icon
            name={'chevron-left'}
            color={colorCode.anotherLightGray}
            size={32}
            iconStyle={{ opacity: 0.8 }}
          />
          <Text style={[commonStyles.fontMontserratLight, styles.dateText]}>
            {startDate} - {endDate}
          </Text>
          <Icon
            name={'chevron-right'}
            color={colorCode.anotherLightGray}
            iconStyle={{ opacity: 0 }}
            size={32}
          />
        </View>
        <View style={styles.graphContainer}>
          <OverallScore
            score={score}
            scoreTag={scoreTag}
            scoreTagColor={scoreTagColor}
            lightVersion={lightVersion}
            displayRow={displayRow}
            fontSize={28}
            statisticsScreen={true}
          />
          <Image
            style={[styles.graphImage]}
            source={require('../../assets/images/graph.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.skinConditionContainer}>
        {/* Moisture*/}
        <ConditionItem
          paddingLeft={36}
          iconSource={require('../../assets/images/moist.png')}
          iconStyle={{
            width: 14,
            height: 19,
            marginRight: 9
          }}
          score={moistureScore}
          title="Avg. Moisture"
        />
        {/* UV */}
        <ConditionItem
          paddingLeft={16}
          iconSource={require('../../assets/images/uv.png')}
          iconStyle={{
            width: 22,
            height: 22,
            marginRight: 6
          }}
          score={uvScore}
          title="Avg. UV Protection"
        />
        {/* Dirt*/}
        <ConditionItem
          paddingLeft={36}
          iconSource={require('../../assets/images/dirt.png')}
          iconStyle={{
            width: 18,
            height: 18,
            marginRight: 6
          }}
          score={dirtScore}
          title="Avg. Dirt/oil"
        />
        {/* Pigment*/}
        <ConditionItem
          paddingLeft={16}
          iconSource={require('../../assets/images/pigment.png')}
          iconStyle={{
            width: 18,
            height: 17,
            marginRight: 8
          }}
          score={pigmentScore}
          title="Avg. Pigmentation"
        />
      </View>
    </View>
  );
};

const ConditionItem = ({
  paddingLeft,
  iconSource,
  iconStyle,
  score,
  title
}) => {
  return (
    <View style={[styles.conditionItem, { paddingLeft: paddingLeft }]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Image style={iconStyle} source={iconSource} />
        <Text
          style={[
            commonStyles.fontMontserratRegular,
            commonStyles.colorDarkBlue,
            styles.resultNumber
          ]}
        >
          {score}%
        </Text>
      </View>
      <Text
        style={[
          commonStyles.fontMontserratLight,
          commonStyles.colorDarkBlue,
          styles.resultName
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorCode.lightBlue,
    alignItems: 'center'
  },
  headerContainer: {
    width: '100%',
    height: 320,
    backgroundColor: '#fff',
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center'
  },
  buttonGroupContainer: {
    width: '100%',
    marginTop: 16,
    borderWidth: 0,
    backgroundColor: 'transparent',
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonGroupButtons: {
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0'
  },
  selectedButton: {
    borderBottomColor: colorCode.blue,
    borderBottomWidth: 2
  },
  buttonGroupText: {
    color: colorCode.anotherLightGray,
    fontSize: 18
  },
  selectedButtonText: {
    color: colorCode.blue
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 22
  },
  dateText: {
    fontSize: 16,
    color: colorCode.anotherLightGray,
    marginLeft: 32,
    marginRight: 32
  },
  graphContainer: {
    width: 358,
    height: 284,
    shadowColor: '#8C8C8C',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    paddingTop: 18,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 10
  },
  graphImage: {
    width: 285,
    height: 164,
    marginTop: 24
  },
  skinConditionContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 38,
    paddingRight: 38,
    position: 'relative',
    top: 130
  },
  conditionItem: {
    width: 160,
    height: 79,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#8C8C8C',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    marginBottom: 22,
    justifyContent: 'center'
  },
  resultNumber: {
    fontSize: 24
  },
  resultName: {
    fontSize: 14
  }
});

export default StatisticsScreen;
