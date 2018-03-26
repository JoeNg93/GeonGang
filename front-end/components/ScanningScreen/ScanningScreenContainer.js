import React, { Component } from "react";
import ScanningScreen from "./ScanningScreen";

class ScanningScreenContainer extends Component {
  state = {
    scanningProgress: 52
  };

  render() {
    return <ScanningScreen scanningProgress={this.state.scanningProgress} />;
  }
}

export default ScanningScreenContainer;
