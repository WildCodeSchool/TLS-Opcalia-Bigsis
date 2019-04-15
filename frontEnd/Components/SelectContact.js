import React, { Component } from 'react';
import {
  
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
  TouchableWithoutFeedback,
  FlatList,
  TextInput,
  Alert,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Contacts from 'react-native-contacts';
import { List, ListItem } from 'react-native-elements';

export default class ContactList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Contact: [],
      SelectedContactList: []
    }
  }

  press = (hey) => {
    this.state.Contact.map((item) => {
      if (item.recordID === hey.recordID) {
        item.check = !item.check
        if (item.check === true) {
          this.state.SelectedContactList.push(item);
          console.log('selected:' + item.givenName);
        } else if (item.check === false) {
          const i = this.state.SelectedContactList.indexOf(item)
          if (1 != -1) {
            this.state.SelectedContactList.splice(i, 1)
            console.log('unselect:' + item.givenName)
            return this.state.SelectedContactList
          }
        }
      }
    })
    this.setState({ Contact: this.state.Contact })
  }

  _showSelectedContact() {
    return this.state.SelectedContactList.length;
  }

  componentWillMount() {
    
    
  }

  componentDidMount() {
    
    Contacts.checkPermission((err, permission) => {
      // Contacts.PERMISSION_AUTHORIZED || Contacts.PERMISSION_UNDEFINED || Contacts.PERMISSION_DENIED
      if (permission === 'undefined') {
        Contacts.requestPermission((err, permission) => {
          // ...
        })
      }
      if (permission === 'authorized') {
        // yay!
      }
      if (permission === 'denied') {
        // x.x
      }
    })

    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        // error
      } else {
        // contacts returned in []
        contacts.map(info => {
          info.check = false;
          return contacts;
        })
        console.log(contacts);
        this.setState({ Contact: contacts.sort() })
      }
    })
  }

  renderHeader = () => {
    return <Header />
  };

  render() {
    console.log()
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.toptext}>Choisissez vos contacts à alerter !</Text>
        </View>
        <ScrollView style={styles.storyContainer}>
          <FlatList data={this.state.Contact} keyExtractor={item => item.recordID} extraData={this.state}  renderItem={({ item }) => {
            return <TouchableOpacity style={{
              flexDirection: 'row',
              padding: 10,
              borderBottomWidth: 1,
              borderStyle: 'solid',
              borderColor: '#ecf0f1'
            }} onPress={() => {
              this.press(item)
            }}>
              <View style={{
                flex: 3,
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}>
                {item.check
                  ? (
                    <Text style={{
                      fontWeight: 'bold'
                    }}>{`${item.familyName} ${item.givenName}`}</Text>
                  )
                  : (
                    <Text>{`${item.familyName} ${item.givenName}`}</Text>
                  )}
              </View>
              <View style={{
                flex: 2,

                justifyContent: 'center'
              }}>
                <Text>{item.phoneNumbers[0].number}</Text>
              </View>
              <View style={{
                flex: 1,
                alignItems: 'flex-end',
                justifyContent: 'center'
              }}>
                {item.check
                  ? (
                    <Icon name="ios-checkbox" size={30} color={primaryColor}></Icon>
                  )
                  : (
                    <Icon name="ios-checkbox" size={30} color={darkGrey}></Icon>
                  )}
              </View>
            </TouchableOpacity>
          }} />
        </ScrollView>
        <View style={{flex:1,justifyContent:"flex-end"}}>
          {(this.state.SelectedContactList.length > 0)
            ? (
              <View style={styles.containerFooter}>
                <View style={{
                  flex: 3,
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  alignContent: 'center'
                }}>
                  <FlatList data={this.state.SelectedContactList} horizontal={true} extraData={this.state} keyExtractor={(item, index) => item.recordID} renderItem={({ item, index }) => {
                    return <View style={{
                      paddingTop: 10
                    }}>
                      <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        padding: 2
                      }}>{item.givenName},
                      </Text>
                    </View>
                  }} />

                </View>
                <View style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center'
                }}>
                  <TouchableOpacity style={{
                    padding: 10
                  }} onPress={() => this.props.navigation.navigate("Map")}>

                    <Icon name="ios-paper-plane" size={30} color="white"></Icon>
                  </TouchableOpacity>
                </View>
              </View>
            )
            : null
          }
        </View>

      </View>
    );
  };
};

const primaryColor = "#58C0E7"  ;
const lightGrey = "#ecf0f1";
const darkGrey = "#bdc3c7";

const Header = (props) => (
  <View style={styles.searchContainer}>
    <TextInput style={styles.input} placeholder="Rechercher..." onChangeText={(text) => console.log('searching for ', text)} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 0
  },
  storyContainer:{
    marginTop:10
  },
  containerFooter: {
    height: 50,
    backgroundColor: '#BB2746'  ,
    padding: 5,
    flexDirection: 'row',
    
  },
  searchContainer: {
    
    padding: 5,
    height:30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf0f1'
  },
  toptext : {
    fontSize:30,
    textAlign:'center',
    color:"black"

  }
});