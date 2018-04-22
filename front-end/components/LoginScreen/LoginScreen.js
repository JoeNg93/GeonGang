import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { FormInput, Icon, Button } from 'react-native-elements';
import { Transition } from 'react-navigation-fluid-transitions';
import commonStyles from '../../utils/styles';
import colorCode from '../../utils/colorCode';
import PropTypes from 'prop-types';

const LoginScreen = ({
  email,
  onChangeEmail,
  password,
  onChangePassword,
  onPressSignin
}) => {
  return (
    <View style={[style.pageContainer]}>
      <View style={[style.logoContainer]}>
        <Transition shared="logo">
          <Image
            style={[style.logoImage]}
            source={require('../../assets/images/logo.png')}
            resizeMode='contain'
          />
        </Transition>
      </View>
      <Transition appear='right'>
        <View style={[style.loginContainer]}>
          <View style={[style.loginPlace]}>
            <FormInput
              containerStyle={[style.loginField]}
              inputStyle={[commonStyles.fontMontserratLight, style.loginText]}
              placeholder={'email address'}
              value={email}
              placeholderTextColor={[colorCode.lightgray]}
              onChangeText={onChangeEmail}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <FormInput
              containerStyle={[style.loginField]}
              inputStyle={[commonStyles.fontMontserratLight, style.loginText]}
              placeholder={'password'}
              value={password}
              secureTextEntry={true}
              placeholderTextColor={[colorCode.lightgray]}
              onChangeText={onChangePassword}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <Text style={[commonStyles.fontMontserratLight, style.socialText]}>
              or login using social media
            </Text>
          </View>
          <View style={[style.socialGroup]}>
            <Icon
              type="font-awesome"
              name="facebook-square"
              size={34}
              color="#29487D"
              iconStyle={[style.socialIcon]}
            />
            <Icon
              type="font-awesome"
              name="google-plus-square"
              size={34}
              color="#FC2B42"
              iconStyle={[style.socialIcon]}
            />
            <Icon
              type="font-awesome"
              name="twitter-square"
              size={34}
              color="#55ACEE"
              iconStyle={[style.socialIcon]}
            />
          </View>
        </View>
      </Transition>
      <Transition shared='background'>
        <Image
          source={require('../../assets/images/background.png')}
          style={style.bottomBackgroundImage}
        />
      </Transition>
      <Transition appear='horizontal'>
        <View style={style.buttonContainer}>
          <Button
            title="Login"
            fontFamily="montserrat-regular"
            fontSize={20}
            backgroundColor={colorCode.darkBlue}
            borderRadius={25}
            containerViewStyle={[style.loginButton]}
            onPress={onPressSignin}
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
    marginTop: 60,
    alignItems: 'center'
  },
  logoImage: {
    width: 170,
    height: 144
  },
  loginPlace: {
    marginTop: 13,
  },
  loginField: {
    marginTop: 36,
    marginLeft: -2,
    marginRight: -2,
  },
  loginText: {
    width: 320,
    color: '#303030',
    fontSize: 16,
    marginLeft: 2
  },
  socialText: {
    color: colorCode.lightgray,
    fontSize: 16,
    marginTop: 36
  },
  socialGroup: {
    marginTop: 11,
    flexDirection: 'row'
  },
  socialIcon: {
    marginRight: 21
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

LoginScreen.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
  onPressSignin: PropTypes.func
};

LoginScreen.defaultProps = {
  onChangeEmail: () => {},
  onChangePassword: () => {},
  onPressSignin: () => {}
};

export default LoginScreen;
