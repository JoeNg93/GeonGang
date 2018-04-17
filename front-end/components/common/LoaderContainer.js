import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import Loader from './Loader';

class LoaderContainer extends Component {
  constructor(props) {
    super(props);
    this.scaleValue1 = new Animated.Value(0);
    this.scaleInterpolate1 = this.scaleValue1.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });
    this.scaleValue2 = new Animated.Value(0);
    this.scaleInterpolate2 = this.scaleValue2.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });
  }

  componentDidMount() {
    this.runLoaderAnimation();
  }

  runLoaderAnimation() {
    Animated.loop(
      Animated.timing(this.scaleValue1, {
        duration: 2000,
        toValue: 1,
        easing: Easing.expo
      })
    ).start();
    setTimeout(() => {
      Animated.loop(
        Animated.timing(this.scaleValue2, {
          duration: 2000,
          toValue: 1,
          easing: Easing.expo
        })
      ).start();
    }, 1000);
  }
  getLoaderAnimationStyle(scaleInterpolate) {
    return {
      transform: [{ scale: scaleInterpolate }]
    };
  }
  render() {
    return (
      <Loader
        loaderAnimatedValue1={this.getLoaderAnimationStyle(
          this.scaleInterpolate1
        )}
        loaderAnimatedValue2={this.getLoaderAnimationStyle(
          this.scaleInterpolate2
        )}
      />
    );
  }
}

export default LoaderContainer;
