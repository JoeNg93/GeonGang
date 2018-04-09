import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import colorCode from '../../utils/colorCode';
import Header from '../common/Header';
import OverallScore from '../common/OverallScore';
import SkinConditionResult from '../common/SkinConditionResult';

const ScanningResultScreen = ({
  score,
  scoreTag,
  scoreTagColor,
  lightVersion,
  displayRow,
  moistureScore,
  dirtScore,
  uvScore,
  pigmentScore,
  recommendText
}) => {
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
        <OverallScore
          score={score}
          scoreTag={scoreTag}
          scoreTagColor={scoreTagColor}
          lightVersion={lightVersion}
          displayRow={displayRow}
        />
        <SkinConditionResult
          moistureScore={moistureScore}
          dirtScore={dirtScore}
          uvScore={uvScore}
          pigmentScore={pigmentScore}
          recommendText={recommendText}
        />
        <Button
          title="Proceed to next step"
          iconRight={{ name: 'arrow-right', type: 'feather' }}
          fontFamily="montserrat-regular"
          fontSize={20}
          backgroundColor={colorCode.darkBlue}
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
  overallText: {
    fontSize: 20,
    paddingTop: 32
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
    backgroundColor: colorCode.blue,
    marginLeft: 23,
    marginBottom: 15
  },
  badgeText: {
    fontSize: 14,
    color: colorCode.white
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
