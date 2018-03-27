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
              buttonStyle={[styles.button, { width: 150 }]}
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
              buttonStyle={[styles.button, { width: 150 }]}
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
              buttonStyle={[
                styles.button,
                { paddingLeft: 26, paddingRight: 26 }
              ]}
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
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 35,
    paddingLeft: 10,
    paddingRight: 10
  },
  maleFemaleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  unspecifiedContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15
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
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 20,
    borderColor: colorCode.darkBlue,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 16
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
