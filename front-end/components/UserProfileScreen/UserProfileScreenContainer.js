import React, { Component } from 'react';
import UserProfileScreen from './UserProfileScreen';
import colorCode from '../../utils/colorCode';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { getMyProfile } from '../../actions/user_info';
import { connect } from 'react-redux';
import _ from 'lodash';
import LoaderContainer from '../common/LoaderContainer';

class UserProfileScreenContainer extends Component {
  // Header styling
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colorCode.lightBlue,
      // Remove the border bottom line of header
      borderBottomWidth: 0
    },
    tabBarLabel: 'Profile',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user" type="simple-line-icon" color={tintColor} />
    ),
    // Set "+" icon on the right
    headerRight: (
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Icon
            name="bell"
            type="material-community"
            color={colorCode.white}
            size={22}
            iconStyle={styles.bellButton}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="settings"
            type="material-community"
            color={colorCode.white}
            size={22}
          />
        </TouchableOpacity>
      </View>
    )
  });

  state = {
    selectedIndex: 0
  };

  componentWillMount = () => {
    if (_.isEmpty(this.props.myProfile)) {
      this.props.getMyProfile();
    }
  };

  updateIndex = selectedIndex => {
    this.setState({ selectedIndex });
  };

  recommendations = [
    {
      name: 'Neutrogena Hydro Boost Water Gel',
      avatar_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56yHB2BJVmYv7VUsodB7C5Dv2t31hC9uWvHPhIZWoO5sW-phYsg'
    },
    {
      name: 'Vichy Mineral 89',
      avatar_url:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEQEhUREg8QEBAWFRASExAWEhAQERUXFxUXFhYRFxcbHSggGBoxGxUVIjUhJykrLzAuFyAzOD8sNzQvLisBCgoKDg0OGxAQGismHSUrLS0tNzcwLS4vLS0uLS0rLS0tLjAuMi43NSsuKy0tLTcrKy0tKzctLS0yLS8tLS0rL//AABEIAOwA1gMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABKEAACAQIEBAMEBAcOBQUAAAABAgADEQQSITEFE0FRBiJhMnGBkRQjUqEHFUJicrHCFjODkpOisrPB0dLh8PEkRFRjoyVDc3SC/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECBAMFBv/EACkRAQABAwIDBwUAAAAAAAAAAAABAgMREiEEMUETIiNRcYGRBVLB0eH/2gAMAwEAAhEDEQA/AO4xEQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEGJHceYijva70h8M63EDdFdTsb+6ObNXDbTM1K/W3wgZOcNtv1TJI18O4/KBHbUTfo+yPcP1QPcREBERAREQEREBERAREQEREBERAREQEREBERASN8QfvQ/wDko/0xJKU/xr4iWi6YZVvUvSrMxvlVSzAW+0fI3XTSBY8ONJsiQ71cOgvVxpBIBytXSj/NTLKf4bxGPqcQxFq1Z+HhPIS6umfOPZYnN7N4HR32nql7I9wkRWqoqO9PFEsiMxTmJWHlF9Qbnp3Ex+DeP/TqGc0+W6EI4Fyl8ivdSdbWYb/5wJ6IiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJyfF4/wCn8SAq005aVauHCEZsy06jDzfauwJttr8+sTj/AAZf/UD/APaxf9dUgdUoYGlSW1OlTpgDQIipb5Ccf8Ki3G62lr0Kt/X61Z2hvZ+E414c047VH/Yrf1qwOtnA0qq/WUadT9JFb9YlJ8G49qHEK+CVEGHepiXAAAKMmQC3cZdLfmiX7D7Cc74ItuMt+njP6KGB0qIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiJ5qOFBY6AAkn0Gpgepx/A1hTxruVdgmJxZbKua31rkAk2VT7yJp4jx3xHiTk0qlPhfDc4AxBH17pmsCCx3P5o0uLnrPOFwuDquzDF4mo61MocsAXDburhWJ7X0v2HW4TLof7r+YG5NDmEHLY1db9QeWrgH0vKp4a4FXOOqY/6kXpunILYhT5mBDZzRGnl+z1mzgsLhKbLSQpe4Q0jVdanusVUEyRPBqG5pHS9xnII73+UuEylv3U06LCnXNFKn2FxCFv/IE9JXeBebi2fKwDNiXF1I0amvXbcEaHpI+jwTCVHAQFalwQiV6yMCTcE51t63B7b3EYzw6rO+WvicPiFVW55bl1L7A6KCwFrnQ6SYMusROReFfHXEKWKo4bEvQx2DqsKS42mMtRXYApzLGw3AIKg6+lp12RoiIgIiICIiAiIgIiICIiAiIgIiICIiAmrxUfU1dQPq6mpBI9k7jqJtTS40RyKt9sjX+UDn/AvAuEZaVesz4lhTp3Z7UR7KgfVU9LEAXzE3sL3AFpyrwjCYfl0Qi0mqCty6hLGmGQcxkF28pKh22t5GPTWU4LTC0ksuXyrpe52AAvudNL+nSZeM8LpYqlyqqsUz0n0Nj5WBIv2IzKw6qzDrKitLxPDU1WqcK4ZqPPQ2Xm1M1ZaNJQpPlZyynUi2bXrbbxvFXw1IVMXh6NAGtQo5lxHNULVbLnY5FII7WIPeSeP4OldmapQJD0loMhcABM5qErl1DBgpBB7WtaYcPwIKvmNeq4ejXBq4urWbPTF0UE7KGJ6a3uYERT41hqlSq1GhTr0qIwz1q9M6qKpq53C2uxXlqSL6qxI1FjNYFqeKpmoEIpljy3uRzFAAFUAHRTrYHca9Znbh4NV6uUZqtOnRqnmE3RM+UAW0I5tQ36zNhqQp0lpqLcumiBS17ZUAALddLa+kCkY3hFGjXp1UyD66mSrVKyIW5vm8ubLnJcnYXIub9emSh+MkuitlUlKlB9dvK6ksTpqN+5+43yJIIiJFIiICIiAiIgIiICIiAiIgIiICIiAkd4ha2Hqe4D5kSRkR4oa1A+rINwOsQkvuG8qA62Avpe+gv03m0CAL62sT1PrMFAaD4TYDfK2/8AYPWUcY4pjKvA+MrWerWfAYjM1mepUUUnYZ1AJ0KPlP6Nh1nWuOcYpYTD1MVUYcqmmbTXNf2VXuSSoHvkH+Enwx+MsEUQXxFI82gepYCxpH0Zbj32PScaTjeM4pQwXCFvdahUubkso/ey47U0zkg75R1kVcvwS8Mq43FVuL4m5JeotIXOU1G9tl/NVbIPee063U10+6afBuGU8Jh6eGoi1OmgVdBc29pj3Ykkn1Jm4+3+15UVLxtTP0WroCVRm2H5Oo/UJdqDXVT3AP3SreJ1vQqgfYcfzTpJ/grlsPRJ3NKnf35ReJI5t2IiRSIiAiIgIiICIiAiIgIiICIiAiIgJDeKD9Wg71aZOuUWG+v+t5MyveLSCcOveqD8hLCS3sNsNr9bCw19JsoN9Leumu2v+u01UUm24HXUa9htqPlsJB0eIY56iKaOWkMRUzVcps9G9VUp2vdWBQEtsQUt7RsFjq5rixAXXNcXJ7WN9Pvlf4P4Qw+GxuIxyD6yvYBbDLSJ1q5f0mAJ9xkfVx3FTRZxTZnOEw3k5SK64ioKmeqoO+VhTzJ2a41Fmz1Gxn0jGELWuErrhG1NOwooUAHKyn63Pu5JPS1rFWhSR6AX02676z0w+PUSpvU4ktJ0RK+dnpLTdjh3emvLz1KufyowLAIFOoJPS1pbh2OqvUYVaNanmSg6IaZyI2RubTNQDKDmHU9rbwjFxen5HGhzX1soO1um+3XsJt+B6mbAYU/9mmLbbC1vumLiguCAdbA7X0vb4e/pvPngFwcFTAAUK1VAoJYDLUYWuY6J1WKIiRoiIgIiICIiAiIgIiICIiAiIgIiICVnxSw5+FFwPNUY3IGmU667DTeWaVPxGb47DjUkU6rW+7TXfaap5s1TsmKd7DUA3W/lJB7gC+nv6TxxfFtRoVaqLmZKbsFIYgkKSNtxte3S8JUOZQEbKQxL6EAi1gdbjr+qYuK4moiKtOytUqJQVzY5S7a1LbGyhyAdyALWMkkSjuL4U0MK+ITFVjWSmai1jUepTqsBdKfJHkZWNlyqAfMMutjNviNWpUqUcOrmhnSpWrMtjUCJkXlo2ysWqKC1jZQ1rEgjXXwtQUAIalOoDmpVhUdyjm93CsTTvr7OQL0Hp9w4fFUcPilZaWJVW1sWouGstSmRe5pkoGBBuLKddQS5ZqvCLKWoValGuP3tmrVqtNjuFqo7EMpOh/KtqCDN3h+L59KnWUWWqlOqAb3AdQwB7nWQmMxOMquuFC4eizjNUq06tWq9KjbKzjNTUBySVW/qbHKZYqdNUUIoCqoCqo2AAsAPgIEdxNQwII0B630I1BFpi8B1CaNVSzMy4iuCTe4u2bKSd7AjXaZeIILdtCOw+XwEj/wd+X6WmZSBiMwC/k5qaeU6DXS/XQj3DUxszE7rhERMNkREBERAREQEREBERAREQEREBERASmcZBbiIF7KMPY2OUm7jy3vcjbQd9dJc5z3FVAeL19LstKitzdrXF7Lr5Ol7DWeluMy8rs4j3Wqk9wLgi9jY6EHtp6zziUpVw9FiVayMbEq6ZXzU6qki18y3B7jrYzXxdSpym5OU1svkDZbE6b302vI/FNj1Uu1ejRVQzM1kZVAGptkJK2vbXMG1OZfLJK0ykK2AxDqUqYy9O1jy6Io12HUGpnIF+pVVPbLN2gqoAiqFVFVQoGVQoFlUaWtYbCVP8ZYhsoONVGbMrJkZiG8igplpguuZao3BBYA2bQfE4rXaooTGU2U01LZlqUyCUVQSvJ082Z79bgWAEirPgMMKZfVmaoS71SBck3CqLCwVVAUDsB1JJ3CbdZT0x9ZgAnEULnKFARnvzOUabsvKugKvtsC1rnW22x4hmIWvQJsQqtlbzAEkMRTFza2oA726Sok8ex1uNOhve/fS2n3yH8A1B9LxybG+Gcjrcqy39PZ2N9pLcQbSVvwG2XimLXQBsPhiBYL7FSoNh+kJvHdl5xV34dHiIni6CIiAiIgIiICIiAiIgIiICIiAiIgJy2nUDcVxpvm1pIw9kCy2IvrmFgvb2j216lOOcMxSnHY1wx1xFTMx8oBU5bA72sBr3v0nRw8ZmfRycXVimPVdcXxhMPkDhrPezC1tCosfW7D4BibAGav7oUrqV+jvWV2RVp8sk2tUYuxUsGX6k227GZqRBIbQMAwV7Zit7XsDp+SPkJt4Su+bzNcWYkqF5d7iwzWuxt126dNVVDNF2MISjjSST+LqbVPLUNfK9Onq9hkJRrML3NuobTqfTYpUpljw0LTuVsba5ELKWBTRfLlUdyo2NxlxfC6hzscZVAZ6jqBmBQM1wEu1gQPLqCLbAbzXHDdda7mwQ5QtVVFnLjIS58tiVyg7HW+kzFMt1XKYnmzcOxlNCB+LnpEBqmYqSS2XnkIcuozKvUAHIAL6DYTxNTJUPSqIb015hFqIZiVJWo1gyAZWzdqg9Zh4LhDQylsS75qa0wrXVbgL5wLm7GxJ/S03N5BuIjc5st2UkENZgbZCo8xYk7AHbpLolO1pauI4ktQaCohGbRkZNVcobN7J8ykWvrvtvAeEK2XjAXYNhay210yujWt03MmeNVBlINiDpbQiVDw5XZeNYYnQMlVddCQyEjKeuw+XpPbR4cuam740Q7VEROJ9QiIgIiICIiAiIgIiICIiAiIgIiIAzgfA8YOdWZSXZ61VhZXIuzkkLqCd+1r30Itfu+KfKjN2Vj8heflTgnFeWv12emjFstX2kILaq1tQ2v8AfadfCTGqcvn/AFGKpojTzy7JguIj7XYAANf11/2+MmMPi1AVQUAtZVuq6AbKvaw6dpzzhuKLqHp16FQ20Q1BcC1gQLgH3Kb6SSo8YYbgk/CdlVjPJ8ejjNG1a4YjEg+UkXtpuTqe+3w3mJ6l++nwH69ZUqnGdb5Bm2DZfMR9knU20HYaTEvHjfQ5hv7Wa2vTsN5mLFTVXG0TuuVKuQLMRbQAXHT4b6es9/Sx376HQm28qX47Y28ttgbnp1NxM1Lid92Rb92IPy/zibEkcZTO0S3uOYmw307W37aymcLxOXieCbb/AIhL2A/Kupv/ABpu8c4nQpglsRRsTmIBBa/zNydNh3lPXizPjMIadNlo/ScM3MtYvaop07AA/wC0temm3MdW+H13L8VdIfqaIifJfoyIiAiIgIiICIiAiIgIiICIiAiIgR3iPEcvC4h/s0azfJDPyHhsUQbZrKws66ZW94Oh98/XPiTAjEYerQZmValN6ZZbZgGFiRfrPzz4n/B5jMDeph74nD96a/XIPzl9oj1E9rVUQ8btOroqjcIpsL066pfXK1yPmLn7pgXC4kGyh2/OBYA+oOmk2RhMav8A7GK95o1v7VmQUMUd6GJP8FWt+qe2bc8tnPpvRz39Wt9Exf5499a37U+VMLi92Ztepr3/AGpuihif+mxH8jVP7MGjif8Ap8Qf4Gqf2ZrFvzlnxftj4n9tH6LiSPav/DL/AGtPlPhtdyA2VR9pjnUfxcx+6bjYXEH/AJav/IVf8Mw1OG4k/wDK4n+Qrf4Ziez85+W4i75RHt/W4vCqNNbtU5zDZcpRB/8AndvjNKhxBjiFdnL5XpEXOgCsDYAaAeginw3FjbD4oD0o1v7pa+Afg6x2OZXr/wDB0dLFlBrMPRNx72t8Za7lONtkt2a9XenP4fpeg91U9wD8xMk1OGU8lJEuWyqq5ja5ygC5t10m3ON3EREBERAREQEREBERAREQEREBERAw4pbiQb0dZYHGk0Xo6wIzlH1jlH1klyY5MCN5R9Y5R9ZJcmfOTAjuUfWOUe5klyY5MCN5R9Z6o0NZIcmeqdHWBt0BYTJPiifYCIiAiIgIiICIiAiIgIiICIiAiIgDPBSe4geMkZJ7iB4yRknuIHjJGSe4geMkBJ7iAiIgIiICIiAiIgIiIH//2Q=='
    },
    {
      name: "L'Oreal Hydrafresh Toner",
      avatar_url:
        'data:image/jpeg;base64,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'
    },
    {
      name: 'Neutrogena Hydro Boost Water Gel',
      avatar_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56yHB2BJVmYv7VUsodB7C5Dv2t31hC9uWvHPhIZWoO5sW-phYsg'
    },
    {
      name: 'Neutrogena Hydro Boost Water Gel',
      avatar_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56yHB2BJVmYv7VUsodB7C5Dv2t31hC9uWvHPhIZWoO5sW-phYsg'
    }
  ];

  render() {
    const buttons = ['Profile', 'Friends', 'Reviews'];
    const { myProfile } = this.props;

    if (_.isEmpty(myProfile)) {
      return <LoaderContainer />;
    }

    return (
      <UserProfileScreen
        buttons={buttons}
        selectedIndex={this.state.selectedIndex}
        updateIndex={this.updateIndex}
        myProducts={myProfile.favoriteProducts}
        recommendations={this.recommendations}
        userProfile={myProfile}
        otherUserProfileModalVisible={this.props.otherUserProfileModalVisible}
      />
    );
  }
}

const mapStateToProps = state => ({
  myProfile: state.userInfo.myProfile,
  otherUserProfileModalVisible: state.modal.otherUserProfileModalVisible
});

const styles = StyleSheet.create({
  bellButton: {
    marginRight: 35
  },
  headerContainer: {
    flexDirection: 'row',
    paddingRight: 20.5,
    paddingTop: 15
  }
});

export default connect(mapStateToProps, { getMyProfile })(
  UserProfileScreenContainer
);
