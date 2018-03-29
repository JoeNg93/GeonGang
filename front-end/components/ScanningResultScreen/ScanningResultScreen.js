import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';
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
  overallText: {
    fontSize: 20,
    paddingTop: 32
  }
});

export default ScanningResultScreen;
