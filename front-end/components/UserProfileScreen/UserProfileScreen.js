import React from 'react';
import { StyleSheet, View, Image, Text, ScrollView, Modal } from 'react-native';
import { Button, Icon, ButtonGroup, Card } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import commonStyles from '../../utils/styles';
import ProfileComponentContainer from '../ProfileComponent/ProfileComponentContainer';
import ReviewsComponentContainer from '../ReviewsComponent/ReviewsComponentContainer';
import FriendsComponentContainer from '../FriendsComponent/FriendsComponentContainer';
import OtherUserProfileContainer from '../OtherUserProfile/OtherUserProfileContainer';
import colorCode from '../../utils/colorCode';

function renderScreen(selectedIndex) {
  if (selectedIndex === 0) {
    return <ProfileComponentContainer />;
  } else if (selectedIndex === 1) {
    return <FriendsComponentContainer />;
  } else {
    return <ReviewsComponentContainer />;
  }
}

const renderMyProduct = ({ item, index }) => {
  return (
    <View style={styles.productContainer}>
      <Card containerStyle={styles.productCard}>
        <Image
          resizeMode={'contain'}
          style={styles.productImage}
          source={{ uri: item.imgSrc }}
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
};

const renderRecommendationProduct = ({ item, index }) => {
  return (
    <View style={styles.productContainer}>
      <Card containerStyle={styles.productCard}>
        <Icon
          name="plus"
          type="material-community"
          color={colorCode.blue}
          size={22}
          iconStyle={styles.closeIcon}
        />
        <Image
          resizeMode={'contain'}
          style={styles.recommendationImage}
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
};

const UserProfileScreen = ({
  buttons,
  selectedIndex,
  updateIndex,
  myProducts,
  recommendations,
  userProfile,
  otherUserProfileModalVisible
}) => {
  return (
    <ScrollView
      style={{ backgroundColor: colorCode.lightBlue }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Image
          style={styles.avatarImage}
          source={{
            uri:
              'http://3.bp.blogspot.com/-HalmhpOW7cU/Vk1p5Q7_jeI/AAAAAAAAE7k/mLaDIv1oOVw/s1600/CuteAvatar1.png'
          }}
        />
      </View>
      <View style={styles.editAvatarIconContainer}>
        <Icon
          name="pencil"
          type="material-community"
          color={colorCode.white}
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
        {userProfile.name}
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
      <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
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
            textStyle={{ color: colorCode.anotherLightGray, fontSize: 11 }}
            containerViewStyle={{ marginRight: 0 }}
            title={'SEE ALL'}
            iconRight={{
              name: 'arrow-right',
              type: 'simple-line-icon',
              size: 10,
              color: colorCode.anotherLightGray
            }}
          />
        </View>
        <Carousel
          data={myProducts}
          renderItem={renderMyProduct}
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
            textStyle={{ color: colorCode.anotherLightGray, fontSize: 11 }}
            containerViewStyle={{ marginRight: 0 }}
            title={'SEE ALL'}
            iconRight={{
              name: 'arrow-right',
              type: 'simple-line-icon',
              size: 10,
              color: colorCode.anotherLightGray
            }}
          />
        </View>
        <Carousel
          data={recommendations}
          renderItem={renderRecommendationProduct}
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
      </View>
      <Modal visible={otherUserProfileModalVisible} animationType="slide">
        <OtherUserProfileContainer />
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colorCode.white
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: 414,
    height: 180,
    backgroundColor: colorCode.lightBlue
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
    backgroundColor: colorCode.blue
  },
  avatarImage: {
    height: 140,
    width: 140,
    position: 'absolute',
    alignSelf: 'center',
    right: 132,
    top: 105,
    borderRadius: 70
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
    backgroundColor: colorCode.white
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
    color: colorCode.anotherLightGray,
    fontSize: 18
  },
  selectedButton: {
    borderBottomColor: colorCode.blue
  },
  selectedButtonText: {
    color: colorCode.blue
  },
  productText: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontSize: 20
  },
  button: {
    backgroundColor: colorCode.white,
    height: 27,
    width: 101,
    marginRight: 0
  },
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
  productImage: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 5,
    height: 60,
    width: 60
  },
  recommendationImage: {
    alignSelf: 'center',
    marginBottom: 5,
    height: 60,
    width: 60
  },
  name: {
    alignSelf: 'center',
    fontSize: 10,
    textAlign: 'center'
  },
  closeIcon: {
    alignSelf: 'flex-end'
  }
});

UserProfileScreen.propTypes = {
  buttons: PropTypes.array,
  selectedIndex: PropTypes.number,
  updateIndex: PropTypes.func,
  myProducts: PropTypes.array,
  recommendations: PropTypes.array,
  userProfile: PropTypes.object,
  otherUserProfileModalVisible: PropTypes.bool
};

export default UserProfileScreen;
