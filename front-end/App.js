import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Font, Asset } from 'expo';
import store from './store';
import { TabNavigator, StackNavigator } from 'react-navigation';
import commonStyles from './utils/styles';
import colorCode from './utils/colorCode';
import LoginScreenContainer from './components/LoginScreen/LoginScreenContainer';
import UserInputScreensContainer from './components/UserInputScreens/UserInputScreensContainer';
import ScanningProcessScreensContainer from './components/ScanningProcessScreens/ScanningProcessScreensContainer';
import HomePageScreen1Container from './components/HomepageScreen/HomepageScreen1Container';
import HomePageScreen2Container from './components/HomepageScreen/HomepageScreen2Container';
import Component1 from './components/Temp/Component1';
import Component3 from './components/Temp/Component3';
import UserProfileScreenContainer from './components/UserProfileScreen/UserProfileScreenContainer';

const MainNavigator = StackNavigator(
  {
    loginContainer: { screen: LoginScreenContainer },
    scanningContainer: { screen: ScanningProcessScreensContainer },
    userInputContainer: { screen: UserInputScreensContainer },
    mainContainer: {
      screen: TabNavigator(
        {
          homeContainer: {
            screen: StackNavigator({
              homepage1: { screen: HomePageScreen1Container },
              homepage2: { screen: HomePageScreen2Container }
            })
          },
          trackingContainer: { screen: StackNavigator({ screen: Component1 }) },
          profileContainer: {
            screen: StackNavigator({ screen: UserProfileScreenContainer })
          },
          productsContainer: { screen: StackNavigator({ screen: Component3 }) }
        },
        {
          lazy: true,
          tabBarOptions: {
            // Color when focus (color of each tab)
            activeTintColor: colorCode.darkBlue,
            // Style for each label
            labelStyle: [
              commonStyles.fontMontserratLight,
              { fontSize: 11, color: colorCode.lightLightGray }
            ],
            // Tab bar style
            style: {
              height: 56,
              paddingTop: 6,
              paddingBottom: 3
            }
          }
        }
      )
    }
  },
  { headerMode: 'none' } // Hide the header of main Stack Navigator
);

export default class App extends Component {
  state = {
    assetLoaded: false
  };

  componentDidMount = async () => {
    // Load Font
    await Font.loadAsync({
      'montserrat-light': require('./assets/fonts/Montserrat-Light.otf'),
      'montserrat-medium': require('./assets/fonts/Montserrat-Medium.otf'),
      'montserrat-regular': require('./assets/fonts/Montserrat-Regular.otf'),
      'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.otf')
    });

    // Load images
    await Asset.loadAsync(require('./assets/images/normal_skin.png'));
    await Asset.loadAsync(require('./assets/images/oily_skin.png'));
    await Asset.loadAsync(require('./assets/images/sensitive_skin.png'));
    await Asset.loadAsync(require('./assets/images/combination_skin.png'));
    await Asset.loadAsync(require('./assets/images/dry_skin.png'));
    await Asset.loadAsync(require('./assets/images/logo_icon.png'));
    await Asset.loadAsync(require('./assets/images/world-map.png'));
    await Asset.loadAsync(require('./assets/images/product-1.jpg'));
    await Asset.loadAsync(require('./assets/images/product-2.jpg'));
    await Asset.loadAsync(require('./assets/images/product-3.jpg'));
    await Asset.loadAsync(require('./assets/images/male-pic.png'));
    await Asset.loadAsync(require('./assets/images/female-pic.png'));
    await Asset.loadAsync(require('./assets/images/unknown-gender.png'));
    await Asset.loadAsync(require('./assets/images/moist.png'));
    await Asset.loadAsync(require('./assets/images/uv.png'));
    await Asset.loadAsync(require('./assets/images/dirt.png'));
    await Asset.loadAsync(require('./assets/images/pigment.png'));
    await Asset.loadAsync(require('./assets/images/Ellipse.png'));
    await Asset.loadAsync(require('./assets/images/logo.png'));
    await Asset.loadAsync(require('./assets/images/background.png'));
    await Asset.loadAsync(require('./assets/images/otherUser.png'));

    this.setState({ assetLoaded: true });
  };

  render() {
    if (this.state.assetLoaded) {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </Provider>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>Loading...</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
