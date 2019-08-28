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

  onLoginButtonPressed = async () => {
    try {
      console.log(`logging in with ${this.state.email} and ${this.state.password}`)
      let email = this.state.email;
      let password = this.state.password;
      let loginResponse = await fetch("http://localhost:3000/login", {
        method:"POST",
        body: JSON.stringify({
          email, password
        }),
      });
      let userJson = await loginResponse.json()
      if (userJson.state == 'success') {
        const {navigate} = this.props.navigation;
        navigate('Home')
      }
    } catch (error) {
      console.log(error)
    }
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
