# Learn-React-Native-2

Building my second React-Native app to learn user Authentication with FireBase.
Additionally, made more reusable components for future projects including a text input form 
and a modified version of the built-in spinner. Further learned how to manage state based on 
user input and display relevant views. Handled: Log In, Log Out and some authentication 
failure cases

<TextInput />
height and width of ‘0’ by default.

    <TextInput
        autocorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        
      />


NOTE:      above: { text: text } is equivalent to { text }

NOTE:  boolean props such as:  secureTextEntry are defaulted to true
             no need for secureTextEntry={ true }


use an app.js file
reference this file from index.ios.js
    

       import { AppRegistry } from 'react';
   import { App } from './src/App';

   AppRegistry.registerComponent('auth', () => App)


src -> components -> common

index.js inside common folder

    export * from './Button’;
    export * from './Card';

   // Then instead of export default Button:
   export { Button };
    
    // Then import via destructuring: 
        import { Header } from './components/common’;

firebase.initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: "”
  }

onButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

 state = {
    loggedIn: null
  }

I’m componentWillMount ( )

 firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
