import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Component3 extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Products',
    tabBarLabel: 'Products',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="bag" type="simple-line-icon" color={tintColor} />
    )
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Component3</Text>
      </View>
    );
  }
}

export default Component3;
