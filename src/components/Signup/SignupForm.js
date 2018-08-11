import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,Alert } from 'react-native';

export default class SignupForm extends React.Component {

  constructor() {

     super()

     this.state = {

       name: '',
       email: '',
       password: ''

     }

   }
   UserRegistrationFunction = () =>{
     const {name} = this.state;
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
    }else {

      fetch('http://192.168.1.135/loginpunyagw/user_reg.php', {
    // fetch('http://103.29.214.125/web/punyagw/user_reg.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
		      'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        })

      }).then((response) => response.json())
    			.then((responseJson) => {
    				Alert.alert(responseJson);
            // console.log(responseJson);
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
            placeholder="Email / Phone Number"
            returnKeyType="next"
            onChangeText={email => this.setState({email : email})}
            onSubmitEditing={() => this.refs.name.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}/>

          <TextInput underlineColorAndroid='transparent'
            placeholder="Username"
            returnKeyType="next"
            onChangeText={name => this.setState({name : name})}
            onSubmitEditing={() => this.refs.password.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}/>

          <TextInput underlineColorAndroid='transparent'
            placeholder="Password!"
            onChangeText={password => this.setState({password : password})}
            secureTextEntry
            returnKeyType="go"
            style={styles.input}/>

          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText} onPress={this.UserRegistrationFunction}>Signup</Text>

            {/* <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} style={styles.buttonText} /> */}
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
