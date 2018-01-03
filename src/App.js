import React, { Component } from 'react';
import { View } from 'react-native'
//No need to specify the index file, will go automatically to it
import { Header } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';


class App extends Component {
//Lifecycle method, once defined it will automatically be called.
componentWillMount(){
  firebase.initializeApp({
    apiKey: 'AIzaSyAd2_QV-o18Z0n3MhfPlYcYtyKNnKTrILQ',
    authDomain: 'auth-c22dc.firebaseapp.com',
    databaseURL: 'https://auth-c22dc.firebaseio.com',
    projectId: 'auth-c22dc',
    storageBucket: 'auth-c22dc.appspot.com',
    messagingSenderId: '68540481901'
  });
}

render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm/>
      </View>
    );
  }
}

export default App;
