import React, { Component } from "react";
import { StyleSheet, Text, TextInput, Image, } from "react-native";
import { Container, Content, Form, Item, Input, Label, View, Button, Icon, Body, CheckBox, ListItem } from 'native-base';
import { connect } from 'react-redux'


class SignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {

      nickname: "",
      email: "",
      password: "",
      confirmPass: "",
      equalPassword: "",
      errorMessage: "",

    };
  }
  image = () => {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", }}>
        <Image
          style={{ width: 175, height: 175 }}
          source={{ uri: "https://image.noelshack.com/fichiers/2019/13/4/1553784675-project.png" }}
        />
      </View>)
  }

  formulaire = () => {
    return (
      <Form>
        <Item floatingLabel style={styles.style}>
          <Label style={{ textAlign: 'center', color: 'white', }}>Nom d'utilisateur</Label>
          <Input onChangeText={(text) => this.setState({ nickname: text })} style={styles.texte} />
        </Item>
        <Item floatingLabel style={styles.style}>
          <Label style={{ textAlign: 'center', color: 'white' }}>Adresse Mail</Label>
          <Input onChangeText={(text) => this.setState({ email: text })} style={styles.texte} />
        </Item>
        <Item floatingLabel style={styles.style}>
          <Label style={{ textAlign: 'center', color: 'white', }}>Mot de passe</Label>
          <Input secureTextEntry={true} onChangeText={(text) => this.setState({ password: text })} style={styles.texte} />
        </Item>
        <Item floatingLabel style={styles.style}>
          <Label style={{ textAlign: 'center', color: 'white', }}>Mot de passe confirmation</Label>

          <Input secureTextEntry={true} onChangeText={(text) => this.setState({ confirmPass: text })} style={styles.texte} />
        </Item>

        <View style={{ marginTop: 20, flexDirection: "row", justifyContent: "center" }}>
          <Button onPress={this._inscription} rounded style={{}} >
            <Text style={{ fontSize: 15, color: 'white', marginLeft: 10, marginRight: 10 }}>-- Inscription --</Text>
          </Button>

        </View>

      </Form>)
  }

  _inscription = () => {
    const { nickname, email, password, confirmPass } = this.state

    const subscribe = { nickname, email, password }
    console.log('fc', this.state)
    if (confirmPass === password) {
      return fetch('http:/172.20.10.5:5000/auth/signup', {
        method: 'POST',
        headers: {
          accept: 'application/json ',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(subscribe),
      })
        .then(res => res.json())
        .then((res, err) => {
          if (res) {
            return this.props.navigation.navigate("Accueil")
          }
          console.log(err)
        })
    }
  }

  render() {
    console.log("ici")
    return (
      <Container>
        <Content>
          {this.image()}
          {this.formulaire()}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  style: {
    backgroundColor: 'black',
    width: 300,
    marginLeft: 35,
    borderRadius: 10,
    marginTop: 20
  },
  texte: {
    color: 'white',
    textAlign: 'center'
  },
  h1: {

  }
})

const mapStateToProps = (ReduxState) => {
  return {
    token: ReduxState.token
  }
}

export default connect(mapStateToProps)(SignUP)
