import React from 'react';
import PropTypes from 'prop-types';
import SideSwipe from 'react-native-sideswipe';
import { screenWidth } from '../../utils/dimensions';
import RecordCard from '../common/RecordCard';
import { StyleSheet, View } from 'react-native';

const cardMarginLeft = 15;
const cardMarginRight = 15;

const renderItem = ({ itemIndex, currentIndex, item, animatedValue }) => {
  return (
    <RecordCard
      gradientBackground={item.gradientBackground}
      score={item.overallScore.score}
      scoreTag={item.overallScore.scoreTag}
      scoreTagColor={item.overallScore.scoreTagColor}
      lightVersion={item.overallScore.lightVersion}
      displayRow={item.overallScore.displayRow}
      recommendText={item.skinConditionResult.recommendText}
      cardContainerStyle={{
        marginLeft: cardMarginLeft,
        marginRight: cardMarginRight,
        transform: [
          { scaleX: itemIndex !== currentIndex ? 1 : 1 },
          { scaleY: itemIndex !== currentIndex ? 1 : 1 }
        ]
      }}
    />
  );
};

const HomepageScreen2 = ({ cards, currentIndex, onChangeCardIndex }) => {
  return (
    <View style={styles.container}>
      <SideSwipe
        index={currentIndex}
        onIndexChange={onChangeCardIndex}
        itemWidth={RecordCard.cardWidth + cardMarginLeft + cardMarginRight}
        style={{ width: screenWidth }}
        data={cards}
        contentOffset={30}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
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
