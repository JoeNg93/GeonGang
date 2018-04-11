import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Component2 extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Profile',
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user" type="simple-line-icon" color={tintColor} />
    )
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Component2</Text>
      </View>
    );
  }
}

export default Component2;
