import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import commonStyles from '../../utils/styles';
import colorCode from '../../utils/colorCode';
import { Button, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import HeaderWithLogo from '../common/HeaderWithLogo';

const LocationScreen = ({ located, locationInfo, clickHandle }) => {
  return (
    <View>
      <HeaderWithLogo headerText="Your climate" />
      <View style={styles.contentContainer}>
        <Image
          source={require('../../assets/images/world-map.png')}
          style={styles.locationImage}
        />

        {located === false ? (
          <Button
            buttonStyle={{ paddingLeft: 30, paddingRight: 30, marginTop: 55 }}
            title="Track your location"
            iconRight={{ name: 'my-location' }}
            textStyle={[commonStyles.fontMontserratRegular, { fontSize: 20 }]}
            backgroundColor={colorCode.blue}
            borderRadius={25}
            containerViewStyle={{ borderRadius: 25 }}
            onPress={clickHandle}
          />
        ) : (
          <View style={styles.locationInfo}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    marginTop: 70
  },
  locationImage: {
    width: 361,
    height: 178
  },
  locationInfo: {
    padding: 40
  },
  title: {
    fontSize: 22,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center'
  }
});

export default LocationScreen;
