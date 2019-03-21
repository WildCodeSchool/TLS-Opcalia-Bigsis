import React, { Component } from "react";
import { Button, TextInput, View } from "react-native";

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
      password: ""
    };
  }
  handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { user } = this.props;
    if (user) {
    } else {
    }
  };
  render() {
    return (
      <View>
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
        <Button title={"confirm"} onPress={this.handleSubmit} />
      </View>
    );
  }
}
export default SignIN;