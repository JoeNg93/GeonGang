import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';
import commonStyles from '../../utils/styles';

const ProfileComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rows1}>
        <View style={styles.columns1}>
          <Text
            style={[styles.columnHeading, commonStyles.fontMontserratLight]}
          >
            Age
          </Text>
          <Text
            style={[
              styles.columnValue,
              commonStyles.colorDarkBlue,
              commonStyles.fontMontserratLight
            ]}
          >
            23
          </Text>
        </View>
        <View style={styles.columns1}>
          <Text
            style={[styles.columnHeading, commonStyles.fontMontserratLight]}
          >
            Gender
          </Text>
          <Text
            style={[
              styles.columnValue,
              commonStyles.colorDarkBlue,
              commonStyles.fontMontserratLight
            ]}
          >
            Female
          </Text>
        </View>
      </View>
      <View style={styles.rows1}>
        <View style={styles.columns2}>
          <Text
            style={[styles.columnHeading, commonStyles.fontMontserratLight]}
          >
            Skin color
          </Text>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text
              style={[
                styles.columnValue,
                commonStyles.colorDarkBlue,
                commonStyles.fontMontserratLight
              ]}
            >
              Medium
            </Text>
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 50,
                backgroundColor: '#FDC786',
                marginLeft: 15
              }}
            />
          </View>
        </View>
        <View style={styles.columns2}>
          <Text
            style={[styles.columnHeading, commonStyles.fontMontserratLight]}
          >
            Skin type
          </Text>
          <Text
            style={[
              styles.columnValue,
              commonStyles.colorDarkBlue,
              commonStyles.fontMontserratLight
            ]}
          >
            Oily skin
          </Text>
        </View>
      </View>
      <View style={styles.rows}>
        <View style={styles.columns}>
          <Text
            style={[styles.columnHeading, commonStyles.fontMontserratLight]}
          >
            Climate
          </Text>
          <Text
            style={[
              styles.columnValue,
              commonStyles.colorDarkBlue,
              commonStyles.fontMontserratLight
            ]}
          >
            Dry climate
          </Text>
        </View>
        <View style={styles.columns}>
          <Text
            style={[styles.columnHeading, commonStyles.fontMontserratLight]}
          >
            Skin condition
          </Text>
          <Badge containerStyle={{ backgroundColor: '#4396DC', width: 95 }}>
            <Text
              style={[styles.skinCondition, commonStyles.fontMontserratLight]}
            >
              moderate
            </Text>
          </Badge>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 100,
    paddingLeft: 40,
    paddingRight: 40
  },
  rows: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 20
  },
  rows1: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 20
  },
  columns: {
    display: 'flex',
    flexDirection: 'column'
  },
  columns1: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 170
  },
  columns2: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 82
  },
  columnHeading: {
    fontSize: 18,
    color: '#828282',
    lineHeight: 26
  },
  columnValue: {
    fontSize: 20
  },
  skinCondition: {
    fontSize: 14,
    color: '#fff'
  }
});

export default ProfileComponent;
