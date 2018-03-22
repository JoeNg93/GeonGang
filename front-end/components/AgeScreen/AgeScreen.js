import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Slider } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import Header from '../common/Header';

const AgeScreen = ({ age, onAgeChange }) => {
  return (
    <View>
      <Header
        headerText="About you"
        descriptionText="We need to get some information about you to produce better
                      recommendation result. You can skip any questions at any time."
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/logo_icon.png')}
        />
        <View style={styles.ageContainer}>
          <Text
            style={[
              styles.ageText,
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue
            ]}
          >
            Your age
          </Text>
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
    display: 'flex',
    height: 400,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column'
  },
  imageContainer: {
    flex: 1
  },
  ageContainer: {
    flex: 1
  },
  image: {
    marginTop: 70,
    width: 130,
    height: 153
  },
  ageText: {
    marginTop: 30,
    fontSize: 28
  },
  ageNumber: {
    alignSelf: 'center',
    fontSize: 40,
    lineHeight: 70
  },
  slider: {
    width: 344,
    height: 36
  }
});

export default AgeScreen;
