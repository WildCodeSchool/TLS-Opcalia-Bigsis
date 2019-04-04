import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Contacts from 'react-native-contacts';


export default class SelectContact extends Component {
    constructor(props){
        super(props)
    }
componentWillMount(){
    Contacts.getAll((err, contacts) => {
        if (err) {
          throw err;
        }
        // contacts returned
        console.log(contacts)
      })
}

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
})
