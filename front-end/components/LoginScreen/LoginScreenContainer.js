import React, { Component } from 'react';
import LoginScreen from './LoginScreen';
import { connect } from 'react-redux';
import { signIn, setEmail, setPassword } from '../../actions/auth';
import { Alert } from 'react-native';

class LoginScreenContainer extends Component {
  onPressSignin = async () => {
    // const { email, password } = this.props;
    // const response = await this.props.signIn({ email, password });
    // if (response.status !== 200) {
    //   Alert.alert('Error', `Status ${response.status}: ${response.data.error}`);
    //   return;
    // }
    // Alert.alert('Success', 'Login successfully');

    this.props.navigation.navigate('scanningContainer');
  };

  render() {
    return (
      <LoginScreen
        email={this.props.email}
        password={this.props.password}
        onChangeEmail={this.props.setEmail}
        onChangePassword={this.props.setPassword}
        onPressSignin={this.onPressSignin}
      />
    );
  }
}

const mapStateToProps = state => ({
  email: state.auth.email,
  password: state.auth.password
});

export default connect(mapStateToProps, { signIn, setEmail, setPassword })(
  LoginScreenContainer
);
