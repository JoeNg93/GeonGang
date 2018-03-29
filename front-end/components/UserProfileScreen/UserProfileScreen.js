import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import commonStyles from '../../utils/styles';

const UserProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="bell" type="simple-line-icon" color="#000" size={22} />
        <Icon name="settings" type="simple-line-icon" color="#000" size={22} />

        <Image
          style={styles.image}
          source={require('../../assets/images/Ellipse.png')}
        />
      </View>
      <View>
        <Icon name="pencil" type="simple-line-icon" color="#fff" size={22} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
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
  button: {
    padding: 0,
    marginTop: 35,
    marginRight: 15
  },
  headerButtonContainer: {
    marginLeft: 0,
    marginRight: 0
  },
  editAvatarButtonContainer: {
    marginLeft: 0,
    marginRight: 0,
    left: 55,
    top: 30
  },
  image: {
    height: 140,
    width: 140,
    position: 'absolute',
    alignSelf: 'center',
    right: 132,
    top: 105
  },
  editAvatarButton: {
    borderRadius: 50,
    height: 32,
    width: 32,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});

export default UserProfileScreen;
