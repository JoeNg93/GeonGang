import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import commonStyles from "../../utils/styles";
import Header from "../common/Header";

const ScanningScreen = ({ scanningProgress }) => {
  return (
    <View style={styles.container}>
      <Header headerText="Skin analyzing" descriptionText="" />
      <View style={styles.contents}>
        <Text
          style={[
            commonStyles.fontMontserratLight,
            commonStyles.colorDarkBlue,
            styles.informationText
          ]}
        >
          Hold on.{"\n"}
          We are scanning your skin.{"\n"}
          It will take just a minute.
        </Text>
        <Image
          source={require("../../assets/images/scan-loading-1.png")}
          style={styles.loadingImage}
        />
        <Text
          style={[
            commonStyles.fontMontserratRegular,
            commonStyles.colorDarkBlue,
            styles.loadingText
          ]}
        >
          {scanningProgress}%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  contents: {
    flex: 1,
    justifyContent: "center"
  },

  informationText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 60
  },

  loadingImage: {
    resizeMode: "contain",
    height: 193,
    width: undefined
  },

  loadingText: {
    fontSize: 48,
    textAlign: "center",
    marginVertical: 32
  }
});

export default ScanningScreen;
