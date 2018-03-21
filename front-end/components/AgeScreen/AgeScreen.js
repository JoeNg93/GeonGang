import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Slider } from 'react-native-elements';
import commonStyles from '../../utils/styles';

const AgeScreen = ({ age, onAgeChange }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.infoText,
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue
          ]}
        >
          We need to get some information about you to produce better
          recommendation result. You can skip any questions at any time.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo_icon.png')}
        />
      </View>
      <View style={styles.ageContainer}>
        <View style={{ justifyContent: 'flex-end' }}>
          <Text
            style={[
              styles.ageText,
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue
            ]}
          >
            Your age
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-end' }}>
          <Text
            style={[
              styles.ageNumber,
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue
            ]}
          >
            {age}
          </Text>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          minimumTrackTintColor="#F48D79"
          maximumTrackTintColor="#C4C4C4"
          thumbTintColor="#F48D79"
          trackStyle={{
            height: 8,
            borderRadius: 0
          }}
          thumbStyle={{ height: 27, width: 27, borderRadius: 50 }}
          style={styles.slider}
          step={1}
          minimumValue={0}
          maximumValue={100}
          value={age}
          onValueChange={onAgeChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 100,
    marginBottom: 100,
    marginRight: 35,
    marginLeft: 35
  },
  textContainer: {
    flex: 1
  },
  infoText: {
    fontSize: 17
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: 130,
    height: 153
  },
  ageContainer: {
    justifyContent: 'flex-end'
  },
  ageText: {
    fontSize: 28
  },
  ageNumber: {
    alignSelf: 'center',
    fontSize: 40,
    lineHeight: 70
  },
  sliderContainer: {
    justifyContent: 'flex-end'
  },
  slider: {
    width: 344,
    height: 36
  }
});

export default AgeScreen;
