import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { screenWidth } from '../../utils/dimensions';
import colorCode from '../../utils/colorCode';

const renderItem = ({ item }) => {
  return (
    <View style={{ flex: 1, width: screenWidth }} key={item.id}>
      {item.component}
    </View>
  );
};

const ScanningProcessScreens = ({ screens, onGetFlatListRef }) => {
  return (
    <View style={{ flex: 1, backgroundColor: colorCode.white }}>
      <FlatList
        ref={onGetFlatListRef}
        data={screens}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}
        horizontal={true}
        scrollEnabled={false}
      />
    </View>
  );
};

ScanningProcessScreens.propTypes = {
  screens: PropTypes.array,
  onGetFlatListRef: PropTypes.func
};

ScanningProcessScreens.defaultProps = {
  screens: [],
  onGetFlatListRef: () => {}
};

export default ScanningProcessScreens;
