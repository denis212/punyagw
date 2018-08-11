import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';

import {Actions} from 'react-native-router-flux';

export default class LoginForm extends React.Component {

  constructor() {

     super()

     this.state = {

       email: '',
       password: ''

     }

   }

   goHome(){
      Actions.home();
   }

   LoginFunction = () =>{
     const {email} = this.state;
     const {password} = this.state;

     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
		if(email==""){
			Alert.alert("Please enter Email address");
		  this.setState({email:'Please enter Email address'})

		}

		else if(reg.test(email) === false)
		{
		Alert.alert("Email is Not Correct");
		this.setState({email:'Email is Not Correct'})
		return false;
		  }

		else if(password==""){

    Alert.alert("Please enter password");
    this.setState({email:'Please enter password'})
		}
    else{
      fetch('http://192.168.1.135/loginpunyagw/login.php', {
    // fetch('http://103.29.214.125/web/punyagw/user_reg.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        })

      }).then((response) => response.json())
          .then((responseJson) => {
            if(responseJson == "ok"){
       				 // redirect to profile page
       				 Alert.alert("Successfully Login");
   				     Actions.home();
       			 }else{
       				 Alert.alert("Wrong Login Details");
       			 }
          })
          .catch((error)=>{
            console.error(error);
          });
      }
  }

  render() {
      return (
        <View style={styles.container}>
          <TextInput underlineColorAndroid='transparent'
            placeholder="Username"
            returnKeyType="next"
            onChangeText={email => this.setState({email : email})}
            onSubmitEditing={() => this.password.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}/>

          <TextInput underlineColorAndroid='transparent'
            placeholder="Password!"
            secureTextEntry
            returnKeyType="go"
            onChangeText={password => this.setState({password : password})}
            style={styles.input}/>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={this.LoginFunction}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      );
  }
}

const styles = StyleSheet.create ({

  container: {
    padding: 20,
  },
  input : {
      height:40,
      backgroundColor:'#ecf0f1',
      marginBottom: 10,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 25,
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    borderRadius: 25,
  },
  buttonText:{
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '700',
  }


});
