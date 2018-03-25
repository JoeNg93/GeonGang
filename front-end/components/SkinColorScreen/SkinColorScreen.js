import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Slider } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import HeaderWithLogo from '../common/HeaderWithLogo';

const SkinColorScreen = ({ color, colorText, onColorChange }) => {
  return (
    <View>
      <HeaderWithLogo headerText="Your skin color" />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 100
  },
  colorContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  colorImage: {
    width: 105,
    height: 105,
    borderRadius: 100
  },
  colorText: {
    fontSize: 26,
    color: '#4F4F4F',
    paddingTop: 20,
    paddingBottom: 35
  },
  slider: {
    width: 344,
    height: 36
  }
});

export default SkinColorScreen;
