import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import colorCode from '../../utils/colorCode';
import HeaderWithLogo from '../common/HeaderWithLogo';
import RecordCard from '../common/RecordCard';
import EmptyCard from '../common/EmptyCard';
import GestureRecognizer from 'react-native-swipe-gestures';

const HomepageScreen1 = ({
  gradientBackground,
  item,
  nonInteractive,
  recordSearchHandle,
  recordUserInput,
  inputSubmit,
  textValue,
  inputTagColor,
  onSwipeLeft
}) => {
  return (
    <GestureRecognizer style={{ flex: 1 }} onSwipeLeft={onSwipeLeft}>
      <View style={styles.mainContainer}>
        <View style={styles.headerSearchContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/logo_icon.png')}
          />
          <View style={styles.divider} />
          <Text
            style={[
              commonStyles.fontMontserratMedium,
              commonStyles.colorDarkBlue,
              styles.header
            ]}
          >
            {`Your\nskin\nrecords`}
          </Text>
          <Text
            style={[
              commonStyles.fontMontserratLight,
              commonStyles.colorBlue,
              { fontSize: 16, marginTop: 26, marginLeft: 12 }
            ]}
          >
            Search and filter
          </Text>
          {inputSubmit === false ? (
            <SearchBar
              round
              icon={{
                name: 'search',
                color: colorCode.blue,
                style: { fontSize: 22, left: 18, top: 12 }
              }}
              placeholder="Search here..."
              placeholderTextColor={colorCode.blue}
              inputStyle={[
                commonStyles.fontMontserratLight,
                styles.inputSearch
              ]}
              containerStyle={styles.inputContainer}
              onChangeText={recordUserInput}
              onSubmitEditing={recordSearchHandle}
              clearIcon={{ color: colorCode.blue, name: 'clear' }}
            />
          ) : (
            <Button
              buttonStyle={{
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 3,
                paddingBottom: 3,
                padding: 0
              }}
              title={textValue}
              iconRight={{ name: 'clear', style: { marginLeft: 5 } }}
              textStyle={[commonStyles.fontMontserratLight, { fontSize: 14 }]}
              backgroundColor={inputTagColor}
              borderRadius={25}
              containerViewStyle={{
                borderRadius: 25,
                marginTop: 20,
                marginBottom: 20,
                flexDirection: 'row'
              }}
              onPress={recordSearchHandle}
            />
          )}

          <Text
            style={[
              commonStyles.fontMontserratLight,
              { fontSize: 14, marginTop: 10, marginLeft: 12, color: '#BDBDBD' }
            ]}
          >
            good, moderate, star,..
          </Text>
        </View>
        <View style={[styles.recordCardContainer]}>
          <RecordCard
            gradientBackground={gradientBackground}
            nonInteractive={nonInteractive}
            item={item}
          />
          {/*<EmptyCard gradientBackground={gradientBackground} />*/}
        </View>
      </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingLeft: 40,
    backgroundColor: colorCode.white,
    flex: 1
  },
  divider: {
    marginTop: 16,
    borderBottomWidth: 2,
    width: 56,
    marginLeft: 8
  },
  header: {
    fontSize: 26,
    lineHeight: 30,
    marginTop: 16,
    marginLeft: 8
  },
  image: {
    width: 71,
    height: 84
  },
  headerSearchContainer: {
    flex: 7,
    paddingRight: 50
  },
  recordCardContainer: {
    flex: 4,
    marginTop: 54
  },
  inputContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    marginTop: 10
  },
  inputSearch: {
    backgroundColor: 'transparent',
    borderColor: colorCode.blue,
    borderWidth: 1,
    fontSize: 14,
    paddingLeft: 35,
    color: colorCode.blue
  }
});

export default HomepageScreen1;
