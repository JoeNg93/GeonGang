import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import commonStyles from '../../utils/styles';
import Carousel from 'react-native-snap-carousel';
import { Icon } from 'react-native-elements';
import { widthPercentage } from '../../utils/dimensions';
import PropTypes from 'prop-types';
import HeaderWithLogo from '../common/HeaderWithLogo';

const SkinTypeScreen = ({
  entries,
  currentActiveItemIndex,
  onTouchBackBtn,
  onTouchNextBtn
}) => {
  return (
    <View>
      <HeaderWithLogo headerText="Your skin type" />
      <View style={styles.skinFaceContainer}>
        <TouchableOpacity onPress={onTouchBackBtn}>
          <View style={styles.arrowBackContainer}>
            <Icon name="keyboard-arrow-left" size={80} />
          </View>
        </TouchableOpacity>
        <View>
          <Image
            source={entries[currentActiveItemIndex].imgSrc}
            style={styles.skinTypeImgSize}
          />
        </View>
        <TouchableOpacity onPress={onTouchNextBtn}>
          <View style={styles.arrowNextContainer}>
            <Icon name="keyboard-arrow-right" size={80} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text
          style={[
            commonStyles.fontMontserratRegular,
            commonStyles.colorDarkBlue,
            styles.skinTypeTitle,
            { marginBottom: 10 }
          ]}
        >
          {entries[currentActiveItemIndex].title}
        </Text>
        <Text
          style={[
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue,
            styles.skinTypeDescription,
            { marginTop: 5, width: widthPercentage(50), textAlign: 'center' }
          ]}
        >
          {entries[currentActiveItemIndex].description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  skinTypeTitle: {
    fontSize: 24,
    lineHeight: 27
  },
  skinTypeDescription: {
    fontSize: 14,
    lineHeight: 17
  },
  skinTypeImgSize: {
    width: 103,
    height: 153
  },
  skinFaceContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40
  },
  arrowBackContainer: {
    marginRight: 20
  },
  arrowNextContainer: {
    marginLeft: 20
  }
});

SkinTypeScreen.propTypes = {
  entries: PropTypes.array.isRequired,
  currentActiveItemIndex: PropTypes.number.isRequired,
  onTouchBackBtn: PropTypes.func.isRequired,
  onTouchNextBtn: PropTypes.func.isRequired
};

export default SkinTypeScreen;
