import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import Header from '../common/Header';


const ScanningScreen = () => {
  return (
    <View style={styles.container}>
        <Header
        headerText="Skin analyzing"
        descriptionText=""
        />
        <View>
            
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch'
  }
});

export default ScanningScreen;
