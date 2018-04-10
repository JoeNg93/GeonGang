import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import {
  Button,
  Icon,
  ButtonGroup,
  Divider,
  Avatar
} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { widthPercentage } from '../../utils/dimensions';
import PropTypes from 'prop-types';
import commonStyles from '../../utils/styles';
import ProfileComponentContainer from '../ProfileComponent/ProfileComponentContainer';
import ReviewsComponentContainer from '../ReviewsComponent/ReviewsComponentContainer';
import FriendsComponentContainer from '../FriendsComponent/FriendsComponentContainer';
import colorCode from '../../utils/colorCode';

function renderScreen(selectedIndex) {
  if (selectedIndex == 0) {
    return <ProfileComponentContainer />;
  } else if (selectedIndex == 1) {
    return <FriendsComponentContainer />;
  } else {
    return <ReviewsComponentContainer />;
  }
}

const UserProfileScreen = ({
  buttons,
  selectedIndex,
  updateIndex,
  _renderItem,
  myProducts,
  recommendations
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="bell"
          type="material-community"
          color="#fff"
          size={22}
          iconStyle={styles.headerButtons}
        />
        <Icon
          name="settings"
          type="material-community"
          color="#fff"
          size={22}
          iconStyle={styles.headerButtons}
        />

        <Image
          style={styles.image}
          source={require('../../assets/images/Ellipse.png')}
        />
      </View>
      <View style={styles.editAvatarIconContainer}>
        <Icon
          name="pencil"
          type="material-community"
          color="#fff"
          size={17}
          containerStyle={styles.editAvatarButton}
          innerBorderStyle={{ width: 0 }}
        />
      </View>
      <Text
        style={[
          styles.userName,
          commonStyles.colorDarkBlue,
          commonStyles.fontMontserratRegular
        ]}
      >
        Jennifer Aniston
      </Text>
      <View>
        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={styles.buttonGroupContainer}
          buttonStyle={styles.buttonGroupButtons}
          selectedButtonStyle={styles.selectedButton}
          textStyle={[styles.buttonGroupText, commonStyles.fontMontserratLight]}
          selectedTextStyle={styles.selectedButtonText}
          innerBorderStyle={{ width: -1, color: 'transparent' }}
        />
      </View>
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={{ display: 'flex', alignItems: 'center' }}
        horizontal={false}
      >
        <View style={styles.buttonGroupContent}>
          {renderScreen(selectedIndex)}
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%'
          }}
        >
          <Text
            style={[
              styles.productText,
              commonStyles.colorDarkBlue,
              commonStyles.fontMontserratRegular
            ]}
          >
            My Products
          </Text>
          <Button
            buttonStyle={styles.button}
            textStyle={{ color: '#828282', fontSize: 11 }}
            containerViewStyle={{ marginRight: 0 }}
            title={'SEE ALL'}
            iconRight={{
              name: 'arrow-right',
              type: 'simple-line-icon',
              size: 10,
              color: '#828282'
            }}
          />
        </View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={myProducts}
          renderItem={_renderItem}
          sliderWidth={500}
          itemWidth={111}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          containerCustomStyle={{ height: 160, width: '100%', paddingLeft: 75 }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '90%'
          }}
        >
          <Text
            style={[
              styles.productText,
              commonStyles.colorDarkBlue,
              commonStyles.fontMontserratRegular
            ]}
          >
            Recommendations
          </Text>
          <Button
            buttonStyle={styles.button}
            textStyle={{ color: '#828282', fontSize: 11 }}
            containerViewStyle={{ marginRight: 0 }}
            title={'SEE ALL'}
            iconRight={{
              name: 'arrow-right',
              type: 'simple-line-icon',
              size: 10,
              color: '#828282'
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%'
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: 414,
    height: 180,
    backgroundColor: '#C8EAFF'
  },
  headerButtons: {
    paddingTop: 35,
    paddingRight: 15
  },
  headerButtonContainer: {
    marginLeft: 0,
    marginRight: 0
  },
  editAvatarIconContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: 140,
    height: 55,
    marginBottom: 25
  },
  editAvatarButton: {
    borderRadius: 50,
    height: 27,
    width: 27,
    backgroundColor: '#4396DC'
  },
  image: {
    height: 140,
    width: 140,
    position: 'absolute',
    alignSelf: 'center',
    right: 132,
    top: 105
  },
  userName: {
    fontSize: 26
  },
  buttonGroupContainer: {
    height: 50,
    width: '90%',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#fff'
  },
  buttonGroupContent: {
    width: '90%',
    height: 'auto',
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    marginBottom: 20
  },
  buttonGroupButtons: {
    borderBottomWidth: 2,
    borderBottomColor: '#E0E0E0'
  },
  buttonGroupText: {
    color: '#828282',
    fontSize: 18
  },
  selectedButton: {
    borderBottomColor: '#4396DC'
  },
  selectedButtonText: {
    color: '#4396DC'
  },
  productText: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontSize: 20
  },
  button: {
    backgroundColor: '#fff',
    height: 27,
    width: 101,
    marginRight: 0
  },
  productContainer: {
    width: 50
  }
});

export default UserProfileScreen;
