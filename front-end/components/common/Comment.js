import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Icon, Button, Rating, Divider } from 'react-native-elements';
import colorCode from '../../utils/colorCode';
import commonStyles from '../../utils/styles';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DATETIME_FORMAT_FROM_BACKEND } from '../../utils/index';

const Comment = ({
  profileName,
  profileImgPath,
  rating,
  postDate,
  text,
  helpfulCount,
  liked,
  onPressHelpful,
  onPressReport
}) => {
  return (
    <View>
      <Divider
        style={{
          backgroundColor: '#DFDFDF',
          height: 1,
          marginHorizontal: 36
        }}
      />
      <View style={[styles.communityReview, styles.placeholder]}>
        <Image source={profileImgPath} style={styles.communityReviewImage} />
        <View style={styles.communityReviewContents}>
          <View style={styles.communityReviewTitle}>
            <Text
              style={[
                styles.communityReviewTitleName,
                commonStyles.fontMontserratMedium,
                commonStyles.colorDarkBlue
              ]}
            >
              {profileName}
            </Text>
            <Text
              style={[
                styles.communityReviewTitleDate,
                commonStyles.fontMontserratLight,
                commonStyles.colorGray
              ]}
            >
              {moment(postDate, DATETIME_FORMAT_FROM_BACKEND).fromNow()}
            </Text>
          </View>
          <Rating
            type="star"
            readonly
            ratingCount={5}
            fractions={1}
            startingValue={rating}
            imageSize={16}
            style={{ paddingTop: 6, paddingBottom: 16 }}
          />
          <Text
            style={[
              styles.communityReviewComment,
              commonStyles.fontMontserratLight,
              commonStyles.colorDarkBlue
            ]}
          >
            {text}
          </Text>
          <View style={styles.communityReviewBottom}>
            {liked === false ? (
              <Button
                containerViewStyle={styles.communityReviewBottomBtnCont}
                buttonStyle={styles.communityReviewBottomBtn}
                color={colorCode.veryLightGray}
                icon={{
                  name: 'favorite-border',
                  color: colorCode.veryLightGray
                }}
                title={'Helpful (' + helpfulCount + ')'}
                textStyle={styles.communityReviewBottomBtnTxt}
                onPress={onPressHelpful}
              />
            ) : (
              <Button
                containerViewStyle={styles.communityReviewBottomBtnCont}
                buttonStyle={styles.communityReviewBottomBtn}
                color={colorCode.red}
                icon={{ name: 'favorite', color: colorCode.red }}
                title={'Helpful (' + helpfulCount + ')'}
                textStyle={styles.communityReviewBottomBtnTxt}
                onPress={onPressHelpful}
              />
            )}
            <Button
              containerViewStyle={styles.communityReviewBottomBtnCont}
              buttonStyle={styles.communityReviewBottomBtn}
              color={colorCode.veryLightGray}
              icon={{ name: 'warning', color: colorCode.veryLightGray }}
              title="Report"
              textStyle={styles.communityReviewBottomBtnTxt}
              onPress={onPressReport}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholder: {
    paddingHorizontal: 36
  },

  communityReview: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 5
  },

  communityReviewImage: {
    resizeMode: 'contain',
    borderRadius: 28,
    height: 56,
    width: 56
  },

  communityReviewContents: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12
  },

  communityReviewTitle: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },

  communityReviewTitleName: {
    flexGrow: 1,
    textAlign: 'left',
    fontSize: 14
  },

  communityReviewTitleDate: {
    flexGrow: 1,
    textAlign: 'right',
    fontSize: 12
  },

  communityReviewComment: {
    fontSize: 12
  },

  communityReviewBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline'
  },

  communityReviewBottomBtnCont: {
    marginTop: 8,
    marginRight: 0,
    marginBottom: 8,
    marginLeft: 8
  },

  communityReviewBottomBtn: {
    backgroundColor: 'transparent',
    paddingVertical: 8,
    paddingHorizontal: 10
  },

  communityReviewBottomBtnTxt: {
    fontSize: 12
  }
});

Comment.propTypes = {
  profileName: PropTypes.string.isRequired,
  profileImgPath: PropTypes.number,
  rating: PropTypes.number.isRequired,
  postDate: PropTypes.string.isRequired,
  text: PropTypes.string,
  helpfulCount: PropTypes.number,
  liked: PropTypes.bool
};

Comment.defaultProps = {
  profileImgPath: require('../../assets/images/unknown-gender.png'),
  helpfulCount: 0,
  text: '',
  liked: false
};

export default Comment;
