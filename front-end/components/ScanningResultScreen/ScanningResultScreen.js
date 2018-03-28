import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Badge, Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import Header from '../common/Header';

const ScanningResultScreen = () => {
  return (
    <View>
      <Header headerText="Scan Result" />
      <View style={[styles.bodyContainer]}>
        <Text
          style={[
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue,
            styles.overallText
          ]}
        >
          Overall score
        </Text>

        {/*Overall container*/}
        <View style={[styles.overallContainer]}>
          <View style={[styles.overallScoreContainer]}>
            <Text
              style={[
                commonStyles.fontMontserratRegular,
                commonStyles.colorDarkBlue,
                styles.overallScore
              ]}
            >
              67,8
            </Text>
            <Text
              style={[
                commonStyles.fontMontserratLight,
                commonStyles.colorDarkBlue,
                styles.overallBand
              ]}
            >
              /100
            </Text>
          </View>
          <Badge containerStyle={[styles.badgeContainer]}>
            <Text style={[commonStyles.fontMontserratLight, styles.badgeText]}>
              moderate
            </Text>
          </Badge>
        </View>

        {/*Scanning result*/}
        <View style={styles.resultsContainer}>
          {/* Moisture*/}
          <View style={styles.skinConditionContainer}>
            <Image
              style={styles.moistIcon}
              source={require('../../assets/images/moist.png')}
            />
            <View style={styles.resultTextContainer}>
              <Text
                style={[
                  commonStyles.fontMontserratRegular,
                  commonStyles.colorDarkBlue,
                  styles.resultNumber
                ]}
              >
                45%
              </Text>
              <Text
                style={[
                  commonStyles.fontMontserratLight,
                  commonStyles.colorDarkBlue,
                  styles.resultName
                ]}
              >
                Moisture
              </Text>
            </View>
          </View>
          {/* UV level */}
          <View style={styles.skinConditionContainer}>
            <Image
              style={styles.uvIcon}
              source={require('../../assets/images/uv.png')}
            />
            <View style={styles.resultTextContainer}>
              <Text
                style={[
                  commonStyles.fontMontserratRegular,
                  commonStyles.colorDarkBlue,
                  styles.resultNumber
                ]}
              >
                88%
              </Text>
              <Text
                style={[
                  commonStyles.fontMontserratLight,
                  commonStyles.colorDarkBlue,
                  styles.resultName
                ]}
              >
                UV protection
              </Text>
            </View>
          </View>
          {/* Dirt */}
          <View style={styles.skinConditionContainer}>
            <Image
              style={styles.dirtIcon}
              source={require('../../assets/images/dirt.png')}
            />
            <View style={styles.resultTextContainer}>
              <Text
                style={[
                  commonStyles.fontMontserratRegular,
                  commonStyles.colorDarkBlue,
                  styles.resultNumber
                ]}
              >
                62%
              </Text>
              <Text
                style={[
                  commonStyles.fontMontserratLight,
                  commonStyles.colorDarkBlue,
                  styles.resultName
                ]}
              >
                Dirt
              </Text>
            </View>
          </View>
          {/* Pigmentation */}
          <View style={styles.skinConditionContainer}>
            <Image
              style={styles.pigmentIcon}
              source={require('../../assets/images/pigment.png')}
            />
            <View style={styles.resultTextContainer}>
              <Text
                style={[
                  commonStyles.fontMontserratRegular,
                  commonStyles.colorDarkBlue,
                  styles.resultNumber
                ]}
              >
                20%
              </Text>
              <Text
                style={[
                  commonStyles.fontMontserratLight,
                  commonStyles.colorDarkBlue,
                  styles.resultName
                ]}
              >
                Pigmentation
              </Text>
            </View>
          </View>
        </View>

        <Text
          style={[
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue,
            styles.recommendText
          ]}
        >
          Your skin is thisty, tired with lots of dirts and oil. We recommend
          cleaning your face and moisturizing before go to bed.
        </Text>
        <Button
          buttonStyle={{}}
          title="Proceed to next step"
          iconRight={{ name: 'arrow-right', type: 'feather' }}
          fontFamily="montserrat-regular"
          fontSize={20}
          backgroundColor="#4396DC"
          borderRadius={25}
          containerViewStyle={{ borderRadius: 25, width: 300, marginTop: 48 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    paddingLeft: 40
  },
  overallContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  overallText: {
    fontSize: 20,
    paddingTop: 28
  },
  overallScoreContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  overallScore: {
    fontSize: 50
  },
  overallBand: {
    fontSize: 26,
    marginBottom: 10
  },
  badgeContainer: {
    backgroundColor: '#4396DC',
    marginLeft: 23,
    marginBottom: 15
  },
  badgeText: {
    fontSize: 14,
    color: '#FFFFFF'
  },
  resultsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 37
  },
  skinConditionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 39,
    marginBottom: 50
  },
  resultTextContainer: {
    flexDirection: 'column'
  },
  resultNumber: {
    fontSize: 30
  },
  resultName: {
    fontSize: 14,
    marginTop: -6
  },
  moistIcon: {
    width: 26,
    height: 36,
    marginRight: 19
  },
  uvIcon: {
    width: 39,
    height: 39,
    marginRight: 18
  },
  dirtIcon: {
    width: 32,
    height: 32,
    marginRight: 15
  },
  pigmentIcon: {
    width: 31,
    height: 29,
    marginRight: 26
  },
  recommendText: {
    marginTop: -1,
    marginRight: 50,
    fontSize: 16
  }
});

export default ScanningResultScreen;
