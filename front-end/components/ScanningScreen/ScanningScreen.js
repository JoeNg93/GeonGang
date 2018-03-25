import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import commonStyles from "../../utils/styles";
import Header from "../common/Header";

const ScanningScreen = () => {
  return (
    <View style={styles.container}>
      <Header headerText="Skin analyzing" descriptionText="" />
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
      <View style={styles.loading}>
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
          52%
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
    // justifyContent: 'space-between',
    // alignItems: 'stretch'
  },

  informationText: {
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 32
    // backgroundColor: '#bababa'
  },

  loading: {
    flex: 2,
    justifyContent: "center"
    // backgroundColor: '#dadada'
  },

  loadingImage: {
    resizeMode: "contain",
    height: 193,
    width: undefined
  },

  loadingText: {
    fontSize: 48,
    textAlign: "center",
    marginTop: 32
  }
});

export default ScanningScreen;
