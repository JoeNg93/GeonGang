import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import OverallScore from '../common/OverallScore';
import colorCode from '../../utils/colorCode';
import commonStyles from '../../utils/styles';
import PropTypes from 'prop-types';

const cardWidth = 317;

const RecordCard = ({
  gradientBackground,
  score,
  scoreTag,
  scoreTagColor,
  lightVersion,
  displayRow,
  recommendText,
  cardContainerStyle
}) => {
  return (
    <LinearGradient
      colors={gradientBackground}
      style={[styles.cardContainer, cardContainerStyle]}
    >
      <OverallScore
        score={score}
        scoreTag={scoreTag}
        scoreTagColor={scoreTagColor}
        lightVersion={lightVersion}
        displayRow={displayRow}
      />
      <Text style={[commonStyles.fontMontserratLight, styles.recommendText]}>
        {recommendText}
      </Text>
    </LinearGradient>
  );
};

RecordCard.cardWidth = cardWidth;

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    height: 380,
    borderRadius: 20,
    paddingTop: 64,
    paddingLeft: 35,
    paddingRight: 45,
    paddingBottom: 20,
    overflow: 'hidden',
    shadowColor: '#787878',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8
  },
  recommendText: {
    marginTop: 26,
    fontSize: 14,
    color: 'white'
  }
});

RecordCard.propTypes = {
  gradientBackground: PropTypes.array.isRequired,
  recommendtext: PropTypes.string.isRequired,
  cardContainerStyle: PropTypes.object
};

RecordCard.defaultProps = {
  recommendtext: '',
  cardContainerStyle: {}
};

export default RecordCard;
