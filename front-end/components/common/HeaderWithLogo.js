import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import commonStyles from '../../utils/styles';
import PropTypes from 'prop-types';

const HeaderWithLogo = ({ headerText }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/logo_icon.png')}
      />
      <View style={styles.divider} />
      <Text
        style={[
          commonStyles.fontMontserratRegular,
          commonStyles.colorDarkBlue,
          styles.header
        ]}
      >
        {headerText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 60,
    paddingTop: 54
  },
  divider: {
    marginTop: 16,
    borderBottomWidth: 2,
    width: 56,
    marginLeft: 8
  },
  header: {
    fontSize: 26,
    lineHeight: 29,
    marginTop: 16,
    marginLeft: 8
  },
  image: {
    width: 71,
    height: 84
  }
});

HeaderWithLogo.propTypes = {
  headerText: PropTypes.string.isRequired
};

export default HeaderWithLogo;
