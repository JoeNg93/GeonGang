import React from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import commonStyles from '../../utils/styles';
import Header from '../common/Header';
import PropTypes from 'prop-types';
import AnimateNumber from 'react-native-animate-number';

const ScanningScreen = ({
  scanningProgress,
  bounceAnimation,
  stopAnimation,
  startAnimation
}) => {
  return (
    <View style={styles.container}>
      <Header headerText="Analyzing skin" descriptionText="" />
      <View style={styles.contents}>
        <Text
          style={[
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue,
            styles.informationText
          ]}
        >
          Hold on.{'\n'}
          We are scanning your skin.{'\n'}
          It will just take a minute.
        </Text>
        <Animated.View style={bounceAnimation}>
          <Image
            source={require('../../assets/images/scan-loading-1.png')}
            style={styles.loadingImage}
          />
        </Animated.View>
        {startAnimation && (
          <Text
            style={[
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue,
              styles.loadingText
            ]}
          >
            <AnimateNumber
              value={100}
              countBy={3}
              interval={50}
              formatter={val => {
                return val + '%';
              }}
              timing={(interval, progress) => {
                return interval * (1 - Math.sin(Math.PI * progress)) * 10;
              }}
              onFinish={stopAnimation}
            />
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  informationText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 60
  },

  loadingImage: {
    height: 193,
    width: 163
  },

  loadingText: {
    fontSize: 48,
    textAlign: 'center',
    marginTop: 52
  }
});

ScanningScreen.propTypes = {
  scanningProgress: PropTypes.number,
  startAnimation: PropTypes.bool
};

ScanningScreen.defaultProps = {
  scanningProgress: 0,
  startAnimation: true
};

export default ScanningScreen;
