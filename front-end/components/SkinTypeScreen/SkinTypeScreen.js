import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SkinTypeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'montserrat-light' }}>Skin Type Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SkinTypeScreen;
