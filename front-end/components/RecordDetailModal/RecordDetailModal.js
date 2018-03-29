import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import commonStyles from '../../utils/styles';
import OverallScore from '../common/OverallScore';
import SkinConditionResult from '../common/SkinConditionResult';
import PropTypes from 'prop-types';

const RecordDetailModal = ({
  date,
  gradientBackground,
  score,
  scoreTag,
  scoreTagColor,
  lightVersion,
  displayRow,
  moistureScore,
  dirtScore,
  uvScore,
  pigmentScore,
  recommendText,
  productComponent
}) => {
  return (
    <ScrollView>
      <LinearGradient
        colors={gradientBackground}
        style={[styles.recordHeaderContainer]}
      >
        <Text style={[commonStyles.fontMontserratLight, styles.dateText]}>
          {date}
        </Text>
        <OverallScore
          score={score}
          scoreTag={scoreTag}
          scoreTagColor={scoreTagColor}
          lightVersion={lightVersion}
          displayRow={displayRow}
        />
      </LinearGradient>
      <View style={styles.recordContentContainer}>
        <SkinConditionResult
          moistureScore={moistureScore}
          dirtScore={dirtScore}
          uvScore={uvScore}
          pigmentScore={pigmentScore}
          recommendText={recommendText}
        />
        <View style={styles.productContainer}>
          <Text
            style={[
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue,
              styles.headerText
            ]}
          >
            Product recommendation
          </Text>
          <View style={styles.divider} />
          <View style={styles.productSection}>{productComponents}</View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recordHeaderContainer: {
    paddingLeft: 40,
    paddingTop: 60,
    paddingBottom: 17,
    flex: 1
  },
  recordContentContainer: {
    paddingLeft: 40,
    flex: 5
  },
  dateText: {
    fontSize: 20,
    marginBottom: 8,
    color: 'white'
  },
  divider: {
    marginTop: 3,
    borderBottomWidth: 2,
    width: 56
  },
  headerText: {
    fontSize: 20,
    lineHeight: 29
  },
  productContainer: {
    marginTop: 40,
    paddingBottom: 60
  },
  productSection: {
    alignSelf: 'stretch',
    marginTop: 15,
    paddingRight: 40
  }
});

RecordDetailModal.propTypes = {
  date: PropTypes.string.isRequired,
  gradientBackground: PropTypes.array.isRequired,
  productComponents: PropTypes.array
};

export default RecordDetailModal;
