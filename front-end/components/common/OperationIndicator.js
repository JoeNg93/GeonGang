import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import colorCode from '../../utils/colorCode';
import PropTypes from 'prop-types';

const OperationIndicator = ({ display }) => {
  if (display) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={colorCode.darkBlue} />
      </View>
    );
  } else {
    return null;
  }
};

OperationIndicator.propTypes = {
  display: PropTypes.bool
};

OperationIndicator.defaultProps = {
  display: true
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

export default OperationIndicator;
