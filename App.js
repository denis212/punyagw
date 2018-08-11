import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import { Asset, AppLoading } from 'expo';

import Routes from './src/components/Routes';

export default class App extends React.Component {
  
  render() {

    return (
      <Routes/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
