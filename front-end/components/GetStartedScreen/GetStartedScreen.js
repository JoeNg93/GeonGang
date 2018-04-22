import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import { Button } from 'react-native-elements';
import colorCode from '../../utils/colorCode';
import PropTypes from 'prop-types';

const GetStartedScreen = ({ onPressNextStep }) => {
  return (
    <View style={[style.pageContainer]}>
      <View style={[style.logoContainer]}>
        <Transition shared="logo">
          <Image
            style={[style.logoImage]}
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
          />
        </Transition>
      </View>
      <Transition shared="background">
        <Image
          source={require('../../assets/images/background.png')}
          style={style.bottomBackgroundImage}
        />
      </Transition>
      <Transition appear='none' disappear='horizontal'>
        <View style={style.buttonContainer}>
          <Button
            title="Get started"
            fontFamily="montserrat-regular"
            fontSize={20}
            backgroundColor={colorCode.darkBlue}
            borderRadius={25}
            containerViewStyle={[style.loginButton]}
            onPress={onPressNextStep}
          />
        </View>
      </Transition>
    </View>
  );
};

const style = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colorCode.white,
    alignItems: 'center'
  },
  logoContainer: {
    marginTop: 168,
    alignItems: 'center'
  },
  logoImage: {
    width: 220,
    height: 187
  },
  bottomBackgroundImage: {
    position: 'absolute',
    zIndex: -1,
    bottom: 0,
    height: 236,
    width: '100%'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: 175,
    marginBottom: 77
  }
});

GetStartedScreen.propTypes = {
  onPressNextStep: PropTypes.func
};

GetStartedScreen.defaultProps = {
  onPressNextStep: () => {}
};

export default GetStartedScreen;
