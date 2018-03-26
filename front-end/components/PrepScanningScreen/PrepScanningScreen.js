import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import commonStyles from "../../utils/styles";
import Header from "../common/Header";
import PropTypes from "prop-types";

const PrepScanningScreen = ({ startAnalyzingHandle }) => {
  return (
    <View style={styles.container}>
      <Header
        headerText="Analyzing skin"
        descriptionText="Here are some scanning instructions, write something there so that our users know how to use the sensor"
      />
      <View style={styles.buttonArea}>
        <View style={styles.circle2}>
          <View style={styles.circle1}>
            <Button
              title="Press to start"
              textStyle={[
                commonStyles.fontMontserratRegular,
                {
                  // fontWeight: "700",
                  fontSize: 20,
                  lineHeight: 24,
                  textAlign: "center",
                  textAlignVertical: "center"
                }
              ]}
              buttonStyle={{
                backgroundColor: "#2D9CDB",
                width: 125,
                height: 125,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 70
              }}
              containerStyle={{ marginTop: 20 }}
              onPress={startAnalyzingHandle}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch"
  },
  buttonArea: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  circle1: {
    /* Alignment */
    justifyContent: "center",
    alignItems: "center",

    /* Box */
    height: 181,
    width: 181,
    backgroundColor: "rgba(45, 156, 219, 0.5)",
    borderRadius: 100
  },
  circle2: {
    /* Alignment */
    justifyContent: "center",
    alignItems: "center",

    /* Box */
    height: 247,
    width: 247,
    backgroundColor: "rgba(45, 156, 219, 0.25)",
    borderRadius: 130
  }
});

PrepScanningScreen.propTypes = {
  startAnalyzingHandle: PropTypes.func.isRequired
};

export default PrepScanningScreen;
