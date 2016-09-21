import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Animated,
  Dimensions,
  ScrollView,
  Image,
  PanResponder,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
export default
class Demo extends React.Component{
    render(){
      return (
        <Navigator
          style = {styles.container}
          initialRoute={{id:"main",}}
          renderScene={this.renderNav}
          configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}

          />
      );
    }
    renderNav(route,nav){
        switch (route.id) {
          case 'main':
            return <MainScreen navigator={nav} title="Main"/ >;
          case 'detail':
            return (<DetailScreen navigator={nav} title="Detail"/ >);
        }
    }
 }const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
