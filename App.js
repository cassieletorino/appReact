import React, { Component } from "react";
import { View, Text } from "react-native";

/*Componentes*/
class App extends Component {
  render() {
    return (
      <View>
        <Text style={{ margin: 25, fontSize: 25, textAlign: "center" }}>
          Meu primeiro app
        </Text>
        <Text style={{ marginLeft: 15, color: "red" }}>Hello world!</Text>
      </View>
    );
  }
}

export default App;

/*function App() {
  return (
    <View>
      <Text>Meu primeiro app</Text>
    </View>
  );
}*/
