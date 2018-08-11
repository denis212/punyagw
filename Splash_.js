import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Splash extends React.Component {

  render() {
      return (
        <View style={styles.wrapper}>
          <View style={styles.titlewrapper}>
            <Text style={styles.title}>Baby Stuff Rent</Text>
          </View>
          <View style={styles.wrapperBottom}>
            <Text style={styles.subtitle}>Powered by Juraganparts!</Text>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create ({

  wrapper: {
    backgroundColor:'#e67e22',
    flex:1,
  },

  wrapperBottom: {
    backgroundColor:'#e67e22',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  },

  subtitle: {
    color: 'white',
    fontWeight: '200',
    paddingBottom: 20
  },

  titlewrapper:{
    justifyContent:'center',
    flex: 1
  }

});
