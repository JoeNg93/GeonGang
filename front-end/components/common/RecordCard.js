import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo';
import { Icon } from 'react-native-elements';
import OverallScore from '../common/OverallScore';
import EmptyCard from '../common/EmptyCard';
import colorCode from '../../utils/colorCode';
import commonStyles from '../../utils/styles';
import PropTypes from 'prop-types';
import moment from 'moment';

const cardWidth = 317;

const RecordCard = ({
  item,
  itemIndex,
  animatedValue,
  nonInteractive,
  gradientBackground,
  cardContainerStyle,
  deleteHandle,
  favoriteHandle,
  fadeOutAnim,
  translateXAnim
}) => {
  return nonInteractive === true ? (
    <RecordCardComponent gradientBackground={gradientBackground} item={item} />
  ) : (
    <Animated.View
      style={{
        opacity: fadeOutAnim,
        transform: [
          {
            scale: animatedValue.interpolate({
              inputRange: [itemIndex - 1, itemIndex, itemIndex + 1],
              outputRange: [0.8, 1, 0.8],
              extrapolate: 'clamp'
            })
          },
          {
            translateX: translateXAnim
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
          },
          item.emptyCard === true ? { opacity: 0 } : { opacity: 1 }
        ]}
      >
        {moment(item.date).format('Do MMMM YYYY')}
      </Animated.Text>
      {item.emptyCard === true ? (
        <EmptyCard gradientBackground={gradientBackground} />
      ) : (
        <View>
          <RecordCardComponent
            gradientBackground={gradientBackground}
            item={item}
            cardContainerStyle={cardContainerStyle}
          />
        </View>
      )}
      <View style={styles.iconPanel}>
        <TouchableOpacity onPress={deleteHandle}>
          <Icon
            name="trash-o"
            type="font-awesome"
            color="#828282"
            size={35}
            iconStyle={
              item.emptyCard === true ? { opacity: 0 } : { opacity: 1 }
            }
            containerStyle={{ marginRight: 25 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={favoriteHandle}>
          <Icon
            name={item.starAdded === false ? 'star-o' : 'star'}
            type="font-awesome"
            color={item.starAdded === false ? '#828282' : '#FFC61A'}
            iconStyle={
              item.emptyCard === true ? { opacity: 0 } : { opacity: 1 }
            }
            size={35}
          />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const RecordCardComponent = ({
  gradientBackground,
  item,
  cardContainerStyle
}) => {
  return (
    <LinearGradient
      colors={gradientBackground}
      style={[
        styles.cardContainer,
        cardContainerStyle,
        {
          paddingTop: 64,
          paddingLeft: 35,
          paddingRight: 45,
          paddingBottom: 20
        }
      ]}
    >
      <OverallScore
        score={item.overallScore.score}
        scoreTag={item.overallScore.scoreTag}
        scoreTagColor={item.overallScore.scoreTagColor}
        lightVersion={item.overallScore.lightVersion}
        displayRow={item.overallScore.displayRow}
      />
      <Text style={[commonStyles.fontMontserratLight, styles.recommendText]}>
        {item.skinConditionResult.recommendText}
      </Text>
    </LinearGradient>
  );
};

RecordCard.cardWidth = cardWidth;

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    height: 380,
    borderRadius: 20,
    shadowColor: '#787878',
    shadowOffset: { width: 1, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8
  },
  emptyCardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40
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
  },
  emptyCardText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 40,
    textAlign: 'center'
  }
});

RecordCard.propTypes = {
  gradientBackground: PropTypes.array.isRequired,
  date: PropTypes.string,
  recommendtext: PropTypes.string,
  cardContainerStyle: PropTypes.object,
  itemIndex: PropTypes.number,
  animatedValue: PropTypes.object,
  starAdded: PropTypes.bool,
  emptyCard: PropTypes.bool,
  deleteHandle: PropTypes.func,
  favoriteHandle: PropTypes.func
};

RecordCard.defaultProps = {
  recommendtext: '',
  date: '',
  cardContainerStyle: {},
  starAdded: false,
  emptyCard: false,
  deleteHandle: () => {},
  favoriteHandle: () => {}
};

export default RecordCard;
