import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,StatusBar,TouchableOpacity} from 'react-native';
import SignupForm from './SignupForm';

import {Actions} from 'react-native-router-flux';

export default class Signup extends React.Component {

   goBack() {
       Actions.pop();
   }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding"  style={styles.container}>
        <StatusBar
          backgroundColor="blue"
           barStyle="dark-content"/>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
          source={require('../../Images/logo.png')}/>
        </View>
        <View style={styles.formContainer}>
          <SignupForm type="Sign Up"/>
        </View>
        <View style={styles.signupCont}>
          <Text style={styles.signupText}>Already have an account yet?</Text>
          <TouchableOpacity onPress={this.goBack}>
            <Text style={styles.signupBtn}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#FFFFFF',

  },
  containerBott: {
    justifyContent:'flex-end',
    alignItems:'center'
  },

  logoContainer:{
    alignItems:'center',
    flexGrow: 1,
    justifyContent:'center'
  },
  logo: {
    width: 200,
    height: 200
  },
  subtitle: {
    color: 'green',
    fontWeight: '200',
    paddingBottom: 20,
  },
  signupText: {
    color: 'grey',
    fontWeight: '200',
    paddingBottom: 20,
  },
  signupCont: {
    flexGrow: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 18,
  },
  signupBtn: {
    color:'#3498db',
    fontSize: 16,
    fontWeight: '500',
  }
});
