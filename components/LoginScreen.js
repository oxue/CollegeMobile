import React from 'react';

import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

class LoginScreen extends React.Component{
  state = {
    email: "",
    password: ""
  }

  onLoginButtonPressed = () => {
    console.log(`logging in with ${this.state.email} and ${this.state.password}`)
    
  }

  render() {
    return (
      <View>
        <Text>email</Text>
        <TextInput placeholder='Enter your email'
          onChangeText={(email) => this.setState({email})}
        />

        <Text>password</Text>
        <TextInput placeholder='Enter your password'
          onChangeText={(password) => this.setState({password})}
        />

        <Button
          onPress={this.onLoginButtonPressed}
          title="Login"
          color="#1aad5b"
        />
      </View>
    );
  }
}

export default LoginScreen;
