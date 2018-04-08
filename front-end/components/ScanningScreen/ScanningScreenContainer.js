import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import ScanningScreen from './ScanningScreen';

class ScanningScreenContainer extends Component {
  state = {
    scanningProgress: 52
  };

  bounceValue = new Animated.Value(0);

  bounceInterpolate = this.bounceValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -30, 0]
  });

  bounceAnimation = {};

  componentDidMount() {
    this.runBouncingAnimation();
  }

  runBouncingAnimation = () => {
    this.bounceAnimation = Animated.loop(
      Animated.timing(this.bounceValue, {
        toValue: 1,
        duration: 2200,
        easing: Easing.out(Easing.bounce)
      })
    );
    this.bounceAnimation.start(() => {
      this.bounceValue.setValue(0);
    });
  };

  getBouncingStyle = () => {
    return {
      top: this.bounceInterpolate,
      position: 'relative'
    };
  };

  stopAnimation = () => {
    this.bounceAnimation.stop();
  };

  render() {
    return (
      <ScanningScreen
        scanningProgress={this.state.scanningProgress}
        bounceAnimation={this.getBouncingStyle()}
        stopAnimation={this.stopAnimation}
      />
    );
  }
}

export default ScanningScreenContainer;
