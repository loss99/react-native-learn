'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
var ToolbarAndroid = require('ToolbarAndroid');
export default
class ToolBarAndroidDemo extends Component {
  render() {
    return (
       <ToolbarAndroid
            actions={toolbarActions}
            navIcon={require('../../app/image/weixin.png')}
            style={styles.toolbar}
            subtitle="副标题"
            title="主标题"
            onActionSelected={this.onActionSelected}></ToolbarAndroid>
    );
  }
  // onActionSelected=function(position) {
  onActionSelected=(position)=>{
       ToastAndroid.show('This is '+position, ToastAndroid.SHORT)
  }

}
var toolbarActions = [
  {title: 'Create', icon: require('../../app/image/create.png'), show: 'always'},
  {title: 'Filter'},
  {title: 'Filter1'},
  {title: 'Settings', icon: require('../../app/image/setting.png'), show: 'always'},
];
const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  },
});
