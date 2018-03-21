import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import commonStyles from '../../utils/styles';
import PropTypes from 'prop-types';

const Header = ({ headerText, descriptionText }) => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          commonStyles.fontMontserratRegular,
          commonStyles.colorDarkBlue,
          styles.header
        ]}
      >
        {headerText}
      </Text>
      <View style={styles.divider} />
      <Text
        style={[commonStyles.fontMontserratLight, commonStyles.colorDarkBlue, styles.description]}
      >
        {descriptionText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 60,
    paddingTop: 60
  },
  divider: {
    marginTop: 3,
    borderBottomWidth: 2,
    width: 56
  },
  header: {
    fontSize: 24,
    lineHeight: 29
  },
  description: {
    fontSize: 14,
    lineHeight: 17,
    marginTop: 25,
    textAlign: 'justify'
  }
});

Header.propTypes = {
  headerText: PropTypes.string.isRequired,
  descriptionText: PropTypes.string
};

Header.defaultProps = {
  descriptionText: ''
};

export default Header;