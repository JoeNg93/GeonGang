import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import commonStyles from '../../utils/styles';
import { Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';

const LocationScreen = ({ located, locationInfo, clickHandle }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/world-map.png')}
        style={styles.locationImage}
      />

      {located === false ? (
        <Button
          buttonStyle={{ paddingLeft: 30, paddingRight: 30, marginTop: 55 }}
          title="Track your location"
          iconRight={{ name: 'my-location' }}
          fontFamily="montserrat-regular"
          fontSize={20}
          backgroundColor="#4396DC"
          borderRadius={25}
          containerViewStyle={{ borderRadius: 25 }}
          onPress={clickHandle}
        />
      ) : (
        <View>
          <Text
            style={[
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue,
              styles.title
            ]}
          >
            {locationInfo.location}
          </Text>
          <Text
            style={[
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue,
              styles.subtitle
            ]}
          >
            {locationInfo.climate}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  locationImage: {
    width: 377,
    height: 186
  },
  title: {
    fontSize: 22,
    marginTop: 55,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default LocationScreen;
