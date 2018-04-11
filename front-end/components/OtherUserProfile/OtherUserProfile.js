import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { Button, Icon, ButtonGroup } from 'react-native-elements';
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

const OtherUserProfile = ({
  buttons,
  selectedIndex,
  updateIndex,
  _renderItem,
  myProducts,
  recommendations,
  _renderItem2
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="close"
          type="material-community"
          color="#fff"
          size={30}
          iconStyle={styles.headerButton}
        />

        <Image
          style={styles.image}
          source={require('../../assets/images/otherUser.png')}
        />
      </View>
      <Text
        style={[
          styles.userName,
          commonStyles.colorDarkBlue,
          commonStyles.fontMontserratRegular
        ]}
      >
        Michelle Vermint
      </Text>
      <Button
        small
        iconRight={{
          name: 'account-plus',
          type: 'material-community',
          color: '#4396DC',
          size: 22
        }}
        title="Add friend"
        buttonStyle={styles.addFriendButton}
        textStyle={[styles.addFriendText, commonStyles.fontMontserratRegular]}
      />
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
        <Carousel
          ref={c => {
            this._carousel2 = c;
          }}
          data={recommendations}
          renderItem={_renderItem2}
          sliderWidth={500}
          itemWidth={111}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          containerCustomStyle={{
            height: 160,
            width: '100%',
            paddingLeft: 75
          }}
        />
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
    backgroundColor: '#C8EAFF',
    marginBottom: 85
  },
  headerButton: {
    paddingTop: 35,
    paddingRight: 15
  },
  headerButtonContainer: {
    marginLeft: 0,
    marginRight: 0
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
    fontSize: 26,
    marginBottom: 10
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
  addFriendButton: {
    backgroundColor: '#fff',
    borderColor: '#4396DC',
    borderWidth: 1,
    borderRadius: 25,
    height: 35,
    width: 180,
    marginTop: 10,
    marginBottom: 10
  },
  addFriendText: {
    color: '#4396DC',
    fontSize: 18
  }
});

export default OtherUserProfile;
