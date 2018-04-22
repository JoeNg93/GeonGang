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
  displayRow,
  fontSize,
  statisticsScreen
}) => {
  return (
    <View
      style={[
        displayRow === true
          ? { flexDirection: 'row', alignItems: 'flex-end' }
          : { flexDirection: 'column' },
        statisticsScreen === true && { justifyContent: 'space-between' }
      ]}
    >
      <View>
        <View style={[styles.overallScoreContainer]}>
          <Text
            style={[
              commonStyles.fontMontserratRegular,
              lightVersion === true
                ? { color: 'white' }
                : commonStyles.colorDarkBlue,
              fontSize ? { fontSize: fontSize } : { fontSize: 48 }
            ]}
          >
            {score.toFixed(1)}
          </Text>
          <Text
            style={[
              commonStyles.fontMontserratLight,
              lightVersion === true
                ? { color: 'white' }
                : commonStyles.colorDarkBlue,
              {},
              fontSize
                ? { fontSize: fontSize / 2, marginBottom: fontSize / 5 }
                : { fontSize: 26, marginBottom: 10 }
            ]}
          >
            /100
          </Text>
        </View>
        {statisticsScreen === true && (
          <Text
            style={[
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue,
              { fontSize: 16 }
            ]}
          >
            Average Score
          </Text>
        )}
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
              : { marginTop: 17 },
            statisticsScreen === true && { marginLeft: 0, marginBottom: 0 }
          ]}
        >
          <Text
            style={[
              commonStyles.fontMontserratLight,
              lightVersion === true
                ? { color: scoreTagColor, fontSize: 16 }
                : { color: 'white', fontSize: 14 },
              fontSize ? { fontSize: 12 } : {}
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
