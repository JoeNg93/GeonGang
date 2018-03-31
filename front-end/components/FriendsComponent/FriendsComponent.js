import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  SearchBar,
  List,
  ListItem,
  Button,
  Avatar
} from 'react-native-elements';
import commonStyles from '../../utils/styles';

const FriendsComponent = () => {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://randomuser.me/api/portraits/women/65.jpg'
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://tinyfac.es/data/avatars/5F8C5D50-DDB6-4F06-AA15-ACB30D8D910D-200w.jpeg'
    },
    {
      name: 'Jessica Smith',
      avatar_url: 'https://randomuser.me/api/portraits/women/26.jpg'
    },
    {
      name: 'Kelly Daniels',
      avatar_url:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTg5NTgwNF5BMl5BanBnXkFtZTgwMjQ4MTE2NDE@._V1_UY256_CR43,0,172,256_AL_.jpg'
    }
  ];

  return (
    <View style={styles.container}>
      <SearchBar
        // onChangeText={someMethod}
        // onClearText={someMethod}
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
        28 friends and followers
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 100,
    paddingLeft: 40,
    paddingRight: 40
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
  }
});

export default FriendsComponent;
