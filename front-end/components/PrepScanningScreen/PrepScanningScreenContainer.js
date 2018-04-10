import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import PrepScanningScreen from './PrepScanningScreen';
import PropTypes from 'prop-types';

class PrepScanningScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.scaleValue1 = new Animated.Value(0.4);
    this.state.opacityValue1 = this.state.scaleValue1.interpolate({
      inputRange: [0.4, 1],
      outputRange: [1, 0]
    });
    this.state.scaleValue2 = new Animated.Value(0.4);
    this.state.opacityValue2 = this.state.scaleValue2.interpolate({
      inputRange: [0.4, 1],
      outputRange: [1, 0]
    });
  }

  componentDidMount() {
    this.runRippleAnimation();
  }

  runRippleAnimation() {
    Animated.loop(
      Animated.parallel([
        Animated.timing(this.state.scaleValue1, {
          duration: 1800,
          toValue: 1
        }),
        Animated.timing(this.state.scaleValue2, {
          duration: 1800,
          toValue: 1,
          delay: 200
        })
      ])
    ).start(() => {
      this.state.scaleValue1.setValue(0.4);
      this.state.scaleValue2.setValue(0.4);
    });
  }
  getRippleAnimationStyle(scaleValue, opacityValue) {
    return {
      transform: [{ scale: scaleValue }],
      opacity: opacityValue
    };
  }
  render() {
    return (
      <PrepScanningScreen
        rippleAnimatedValue1={this.getRippleAnimationStyle(
          this.state.scaleValue1,
          this.state.opacityValue1
        )}
        rippleAnimatedValue2={this.getRippleAnimationStyle(
          this.state.scaleValue2,
          this.state.opacityValue2
        )}
        startAnalyzingHandle={this.props.startAnalyzingHandle}
      />
    );
  }
}

PrepScanningScreenContainer.propTypes = {
  startAnalyzingHandle: PropTypes.func
};

export default PrepScanningScreenContainer;
