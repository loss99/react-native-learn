import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Animated,
  Dimensions,
} from 'react-native';
export default
class Demo extends React.Component {
  state: { //可以不写，我这里写是为了去除flow警告
    fadeAnim: Object,
  };
  constructor(props) {
     super(props);
     this.state = {
         fadeAnim: new Animated.Value(0), //设置初始值
     };
   }
   componentDidMount() {
   Animated.timing(
     this.state.fadeAnim,//初始值
     {toValue: 1}//结束值
   ).start();//开始
   }
  render() {
    return (
      // 所以说，简单的动画就是用Animated.Value指定初始值，然后在Animated.timing中设置结束值，其他的交给React native让它自动创建，我们只需要调用start开始动画即可。
      <Animated.Text style={{opacity: this.state.fadeAnim}}>
          Welcome to React Native!
      </Animated.Text>
    );
  }
}
