import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import commonStyles from '../../utils/styles';
import PropTypes from 'prop-types';

const SkinConditonResult = ({
  moistureScore,
  dirtScore,
  uvScore,
  pigmentScore,
  recommendText
}) => {
  return (
    <View style={styles.resultsContainer}>
      {/* Moisture*/}
      <View style={styles.skinConditionContainer}>
        <Image
          style={styles.moistIcon}
          source={require('../../assets/images/moist.png')}
        />
        <View style={styles.resultTextContainer}>
          <Text
            style={[
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue,
              styles.resultNumber
            ]}
          >
            {moistureScore}%
          </Text>
          <Text
            style={[
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue,
              styles.resultName
            ]}
          >
            Moisture
          </Text>
        </View>
      </View>
      {/* UV level */}
      <View style={styles.skinConditionContainer}>
        <Image
          style={styles.uvIcon}
          source={require('../../assets/images/uv.png')}
        />
        <View style={styles.resultTextContainer}>
          <Text
            style={[
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue,
              styles.resultNumber
            ]}
          >
            {uvScore}%
          </Text>
          <Text
            style={[
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue,
              styles.resultName
            ]}
          >
            UV protection
          </Text>
        </View>
      </View>
      {/* Dirt */}
      <View style={styles.skinConditionContainer}>
        <Image
          style={styles.dirtIcon}
          source={require('../../assets/images/dirt.png')}
        />
        <View style={styles.resultTextContainer}>
          <Text
            style={[
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue,
              styles.resultNumber
            ]}
          >
            {dirtScore}%
          </Text>
          <Text
            style={[
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue,
              styles.resultName
            ]}
          >
            Dirt/oil
          </Text>
        </View>
      </View>
      {/* Pigmentation */}
      <View style={styles.skinConditionContainer}>
        <Image
          style={styles.pigmentIcon}
          source={require('../../assets/images/pigment.png')}
        />
        <View style={styles.resultTextContainer}>
          <Text
            style={[
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue,
              styles.resultNumber
            ]}
          >
            {pigmentScore}%
          </Text>
          <Text
            style={[
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue,
              styles.resultName
            ]}
          >
            Pigmentation
          </Text>
        </View>
      </View>
      <Text
        style={[
          commonStyles.fontMontserratLight,
          commonStyles.colorDarkBlue,
          styles.recommendText
        ]}
      >
        {recommendText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 37
  },
  skinConditionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 39,
    marginBottom: 50
  },
  resultTextContainer: {
    flexDirection: 'column'
  },
  resultNumber: {
    fontSize: 30
  },
  resultName: {
    fontSize: 14,
    marginTop: -6
  },
  moistIcon: {
    width: 26,
    height: 36,
    marginRight: 19
  },
  uvIcon: {
    width: 39,
    height: 39,
    marginRight: 18
  },
  dirtIcon: {
    width: 32,
    height: 32,
    marginRight: 15
  },
  pigmentIcon: {
    width: 31,
    height: 29,
    marginRight: 26
  },
  recommendText: {
    marginTop: -1,
    marginRight: 50,
    fontSize: 16
  }
});

SkinConditonResult.propTypes = {
  moistureScore: PropTypes.number.isRequired,
  dirtScore: PropTypes.number.isRequired,
  uvScore: PropTypes.number.isRequired,
  pigmentScore: PropTypes.number.isRequired,
  recommendText: PropTypes.string
};

SkinConditonResult.defaultProps = {
  moistureScore: 0,
  dirtScore: 0,
  uvScore: 0,
  pigmentScore: 0
};

export default SkinConditonResult;
