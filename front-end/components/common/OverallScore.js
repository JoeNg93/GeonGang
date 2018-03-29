import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import PropTypes from 'prop-types';

const OverallScore = ({
  score,
  scoreTag,
  scoreTagColor,
  lightVersion,
  displayRow
}) => {
  return (
    <View
      style={[
        displayRow === true
          ? { flexDirection: 'row', alignItems: 'flex-end' }
          : { flexDirection: 'column' }
      ]}
    >
      <View style={[styles.overallScoreContainer]}>
        <Text
          style={[
            commonStyles.fontMontserratRegular,
            lightVersion === true
              ? { color: 'white' }
              : commonStyles.colorDarkBlue,
            styles.overallScore
          ]}
        >
          {score}
        </Text>
        <Text
          style={[
            commonStyles.fontMontserratLight,
            lightVersion === true
              ? { color: 'white' }
              : commonStyles.colorDarkBlue,
            styles.overallBand
          ]}
        >
          /100
        </Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Badge
          containerStyle={[
            styles.badgeContainer,
            lightVersion === true
              ? { backgroundColor: 'white' }
              : { backgroundColor: scoreTagColor },
            displayRow === true
              ? {
                  marginLeft: 23,
                  marginBottom: 15
                }
              : { marginTop: 17 }
          ]}
        >
          <Text
            style={[
              commonStyles.fontMontserratLight,
              lightVersion === true
                ? { color: scoreTagColor, fontSize: 16 }
                : { color: 'white', fontSize: 14 }
            ]}
          >
            {scoreTag}
          </Text>
        </Badge>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overallScoreContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  overallScore: {
    fontSize: 50
  },
  overallBand: {
    fontSize: 26,
    marginBottom: 10
  },
  badgeContainer: {
    paddingLeft: 20,
    paddingRight: 20
  }
});

OverallScore.propTypes = {
  score: PropTypes.number.isRequired,
  scoreTag: PropTypes.string.isRequired,
  scoreTagColor: PropTypes.string.isRequired,
  lightVersion: PropTypes.bool.isRequired,
  displayRow: PropTypes.bool.isRequired
};

OverallScore.defaultProps = {
  score: 0,
  scoreTag: 'unknown',
  scoreTagColor: '#0C3363',
  lightVersion: false,
  displayRow: true
};

export default OverallScore;
