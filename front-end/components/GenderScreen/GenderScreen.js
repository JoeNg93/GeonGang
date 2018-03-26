import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import HeaderWithLogo from '../common/HeaderWithLogo';
import PropTypes from 'prop-types';
import colorCode from '../../utils/colorCode';

const GenderScreen = ({
  onTouchMaleBtn,
  onTouchFemaleBtn,
  onTouchUnknownBtn,
  gender
}) => {
  return (
    <View>
      <HeaderWithLogo headerText="Your gender" />
      <View style={styles.container}>
        <View style={styles.maleFemaleContainer}>
          <View style={styles.maleGroup}>
            <Image
              style={styles.image}
              source={require('../../assets/images/male-pic.png')}
            />
            <Button
              textStyle={[styles.buttonText, commonStyles.fontMontserratLight]}
              backgroundColor={
                gender === 'male' ? colorCode.darkBlue : colorCode.white
              }
              color={gender === 'male' ? colorCode.white : colorCode.darkBlue}
              buttonStyle={styles.button}
              title="Male"
              onPress={onTouchMaleBtn}
            />
          </View>
          <View style={styles.femaleGroup}>
            <Image
              style={styles.image}
              source={require('../../assets/images/female-pic.png')}
            />
            <Button
              textStyle={[styles.buttonText, commonStyles.fontMontserratLight]}
              backgroundColor={
                gender === 'female' ? colorCode.darkBlue : colorCode.white
              }
              color={gender === 'female' ? colorCode.white : colorCode.darkBlue}
              buttonStyle={styles.button}
              title="Female"
              onPress={onTouchFemaleBtn}
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
              textStyle={[styles.buttonText, commonStyles.fontMontserratLight]}
              backgroundColor={
                gender === 'unknown' ? colorCode.darkBlue : colorCode.white
              }
              color={
                gender === 'unknown' ? colorCode.white : colorCode.darkBlue
              }
              buttonStyle={styles.button}
              title="Prefer not to say"
              onPress={onTouchUnknownBtn}
            />
          </View>
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
    paddingTop: 35
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
    borderColor: colorCode.darkBlue,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 14
  }
});

GenderScreen.propTypes = {
  onTouchMaleBtn: PropTypes.func,
  onTouchFemaleBtn: PropTypes.func,
  onTouchUnknownBtn: PropTypes.func,
  gender: PropTypes.string.isRequired
};

GenderScreen.defaultProps = {
  onTouchMaleBtn: () => {},
  onTouchFemaleBtn: () => {},
  onTouchUnknownBtn: () => {}
};

export default GenderScreen;
