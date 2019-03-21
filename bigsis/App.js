import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignUP from "./Components/SignUP";
import SignIN from "./Components/SignIN";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <SignUP />
        </View>
        <View>
          <SignIN />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  White: {
    // Define your HEX color code here.
    color: "#1C2938"
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "20%"
  }
});
export default App;
