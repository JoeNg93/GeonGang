import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import UserProfileScreen from './UserProfileScreen';
import commonStyles from '../../utils/styles';

class UserProfileScreenContainer extends Component {
  state = {
    selectedIndex: 0
  };

  updateIndex = this.updateIndex.bind(this);

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  myProducts = [
    {
      name: 'Neutrogena Hydro Boost Water Gel',
      avatar_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56yHB2BJVmYv7VUsodB7C5Dv2t31hC9uWvHPhIZWoO5sW-phYsg'
    },
    {
      name: 'Garnier SkinActive Micellar Cleansing Water',
      avatar_url:
        'data:image/jpeg;base64,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'
    },
    {
      name: 'Caudalie Premier Cru La Creme Riche',
      avatar_url:
        'data:image/jpeg;base64,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'
    },
    {
      name: 'Neutrogena Hydro Boost Water Gel',
      avatar_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56yHB2BJVmYv7VUsodB7C5Dv2t31hC9uWvHPhIZWoO5sW-phYsg'
    },
    {
      name: 'Neutrogena Hydro Boost Water Gel',
      avatar_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56yHB2BJVmYv7VUsodB7C5Dv2t31hC9uWvHPhIZWoO5sW-phYsg'
    }
  ];

  _renderItem({ item, index }) {
    return (
      <View style={styles.productContainer}>
        <Card containerStyle={styles.productCard}>
          <Image
            resizeMode={'contain'}
            style={styles.image}
            source={{ uri: item.avatar_url }}
          />
          <Text
            style={[
              styles.name,
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
          >
            {item.name}
          </Text>
        </Card>
      </View>
    );
  }

  render() {
    const { selectedIndex } = this.state;
    const buttons = ['Profile', 'Friends', 'Reviews'];
    return (
      <UserProfileScreen
        buttons={buttons}
        selectedIndex={this.state.selectedIndex}
        updateIndex={this.updateIndex}
        screen={this.state.screen}
        _renderItem={this._renderItem}
        myProducts={this.myProducts}
      />
    );
  }
}

const styles = StyleSheet.create({
  productContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 111,
    height: 138,
    marginRight: 10,
    marginLeft: 10
  },
  productCard: {
    display: 'flex',
    width: 111,
    height: 138,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'rgba(130, 130, 130, 0.25)',
    shadowOpacity: 1,
    shadowRadius: 2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5
  },
  image: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 5,
    height: 60,
    width: 60
  },
  name: {
    alignSelf: 'center',
    fontSize: 10,
    textAlign: 'center'
  }
});

export default UserProfileScreenContainer;
