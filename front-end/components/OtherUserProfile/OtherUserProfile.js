import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Button, Icon, ButtonGroup, Card } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import PropTypes from 'prop-types';
import commonStyles from '../../utils/styles';
import ProfileComponentContainer from '../ProfileComponent/ProfileComponentContainer';
import ReviewsComponentContainer from '../ReviewsComponent/ReviewsComponentContainer';
import FriendsComponentContainer from '../FriendsComponent/FriendsComponentContainer';
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

const headerHeight = 100;
const avatarSize = 140;

const OtherUserProfile = ({
  buttons,
  selectedIndex,
  updateIndex,
  myProducts,
  recommendations,
  userProfile,
  onPressCloseModal
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.closeModalContainer}>
        <TouchableOpacity onPress={onPressCloseModal}>
          <Icon name="clear" color={colorCode.white} size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Image
          style={styles.avatarImage}
          source={{
            uri:
              'https://s-media-cache-ak0.pinimg.com/736x/0e/29/d0/0e29d056cd2d93964dfe00741d4d8df4.jpg'
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
          containerCustomStyle={styles.productCarousel}
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
          containerCustomStyle={styles.productCarousel}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: colorCode.white,
    paddingBottom: 20
  },
  header: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: headerHeight,
    backgroundColor: colorCode.lightBlue
  },
  headerButtonContainer: {
    marginLeft: 0,
    marginRight: 0
  },
  avatarImage: {
    height: avatarSize,
    width: avatarSize,
    position: 'absolute',
    alignSelf: 'center',
    top: headerHeight - avatarSize / 2,
    borderRadius: 70
  },
  editAvatarIconContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: avatarSize,
    height: 55,
    marginBottom: 25,
    opacity: 0
  },
  editAvatarButton: {
    borderRadius: 50,
    height: 27,
    width: 27,
    backgroundColor: colorCode.blue
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
    borderBottomColor: '#E0E0E0',
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
    paddingLeft: 20,
    fontSize: 20
  },
  button: {
    backgroundColor: colorCode.white,
    marginRight: 0
  },
  productCarousel: {
    width: '100%',
    paddingLeft: 85,
    marginBottom: 32
  },
  productContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 10
  },
  productCard: {
    display: 'flex',
    width: 111,
    height: 138,
    borderRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'rgb(130, 130, 130)',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
    paddingLeft: 5
  },
  productImage: {
    alignSelf: 'center',
    marginTop: 10,
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
  },
  closeModalContainer: {
    alignItems: 'flex-end',
    paddingRight: 20,
    backgroundColor: colorCode.lightBlue,
    width: '100%',
    paddingTop: 43
  }
});

OtherUserProfile.propTypes = {
  buttons: PropTypes.array,
  selectedIndex: PropTypes.number,
  updateIndex: PropTypes.func,
  myProducts: PropTypes.array,
  recommendations: PropTypes.array,
  userProfile: PropTypes.object,
  onPressCloseModal: PropTypes.func
};

export default OtherUserProfile;
