import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import PropTypes from 'prop-types';
import colorCode from '../../utils/colorCode';

const ProfileComponent = ({
  age,
  gender,
  skinColor,
  skinType,
  climate,
  skinCondition
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rows}>
        <View style={[styles.columns, styles.columnLeft]}>
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
            {age}
          </Text>
        </View>
        <View style={[styles.columns, styles.columnRight]}>
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
            {gender}
          </Text>
        </View>
      </View>
      <View style={styles.rows}>
        <View style={[styles.columns, styles.columnLeft]}>
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
              {skinColor}
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
        <View style={[styles.columns, styles.columnRight]}>
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
            {skinType}
          </Text>
        </View>
      </View>
      <View style={styles.rows}>
        <View style={[styles.columns, styles.columnLeft]}>
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
            {climate}
          </Text>
        </View>
        <View style={[styles.columns, styles.columnRight]}>
          <Text
            style={[styles.columnHeading, commonStyles.fontMontserratLight]}
          >
            Skin condition
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Badge
              containerStyle={{
                backgroundColor: colorCode[`${skinCondition}Tag`],
                paddingLeft: 20,
                paddingRight: 20
              }}
            >
              <Text
                style={[styles.skinConditionText, commonStyles.fontMontserratLight]}
              >
                {skinCondition}
              </Text>
            </Badge>
          </View>
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
    paddingLeft: 20,
    paddingTop: 15,
    paddingBottom: 8
  },
  rows: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 20
  },
  columns: {
    display: 'flex',
    flexDirection: 'column',
  },
  columnLeft: {
    flex: 3
  },
  columnRight: {
    flex: 2
  },
  columnHeading: {
    fontSize: 16,
    color: '#828282',
    lineHeight: 26
  },
  columnValue: {
    fontSize: 18
  },
  skinConditionText: {
    fontSize: 14,
    color: '#fff'
  }
});

ProfileComponent.propTypes = {
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
  skinColor: PropTypes.string.isRequired,
  skinType: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  skinCondition: PropTypes.string.isRequired
};

export default ProfileComponent;
