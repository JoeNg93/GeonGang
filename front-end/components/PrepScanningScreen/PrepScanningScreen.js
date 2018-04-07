import React from 'react';
import { View, Text, StyleSheet, Animated, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import Header from '../common/Header';
import PropTypes from 'prop-types';

const outerCicleWidth = 340;
const innerCircleWidth = 270;
const buttonWidth = 150;

const PrepScanningScreen = ({
  startAnalyzingHandle,
  rippleAnimatedValue1,
  rippleAnimatedValue2
}) => {
  return (
    <ScrollView style={styles.container} scrollEnabled={false}>
      <Header
        headerText="Analyzing skin"
        descriptionText="Here are some scanning instructions, write something there so that our users know how to use the sensor"
      />
      <View style={styles.buttonArea}>
        <Animated.View style={[styles.circle1, rippleAnimatedValue1]} />
        <Animated.View style={[styles.circle2, rippleAnimatedValue2]} />
        <Button
          title="Press to start"
          textStyle={[
            commonStyles.fontMontserratRegular,
            {
              fontSize: 20,
              lineHeight: 24,
              textAlign: 'center',
              textAlignVertical: 'center'
            }
          ]}
          buttonStyle={styles.scanButton}
          containerStyle={{ marginTop: 20 }}
          onPress={startAnalyzingHandle}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonArea: {
    flex: 2,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle1: {
    /* Alignment */
    justifyContent: 'center',
    alignItems: 'center',

    /* Box */
    height: outerCicleWidth,
    width: outerCicleWidth,
    backgroundColor: 'rgba(45, 156, 219, 0.35)',
    borderRadius: outerCicleWidth / 2
    // zIndex: 0
  },
  circle2: {
    /* Alignment */
    justifyContent: 'center',
    alignItems: 'center',

    /* Box */
    height: innerCircleWidth,
    width: innerCircleWidth,
    position: 'relative',
    top: -(outerCicleWidth / 2 + innerCircleWidth / 2),
    backgroundColor: 'rgba(45, 156, 219, 0.5)',
    borderRadius: innerCircleWidth / 2
    // zIndex: 1
  },
  scanButton: {
    backgroundColor: '#2D9CDB',
    width: buttonWidth,
    height: buttonWidth,
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: buttonWidth / 2,
    position: 'relative',
    top: -(innerCircleWidth + outerCicleWidth / 2 + buttonWidth / 2)
  }
});

PrepScanningScreen.propTypes = {
  startAnalyzingHandle: PropTypes.func
};

export default PrepScanningScreen;
