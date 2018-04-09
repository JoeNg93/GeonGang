import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import {
  SearchBar,
  List,
  ListItem,
  Button,
  Avatar,
  Icon
} from 'react-native-elements';
import commonStyles from '../../utils/styles';

const FriendsComponent = ({
  numOfFriends,
  list,
  modalVisible,
  setModalVisible
}) => {
  return (
    <View style={styles.container}>
      <SearchBar
        icon={{
          type: 'simple-line-icon',
          name: 'magnifier',
          color: '#4396DC',
          style: styles.icon
        }}
        placeholder="Search for friends here"
        containerStyle={styles.searchBarContainer}
        inputStyle={styles.input}
        placeholderTextColor={'#828282'}
      />
      <Text style={[styles.numberOfFriends, commonStyles.fontMontserratLight]}>
        {numOfFriends} friends and followers
      </Text>
      <List containerStyle={styles.list}>
        {list.map((l, i) => (
          <ListItem
            avatar={<Avatar rounded medium source={{ uri: l.avatar_url }} />}
            key={i}
            title={l.name}
            containerStyle={styles.listItem}
            titleStyle={styles.listItemTitle}
            hideChevron
          />
        ))}
      </List>
      <Button
        title="View more"
        containerViewStyle={styles.buttonContainer}
        buttonStyle={styles.button}
        textStyle={styles.textStyle}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />

      <Modal animationType="fade" transparent visible={modalVisible}>
        <View style={styles.modalScreen}>
          <View style={styles.modalContainer}>
            <Icon
              name="close"
              type="material-community"
              color="#828282"
              size={25}
              iconStyle={{
                alignSelf: 'flex-end',
                marginRight: 21,
                marginTop: 17
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
            <Text
              style={[
                styles.numberOfFriendsModal,
                commonStyles.fontMontserratLight
              ]}
            >
              {numOfFriends} Friends
            </Text>
            <List containerStyle={styles.list}>
              {list.map((l, i) => (
                <ListItem
                  avatar={
                    <Avatar rounded medium source={{ uri: l.avatar_url }} />
                  }
                  key={i}
                  title={l.name}
                  containerStyle={styles.modalListItem}
                  chevronColor={'#0C3363'}
                  titleStyle={[
                    styles.listItemTitle,
                    commonStyles.fontMontserratLight,
                    commonStyles.colorDarkBlue
                  ]}
                />
              ))}
            </List>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 15
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: '100%',
    height: 65
  },
  icon: {
    width: 30,
    height: 30,
    top: 14,
    left: 20
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4396DC',
    width: '100%',
    height: 45,
    borderRadius: 100,
    margin: 0,
    paddingLeft: 50
  },
  numberOfFriends: {
    alignSelf: 'flex-start',
    color: '#828282',
    fontSize: 16
  },
  numberOfFriendsModal: {
    alignSelf: 'flex-start',
    color: '#828282',
    fontSize: 16,
    paddingLeft: 22
  },
  list: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 20,
    width: '100%'
  },
  listItem: {
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  modalListItem: {
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20
  },
  listItemTitle: {
    paddingLeft: 10
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#828282',
    height: 27,
    width: 101
  },
  textStyle: {
    color: '#828282',
    fontSize: 14
  },
  modalScreen: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6);'
  },
  modalContainer: {
    height: 'auto',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 13,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.25
  }
});

export default FriendsComponent;
