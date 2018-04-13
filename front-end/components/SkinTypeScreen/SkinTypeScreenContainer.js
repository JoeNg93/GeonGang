import React, { Component } from 'react';
import SkinTypeScreen from './SkinTypeScreen';
import { connect } from 'react-redux';
import { setSkinType } from '../../actions/user_input';

class SkinTypeScreenContainer extends Component {
  state = {
    currentActiveItemIndex: 0
  };

  entries = [
    {
      title: 'Normal Skin',
      description: 'Smooth feeling with no dry spots or excess shine',
      imgSrc: require('../../assets/images/normal_skin.png'),
      value: 'normal'
    },
    {
      title: 'Dry Skin',
      description: 'Dehyrated or rough patches, flakiness and tighness',
      imgSrc: require('../../assets/images/dry_skin.png'),
      value: 'dry'
    },
    {
      title: 'Oily Skin',
      description: 'All-over tacky or slick feeling and noticeable shine',
      imgSrc: require('../../assets/images/oily_skin.png'),
      value: 'oily'
    },
    {
      title: 'Combination Skin',
      description: 'Oil in the T zone with areas of dryness',
      imgSrc: require('../../assets/images/combination_skin.png'),
      value: 'combination'
    },
    {
      title: 'Sensitive Skin',
      description: 'Usually dry and itchy, with redness and prone to acnes',
      imgSrc: require('../../assets/images/sensitive_skin.png'),
      value: 'sensitive'
    }
  ];

  onTouchBackBtn = () => {
    const newActiveItemIndex =
      this.state.currentActiveItemIndex <= 0
        ? this.entries.length - 1
        : this.state.currentActiveItemIndex - 1;
    this.setState({
      currentActiveItemIndex: newActiveItemIndex
    });
    this.props.setSkinType(this.entries[newActiveItemIndex].value);
  };

  onTouchNextBtn = () => {
    const newActiveItemIndex =
      this.state.currentActiveItemIndex >= this.entries.length - 1
        ? 0
        : this.state.currentActiveItemIndex + 1;
    this.setState({
      currentActiveItemIndex: newActiveItemIndex
    });
    this.props.setSkinType(this.entries[newActiveItemIndex].value);
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

export default connect(null, { setSkinType })(SkinTypeScreenContainer);
