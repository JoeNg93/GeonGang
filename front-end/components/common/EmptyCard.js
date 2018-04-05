import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { Icon } from 'react-native-elements';
import commonStyles from '../../utils/styles';

const cardWidth = 317;

const EmptyCard = ({ gradientBackground }) => {
  return (
    <LinearGradient
      colors={gradientBackground}
      style={[styles.emptyCardContainer, styles.cardContainer]}
    >
      <Text style={[commonStyles.fontMontserratRegular, styles.emptyCardText]}>
        Add more records by scanning your skin !
      </Text>
      <Icon
        name="add"
        size={50}
        color="white"
        containerStyle={{
          margin: 0,
          width: 56,
          height: 56,
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 200
        }}
      />
    </LinearGradient>
  );
};

EmptyCard.cardWidth = cardWidth;

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
  emptyCardText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 40,
    textAlign: 'center'
  }
});

export default EmptyCard;
