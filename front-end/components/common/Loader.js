import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import colorCode from '../../utils/colorCode';

const loaderWidth = 60;
const loaderHeight = 60;

const Loader = ({ loaderAnimatedValue1, loaderAnimatedValue2 }) => {
  return (
    <View style={styles.container}>
      <View style={styles.loader}>
        <Animated.View style={[styles.circle1, loaderAnimatedValue1]} />
        <Animated.View style={[styles.circle2, loaderAnimatedValue2]} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorCode.white
  },
  loader: {
    width: loaderWidth,
    height: loaderHeight
  },
  circle1: {
    width: '100%',
    height: '100%',
    borderRadius: loaderWidth / 2,
    backgroundColor: colorCode.blue,
    opacity: 0.2,
    position: 'absolute',
    top: 0,
    left: 0
  },
  circle2: {
    width: '100%',
    height: '100%',
    borderRadius: loaderWidth / 2,
    backgroundColor: colorCode.blue,
    opacity: 0.2,
    position: 'absolute',
    top: 0,
    left: 0
  }
});
export default Loader;
