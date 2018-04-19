import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Modal, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';

const OperationModal = ({ visible, onPressCloseModal, content }) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.popupBackground}>
        <View style={styles.popupContainer}>
          <Image
            source={require('../../assets/images/circle-check.png')}
            style={styles.popupImage}
          />
          <Text
            style={[
              styles.popupText,
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
          >
            {content}
          </Text>
          <Button
            textStyle={[
              commonStyles.fontMontserratSemiBold,
              { fontSize: 14, color: '#ffffff' }
            ]}
            title="Great !"
            buttonStyle={styles.popupBtnGreat}
            onPress={onPressCloseModal}
          />
        </View>
      </View>
    </Modal>
  );
};

OperationModal.propTypes = {
  visible: PropTypes.bool,
  content: PropTypes.string,
  onPressCloseModal: PropTypes.func
};

OperationModal.defaultProps = {
  visible: true,
  content: 'Lorem ipsum',
  onPressCloseModal: () => {}
};

const styles = StyleSheet.create({
  popupBackground: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6);'
  },

  popupContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: '80%',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 13,
    shadowOffset: { width: 2, height: 4 },
    shadowColor: 'black',
    shadowOpacity: 0.25
  },

  popupImage: {
    resizeMode: 'contain',
    height: 53
  },

  popupText: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 60,
    marginVertical: 24
  },

  popupBtnGreat: {
    backgroundColor: '#4396DC',
    borderRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 6
  }
});

export default OperationModal;
