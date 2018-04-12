import React from 'react';
import PropTypes from 'prop-types';
import SideSwipe from 'react-native-sideswipe';
import { screenWidth } from '../../utils/dimensions';
import commonStyles from '../../utils/styles';
import RecordCard from '../common/RecordCard';
import { StyleSheet, View, Text, Modal } from 'react-native';
import colorCode from '../../utils/colorCode';
import RecordDetailContainer from '../RecordDetailModal/RecordDetailContainer';

const renderItem = ({
  itemIndex,
  currentIndex,
  item,
  animatedValue,
  favoriteHandle,
  deleteHandle,
  fadeOutAnim,
  translateXAnim,
  onPressOpenRecordDetailModal
}) => {
  return (
    <RecordCard
      itemIndex={itemIndex}
      animatedValue={animatedValue}
      gradientBackground={item.gradientBackground}
      item={item}
      favoriteHandle={favoriteHandle}
      deleteHandle={deleteHandle}
      fadeOutAnim={item.fadeOutAnim}
      translateXAnim={translateXAnim}
      onPressOpenRecordDetailModal={onPressOpenRecordDetailModal}
    />
  );
};

const HomepageScreen2 = ({
  cards,
  currentIndex,
  onChangeCardIndex,
  favoriteHandle,
  deleteHandle,
  fadeOutAnim,
  translateXAnim,
  onPressOpenRecordDetailModal,
  recordDetailModalVisible
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
            favoriteHandle,
            deleteHandle,
            fadeOutAnim,
            translateXAnim,
            onPressOpenRecordDetailModal
          })}
      />
      <Modal visible={recordDetailModalVisible} animationType="slide">
        <RecordDetailContainer />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorCode.white
  }
});

HomepageScreen2.propTypes = {
  cards: PropTypes.array,
  currentIndex: PropTypes.number,
  onChangeCardIndex: PropTypes.func,
  onPressOpenRecordDetailModal: PropTypes.func,
  recordDetailModalVisible: PropTypes.bool
};

HomepageScreen2.defaultProps = {
  cards: [],
  currentIndex: 0,
  onChangeCardIndex: () => {},
  onPressOpenRecordDetailModal: () => {},
  recordDetailModalVisible: false
};

export default HomepageScreen2;
