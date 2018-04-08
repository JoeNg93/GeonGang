import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Button, Icon, ButtonGroup, Divider } from 'react-native-elements';
import commonStyles from '../../utils/styles';

const OtherUserProfile = ({ buttons, selectedIndex, updateIndex }) => {
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

        <Image style={styles.image} />
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
  },
  addFriendButton: {
    backgroundColor: '#fff',
    borderColor: '#4396DC',
    borderWidth: 1,
    borderRadius: 25,
    height: 40,
    width: 170,
    marginTop: 10,
    marginBottom: 10
  },
  addFriendText: {
    color: '#4396DC',
    fontSize: 18
  }
});

export default OtherUserProfile;
