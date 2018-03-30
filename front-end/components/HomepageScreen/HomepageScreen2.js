import React from 'react';
import PropTypes from 'prop-types';
import SideSwipe from 'react-native-sideswipe';
import { screenWidth } from '../../utils/dimensions';
import commonStyles from '../../utils/styles';
import RecordCard from '../common/RecordCard';
import { StyleSheet, View, Text } from 'react-native';

const renderItem = ({
  itemIndex,
  currentIndex,
  item,
  animatedValue,
  favoriteHandle
}) => {
  return (
    <RecordCard
      itemIndex={itemIndex}
      animatedValue={animatedValue}
      gradientBackground={item.gradientBackground}
      date={item.date}
      score={item.overallScore.score}
      scoreTag={item.overallScore.scoreTag}
      scoreTagColor={item.overallScore.scoreTagColor}
      lightVersion={item.overallScore.lightVersion}
      displayRow={item.overallScore.displayRow}
      recommendText={item.skinConditionResult.recommendText}
      starAdded={item.starAdded}
      favoriteHandle={favoriteHandle}
    />
  );
};

const HomepageScreen2 = ({
  cards,
  currentIndex,
  onChangeCardIndex,
  favoriteHandle
}) => {
  return (
    <View style={styles.container}>
      <SideSwipe
        index={currentIndex}
        threshold={RecordCard.cardWidth / 2}
        onIndexChange={onChangeCardIndex}
        itemWidth={RecordCard.cardWidth}
        style={{ flex: 1, width: screenWidth }}
        contentContainerStyle={{ alignItems: 'center' }}
        data={cards}
        contentOffset={(screenWidth - RecordCard.cardWidth) / 2}
        renderItem={({ itemIndex, currentIndex, item, animatedValue }) =>
          renderItem({
            itemIndex,
            currentIndex,
            item,
            animatedValue,
            favoriteHandle
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

HomepageScreen2.propTypes = {
  cards: PropTypes.array,
  currentIndex: PropTypes.number,
  onChangeCardIndex: PropTypes.func
};

HomepageScreen2.defaultProps = {
  cards: [],
  currentIndex: 0,
  onChangeCardIndex: () => {}
};

export default HomepageScreen2;
