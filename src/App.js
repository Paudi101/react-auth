import React, { Component } from 'react';
import { View } from 'react-native'
//No need to specify the index file, will go automatically to it
import { Header, Button, CardSection, Spinner } from './components/common';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }
//Lifecycle method, once defined it will automatically be called.
componentWillMount() {
  firebase.initializeApp({
    apiKey: 'AIzaSyAd2_QV-o18Z0n3MhfPlYcYtyKNnKTrILQ',
    authDomain: 'auth-c22dc.firebaseapp.com',
    databaseURL: 'https://auth-c22dc.firebaseio.com',
    projectId: 'auth-c22dc',
    storageBucket: 'auth-c22dc.appspot.com',
    messagingSenderId: '68540481901'
  });

  // If logged in set logged in to true else false triggered when state changes
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false })
    }
  });
}

renderContent() {
  switch (this.state.loggedIn){
    case true:
      return (<CardSection><Button onPress={() => firebase.auth().signOut()}>Log Out</Button></CardSection>);
    case false:
      return <LoginForm />;
    default:
      return (<View style={styles.centered}><Spinner size="large" /></View>)
  }
}

render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  centered:{
    marginTop: '50%',
    alignItems: 'center',
    flex: 1
  }
}

export default App;
