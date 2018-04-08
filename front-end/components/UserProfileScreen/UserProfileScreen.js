import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button, Icon, ButtonGroup, Divider } from 'react-native-elements';
import commonStyles from '../../utils/styles';

const UserProfileScreen = ({ buttons, selectedIndex, updateIndex }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="bell"
          type="simple-line-icon"
          color="#000"
          size={22}
          iconStyle={styles.headerButtons}
        />
        <Icon
          name="settings"
          type="simple-line-icon"
          color="#000"
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
          type="simple-line-icon"
          color="#fff"
          size={15}
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
        />
      </View>
      <View style={styles.buttonGroupContent} />
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
    height: 300
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
  }
});

export default UserProfileScreen;
