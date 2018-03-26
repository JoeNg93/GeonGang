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
      {descriptionText !== '' && (
        <Text
          style={[
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue,
            styles.description
          ]}
        >
          {descriptionText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 60
  },
  divider: {
    marginTop: 3,
    borderBottomWidth: 2,
    width: 56
  },
  header: {
    fontSize: 26,
    lineHeight: 29
  },
  description: {
    fontSize: 16,
    lineHeight: 17,
    marginTop: 25
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
