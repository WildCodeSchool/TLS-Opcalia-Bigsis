import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Map extends Component {
  render() {
    console.log(this.props.Redux);
    return (
      <View>
        <Text>TEST </Text>
      </View>
    );
  }
}


const mapStateToProps = (ReduxState) => ({
  Redux: ReduxState
});

export default connect(mapStateToProps)(Map);
