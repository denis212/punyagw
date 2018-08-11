import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView,StatusBar,TouchableOpacity} from 'react-native';
// import LoginForm from './LoginForm';

import {Actions} from 'react-native-router-flux';

export default class Home extends React.Component {

  render() {
    return (
      <KeyboardAvoidingView behavior="padding"  style={styles.container}>
        <StatusBar
          backgroundColor="blue"
           barStyle="dark-content"/>
        <View style={styles.containerBott}>
          <Text style={styles.subtitle}>Powered by Juraganparts! </Text>
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
