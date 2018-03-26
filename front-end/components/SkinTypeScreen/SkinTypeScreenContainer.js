import React, { Component } from 'react';
import SkinTypeScreen from './SkinTypeScreen';

class SkinTypeScreenContainer extends Component {
  state = {
    currentActiveItemIndex: 0
  };

  entries = [
    {
      title: 'Normal Skin',
      description: 'Smooth feeling with no dry spots or excess shine',
      imgSrc: require('../../assets/images/normal_skin.png')
    },
    {
      title: 'Dry Skin',
      description: 'Dehyrated or rough patches, flakiness and tighness',
      imgSrc: require('../../assets/images/dry_skin.png')
    },
    {
      title: 'Oily Skin',
      description: 'All-over tacky or slick feeling and noticeable shine',
      imgSrc: require('../../assets/images/oily_skin.png')
    },
    {
      title: 'Combination Skin',
      description: 'Oil in the T zone with areas of dryness',
      imgSrc: require('../../assets/images/combination_skin.png')
    },
    {
      title: 'Sensitive Skin',
      description: 'Usually dry and itchy, with redness and prone to acnes',
      imgSrc: require('../../assets/images/sensitive_skin.png')
    }
  ];

  onTouchBackBtn = () => {
    this.setState({
      currentActiveItemIndex:
        this.state.currentActiveItemIndex <= 0
          ? this.entries.length - 1
          : this.state.currentActiveItemIndex - 1
    });
  };

  onTouchNextBtn = () => {
    this.setState({
      currentActiveItemIndex:
        this.state.currentActiveItemIndex >= this.entries.length - 1
          ? 0
          : this.state.currentActiveItemIndex + 1
    });
  };

  render() {
    return (
      <SkinTypeScreen
        entries={this.entries}
        currentActiveItemIndex={this.state.currentActiveItemIndex}
        onTouchBackBtn={this.onTouchBackBtn}
        onTouchNextBtn={this.onTouchNextBtn}
      />
    );
  }
}

export default SkinTypeScreenContainer;
