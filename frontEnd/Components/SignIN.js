import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  View,
  Button,
  Icon,
  Body,
  CheckBox,
  ListItem
} from 'native-base';
import {
  Image, StyleSheet, Text, PermissionsAndroid
} from 'react-native';
import { connect } from 'react-redux';
import url from './backendUrl'

class SignIN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
      password: ''
    };
  }

  componentWillMount() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.'
    });
  }

  fetchLoginToken = () => {
    console.log('fetchToken');
    const { nickname, password } = this.state;

    fetch(`${url}:5000/auth/verif`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nickname, password })
    })
      .then(res => res.json())
      .then((res, err) => {
        if (res) {
          console.log(res);
          this.props.dispatch({
            type: 'CREATE_TOKEN',
            token: res.token
          });
          return this.props.navigation.navigate('Selection');
        }
      });
  };

  render() {
    return (
      <Container>
        <Content>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{ width: 200, height: 200 }}
              source={{
                uri:
                  'https://image.noelshack.com/fichiers/2019/13/4/1553784675-project.png'
              }}
            />
            <Text style={{ fontSize: 60, fontStyle: 'italic' }}>BIGSIS</Text>
          </View>

          <Form>
            <Item style={[styles.style, { marginTop: 20 }]}>
              <Input
                onChangeText={text => this.setState({ nickname: text })}
                style={styles.texte}
                placeholder="Nom de compte"
              />
            </Item>
            <Item style={[styles.style, { marginTop: 20 }]}>
              <Input
                secureTextEntry
                onChangeText={text => this.setState({ password: text })}
                style={styles.texte}
                placeholder="Mot de passe"
              />
            </Item>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Button onPress={() => this.fetchLoginToken()} rounded style={{}}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    marginLeft: 10,
                    marginRight: 10
                  }}
                >
                  Connection
                </Text>
              </Button>
            </View>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Button
                rounded
                block
                danger
                onPress={() => this.props.navigation.navigate('Register')}
                style={{ marginTop: 15 }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: 'white',
                    marginLeft: 10,
                    marginRight: 10
                  }}
                >
                  -- Inscription --
                </Text>
              </Button>
            </View>
          </Form>
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
    borderRadius: 10
  },
  texte: {
    color: 'white',
    marginLeft: 20
  },
  h1: {}
});

const mapStateToProps = ReduxState => ({
  token: ReduxState
});

export default connect(mapStateToProps)(SignIN);
