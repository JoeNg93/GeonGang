import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Font, Asset } from 'expo';
import store from './store';

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
