import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import {
  List,
  ListItem,
  Avatar,
  Rating,
  Button,
  Icon
} from 'react-native-elements';
import commonStyles from '../../utils/styles';

const ReviewsComponent = ({
  numOfReviews,
  list,
  modalVisible,
  setModalVisible
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.numberOfReviews, commonStyles.fontMontserratLight]}>
        {numOfReviews} Reviews
      </Text>
      <List containerStyle={styles.list}>
        {list.slice(0, 2).map((l, i) => (
          <ListItem
            avatar={<Avatar medium source={{ uri: l.avatar_url }} />}
            key={i}
            title={l.name}
            subtitle={
              <View style={styles.subtitleView}>
                <Rating
                  imageSize={14}
                  readonly
                  startingValue={l.rating}
                  style={styles.rating}
                />
                <Text
                  numberOfLines={2}
                  style={[
                    styles.listItemSubtitle,
                    commonStyles.fontMontserratLight
                  ]}
                >
                  {l.info}
                </Text>
              </View>
            }
            containerStyle={styles.listItem}
            chevronColor={'#0C3363'}
            titleStyle={[
              styles.listItemTitle,
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
            subtitleStyle={[
              styles.listItemSubtitle,
              commonStyles.fontMontserratLight
            ]}
            subtitleNumberOfLines={2}
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
                styles.numberOfReviewsModal,
                commonStyles.fontMontserratLight
              ]}
            >
              {numOfReviews} Reviews
            </Text>
            <List containerStyle={styles.list}>
              {list.map((l, i) => (
                <ListItem
                  avatar={<Avatar medium source={{ uri: l.avatar_url }} />}
                  key={i}
                  title={l.name}
                  subtitle={
                    <View style={styles.subtitleView}>
                      <Rating
                        imageSize={14}
                        readonly
                        startingValue={l.rating}
                        style={styles.rating}
                      />
                      <Text
                        numberOfLines={2}
                        style={[
                          styles.listItemSubtitle,
                          commonStyles.fontMontserratLight
                        ]}
                      >
                        {l.info}
                      </Text>
                    </View>
                  }
                  containerStyle={styles.modalListItem}
                  chevronColor={'#0C3363'}
                  titleStyle={[
                    styles.listItemTitle,
                    commonStyles.fontMontserratLight,
                    commonStyles.colorDarkBlue
                  ]}
                  subtitleStyle={[
                    styles.listItemSubtitle,
                    commonStyles.fontMontserratLight
                  ]}
                  subtitleNumberOfLines={2}
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
  numberOfReviews: {
    alignSelf: 'flex-start',
    color: '#828282',
    fontSize: 16,
    paddingLeft: 11
  },
  numberOfReviewsModal: {
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
    borderBottomWidth: 0,
    paddingTop: 0,
    paddingBottom: 20,
    paddingRight: 0
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
    fontSize: 12,
    paddingLeft: 10,
    marginLeft: 0
  },
  listItemSubtitle: {
    paddingLeft: 10,
    fontSize: 12,
    color: '#4F4F4F'
  },
  rating: {
    marginTop: 7,
    marginBottom: 7,
    marginLeft: 10
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

export default ReviewsComponent;
