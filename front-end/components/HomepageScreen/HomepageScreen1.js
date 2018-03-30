import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import commonStyles from '../../utils/styles';
import colorCode from '../../utils/colorCode';
import HeaderWithLogo from '../common/HeaderWithLogo';
import RecordCard from '../common/RecordCard';

const HomepageScreen1 = ({
  gradientBackground,
  score,
  scoreTag,
  scoreTagColor,
  lightVersion,
  displayRow,
  recommendText
}) => {
  return (
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
            commonStyles.fontMontserratRegular,
            commonStyles.colorBlue,
            { fontSize: 16, marginTop: 26, marginLeft: 12 }
          ]}
        >
          Search and filter
        </Text>
        <SearchBar
          round
          icon={{
            name: 'search',
            color: colorCode.blue,
            style: { fontSize: 22, left: 18, top: 12 }
          }}
          placeholder="Type filter tag here..."
          placeholderTextColor={colorCode.blue}
          inputStyle={styles.inputSearch}
          containerStyle={styles.inputContainer}
        />
        <Text
          style={[
            commonStyles.fontMontserratlight,
            { fontSize: 14, marginTop: 10, marginLeft: 12, color: '#BDBDBD' }
          ]}
        >
          #good, #moderate, #star,..
        </Text>
      </View>
      <View style={[styles.recordCardContainer]}>
        <RecordCard
          gradientBackground={gradientBackground}
          score={score}
          scoreTag={scoreTag}
          scoreTagColor={scoreTagColor}
          lightVersion={lightVersion}
          displayRow={displayRow}
          recommendText={recommendText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingLeft: 40
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
