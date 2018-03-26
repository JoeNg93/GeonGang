import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';

const UserProfileScreen = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

export default UserProfileScreen;
