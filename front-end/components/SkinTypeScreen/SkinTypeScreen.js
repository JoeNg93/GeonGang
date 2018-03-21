import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import commonStyles from '../../utils/styles';
import Carousel from 'react-native-snap-carousel';
import { widthPercentage } from '../../utils/dimensions';
import PropTypes from 'prop-types';

const itemWidth = 190;
const itemHeight = 250;

const renderSlideItem = ({ item, index }) => {
  return (
    <View style={{ width: itemWidth, height: itemHeight }} key={index}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image style={styles.focusSkinTypeImgSize} source={item.imgSrc} />
      </View>
    </View>
  );
};

const SkinTypeScreen = ({ entries, currentActiveItemIndex, onSnapToItem }) => {
  return (
    <View style={styles.container}>
      <Carousel
        sliderWidth={widthPercentage(100)}
        itemWidth={itemWidth}
        data={entries}
        renderItem={renderSlideItem}
        firstItem={1}
        inactiveSlideOpacity={0.7}
        inactiveSlideScale={0.8}
        enableSnap={true}
        onSnapToItem={onSnapToItem}
        containerCustomStyle={{ flexGrow: 0 }}
        loop={true}
        loopClonesPerSide={2}
      />
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  skinTypeTitle: {
    fontSize: 24,
    lineHeight: 27
  },
  skinTypeDescription: {
    fontSize: 14,
    lineHeight: 17
  },
  focusSkinTypeImgSize: {
    width: 103,
    height: 153
  },
  normalSkinTypeImgSize: {
    width: 90,
    height: 134
  }
});

SkinTypeScreen.propTypes = {
  entries: PropTypes.array.isRequired,
  currentActiveItemIndex: PropTypes.number.isRequired,
  onSnapToItem: PropTypes.func
};

SkinTypeScreen.defaultProps = {
  onSnapToItem: () => {}
};

export default SkinTypeScreen;
