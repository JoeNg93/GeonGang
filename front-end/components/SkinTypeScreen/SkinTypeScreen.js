import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import commonStyles from '../../utils/styles';
import colorCode from '../../utils/colorCode';
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
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={onTouchBackBtn}>
          <View style={styles.arrowBackContainer}>
            <Icon
              name="arrow-left"
              type="simple-line-icon"
              size={40}
              color={colorCode.darkBlue}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.skinTypeContainer}>
          <Image
            source={entries[currentActiveItemIndex].imgSrc}
            style={styles.skinTypeImgSize}
          />
          <Text
            style={[
              commonStyles.fontMontserratRegular,
              commonStyles.colorDarkBlue,
              styles.skinTypeTitle,
              { marginBottom: 10, textAlign: 'center' }
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
        <TouchableOpacity onPress={onTouchNextBtn}>
          <View style={styles.arrowNextContainer}>
            <Icon
              name="arrow-right"
              type="simple-line-icon"
              size={40}
              color={colorCode.darkBlue}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 80,
    paddingLeft: 35,
    paddingRight: 35
  },
  skinTypeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 2
  },
  skinTypeTitle: {
    marginTop: 40,
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
  }
});

SkinTypeScreen.propTypes = {
  entries: PropTypes.array.isRequired,
  currentActiveItemIndex: PropTypes.number.isRequired,
  onTouchBackBtn: PropTypes.func.isRequired,
  onTouchNextBtn: PropTypes.func.isRequired
};

export default SkinTypeScreen;
