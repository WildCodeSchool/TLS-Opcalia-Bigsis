import React, { Component } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

class SignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nickname: "",
      password: "",
      confirmPass: "",
      equalPassword: "",
      errorMessage: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    const {user} = this.props;
    if (user) {
    } else {
    }
  };
  render() {
    return (
      <View>
        <TextInput
          required
          type="email"
          name="email"
          onChange={this.handleChange}
          placeholder={"yourmail@mail.com"}
        />

        <TextInput
          required
          type="pseudo"
          name="nickname"
          onChange={this.handleChange}
          placeholder={"your pseudo"}
        />

        <TextInput
          required
          type="password"
          name="password"
          onChange={this.handleChange}
          placeholder={"your password"}
        />

        <TextInput
          required
          type="password"
          name="confirmPass"
          onChange={this.handleChange}
          placeholder={"Confirm your password"}
        />
        <Button title={"confirm"} onPress={this.handleSubmit} />
      </View>
    );
  }
}
export default SignUP;
