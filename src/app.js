import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  state = {
    loggedIn: null
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD40uxJNs4FpBXZiA8dlaAYCUZ3SiU_6C4',
      authDomain: 'auth-ed7a1.firebaseapp.com',
      databaseURL: 'https://auth-ed7a1.firebaseio.com',
      storageBucket: 'auth-ed7a1.appspot.com',
      messagingSenderId: '471411535870'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
              <Spinner size="large" />
            </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export { App };
