import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';

const GenderScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.maleFemaleContainer}>
        <View style={styles.maleGroup}>
          <Image
            style={styles.image}
            source={require('../../assets/images/male-pic.png')}
          />
          <Button
            textStyle={[
              styles.buttonText,
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
            outline={true}
            backgroundColor={'fff'}
            buttonStyle={styles.button}
            title="Male"
          />
        </View>
        <View style={styles.femaleGroup}>
          <Image
            style={styles.image}
            source={require('../../assets/images/female-pic.png')}
          />
          <Button
            textStyle={[
              styles.buttonText,
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
            outline={true}
            backgroundColor={'fff'}
            buttonStyle={styles.button}
            title="Female"
          />
        </View>
      </View>
      <View style={styles.unspecifiedContainer}>
        <View style={styles.unspecifiedGroup}>
          <Image
            style={styles.image}
            source={require('../../assets/images/unknown-gender.png')}
          />
          <Button
            textStyle={[
              styles.buttonText,
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
            outline={true}
            backgroundColor={'fff'}
            buttonStyle={styles.button}
            title="Prefer not to say"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  maleFemaleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 414,
    height: 200
  },
  unspecifiedContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 414,
    height: 200
  },
  unspecifiedGroup: {
    alignItems: 'center'
  },
  maleGroup: {
    alignItems: 'center'
  },
  femaleGroup: {
    alignItems: 'center'
  },
  image: {
    height: 110,
    width: 100,
    marginTop: 30
  },
  button: {
    width: 140,
    height: 30,
    borderRadius: 20,
    borderColor: '#0C3363'
  },
  buttonText: {
    fontSize: 14
  }
});

export default GenderScreen;
