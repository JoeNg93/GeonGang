import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo';
import { Icon } from 'react-native-elements';
import OverallScore from '../common/OverallScore';
import colorCode from '../../utils/colorCode';
import commonStyles from '../../utils/styles';
import PropTypes from 'prop-types';

const cardWidth = 317;

const RecordCard = ({
  itemIndex,
  animatedValue,
  gradientBackground,
  date,
  score,
  scoreTag,
  scoreTagColor,
  lightVersion,
  displayRow,
  recommendText,
  cardContainerStyle,
  starAdded,
  deleteHandle,
  favoriteHandle
}) => {
  return (
    <Animated.View
      style={{
        opacity: animatedValue.interpolate({
          inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
          outputRange: [0.8, 1, 0.8]
        }),
        transform: [
          {
            scale: animatedValue.interpolate({
              inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
              outputRange: [0.8, 1, 0.8],
              extrapolate: 'clamp'
            })
          }
        ],
        alignItems: 'center'
      }}
    >
      <Animated.Text
        style={[
          commonStyles.fontMontserratLight,
          commonStyles.colorDarkBlue,
          { fontSize: 20, marginBottom: 30 },
          {
            opacity: animatedValue.interpolate({
              inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
              outputRange: [0, 1, 0]
            }),
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
                  outputRange: [-30, 0, -30],
                  extrapolate: 'clamp'
                })
              }
            ]
          }
        ]}
      >
        {date}
      </Animated.Text>
      <LinearGradient
        colors={gradientBackground}
        style={[styles.cardContainer, cardContainerStyle]}
      >
        <OverallScore
          score={score}
          scoreTag={scoreTag}
          scoreTagColor={scoreTagColor}
          lightVersion={lightVersion}
          displayRow={displayRow}
        />
        <Text style={[commonStyles.fontMontserratLight, styles.recommendText]}>
          {recommendText}
        </Text>
      </LinearGradient>
      <View style={styles.iconPanel}>
        <TouchableOpacity onPress={deleteHandle}>
          <Icon
            name="trash-o"
            type="font-awesome"
            color="#828282"
            size={35}
            containerStyle={{ marginRight: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={favoriteHandle}>
          <Icon
            name={starAdded === false ? 'star-o' : 'star'}
            type="font-awesome"
            color={starAdded === false ? '#828282' : '#FFC61A'}
            size={35}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

RecordCard.cardWidth = cardWidth;

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    height: 380,
    borderRadius: 20,
    paddingTop: 64,
    paddingLeft: 35,
    paddingRight: 45,
    paddingBottom: 20,
    overflow: 'hidden',
    shadowColor: '#787878',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8
  },
  recommendText: {
    marginTop: 26,
    fontSize: 14,
    color: 'white'
  },
  iconPanel: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 25,
    marginRight: 20
  }
});

RecordCard.propTypes = {
  gradientBackground: PropTypes.array.isRequired,
  recommendtext: PropTypes.string.isRequired,
  cardContainerStyle: PropTypes.object,
  itemIndex: PropTypes.number.isRequired,
  animatedValue: PropTypes.object.isRequired,
  starAdded: PropTypes.bool,
  deleteHandle: PropTypes.func,
  favoriteHandle: PropTypes.func
};

RecordCard.defaultProps = {
  recommendtext: '',
  cardContainerStyle: {},
  starAdded: false,
  deleteHandle: () => {},
  favoriteHandle: () => {}
};

export default RecordCard;
