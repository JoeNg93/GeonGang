import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class Component1 extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Tracking',
    tabBarLabel: 'Tracking',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="graph" type="simple-line-icon" color={tintColor} />
    )
  });

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Component1</Text>
      </View>
    );
  }
}

export default Component1;
