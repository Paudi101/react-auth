import React, { Component } from 'react';
import { View, Text } from 'react-native'
//No need to specify the index file, will go automatically to it
import { Header } from './components/common';

class App extends Component{
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>HelloWorld</Text>
      </View>
    );
  }
}

export default App;
