import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon, Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import { screenWidth } from '../../utils/dimensions';

const renderItem = ({ item }) => {
  return (
    <View style={{ flex: 1, width: screenWidth }} key={item.id}>
      {item.component}
    </View>
  );
};

const renderNextButton = onTouchNextScreen => {
  return (
    <TouchableOpacity
      onPress={onTouchNextScreen}
      style={{ marginLeft: 'auto' }}
    >
      <View style={[styles.nextBtn, commonStyles.backgroundColorBlue]}>
        <Icon name="arrow-forward" color="white" />
      </View>
    </TouchableOpacity>
  );
};

const renderBackButton = onTouchPrevScreen => {
  return (
    <TouchableOpacity onPress={onTouchPrevScreen}>
      <View style={styles.backBtn}>
        <Icon
          name="arrow-back"
          color="#0C3363"
          containerStyle={styles.backArrowIcon}
        />
        <Text
          style={[
            styles.backText,
            commonStyles.fontMontserratRegular,
            commonStyles.colorDarkBlue
          ]}
        >
          back
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const UserInputScreens = ({
  data,
  onGetFlatListRef,
  onTouchNextScreen,
  onTouchPrevScreen
}) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        ref={onGetFlatListRef}
        data={data}
        renderItem={({ item }) =>
          renderItem({ item, onTouchNextScreen, onTouchPrevScreen })
        }
        keyExtractor={(item, index) => item.id}
        horizontal={true}
        scrollEnabled={false}
      />
      <View style={styles.buttonsContainer}>
        {renderBackButton(onTouchPrevScreen)}
        {renderNextButton(onTouchNextScreen)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nextBtn: {
    width: 41,
    height: 41,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backArrowIcon: {
    width: 17,
    height: 17,
    marginRight: 8
  },
  backText: {
    fontSize: 16,
    lineHeight: 17,
    marginTop: 3
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 42,
    paddingRight: 38,
    paddingBottom: 25
  }
});

UserInputScreens.propTypes = {
  data: PropTypes.array,
  onGetFlatListRef: PropTypes.func,
  onTouchNextScreen: PropTypes.func,
  onTouchPrevScreen: PropTypes.func
};

UserInputScreens.defaultProps = {
  data: [],
  onGetFlatListRef: () => {},
  onTouchNextScreen: () => {},
  onTouchPrevScreen: () => {}
};

export default UserInputScreens;
