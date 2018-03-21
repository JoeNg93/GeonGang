import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Slider } from 'react-native-elements';
import commonStyles from '../../utils/styles';

const SkinColorScreen = ({ color, colorText, onColorChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.colorContainer}>
        <View
          backgroundColor={'hsl(25, 55%, ' + (100 - color) + '%)'}
          style={styles.colorImage}
        />
        <Text style={[styles.colorText, commonStyles.fontMontserratRegular]}>
          {colorText}
        </Text>
      </View>
      <Slider
        minimumTrackTintColor={'hsl(25, 55%, ' + (100 - color) + '%)'}
        maximumTrackTintColor="#C4C4C4"
        thumbTintColor={'hsl(25, 55%, ' + (100 - color) + '%)'}
        trackStyle={{
          height: 8,
          borderRadius: 0
        }}
        thumbStyle={{ height: 27, width: 27, borderRadius: 50 }}
        style={styles.slider}
        step={1}
        minimumValue={3}
        maximumValue={100}
        value={color}
        onValueChange={onColorChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column'
  },
  colorContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorImage: {
    width: 95,
    height: 95,
    borderRadius: 50
  },
  colorText: {
    fontSize: 26,
    color: '#4F4F4F',
    paddingTop: 17,
    paddingBottom: 22
  },
  slider: {
    width: 344,
    height: 36
  }
});

export default SkinColorScreen;
