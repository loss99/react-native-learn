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
import LoginButton from '../../app/lib/LoginButton';
// 一个AnimatedValue同时驱动两三个属性，透明度，Y的位置以及scale
export default
class Demo extends React.Component {
  state: { //可以不写，我这里写是为了去除flow警告
    fadeAnim: Animated,
    currentAlpha:number,
  };
  constructor(props) {
     super(props);
     this.state = {
       currentAlpha: 1.0,//标志位，记录当前value
       fadeAnim: new Animated.Value(1.0)
     };
   }


   startAnimation(){
   this.state.currentAlpha = this.state.currentAlpha == 1.0?0.0:1.0;
   Animated.timing(
     this.state.fadeAnim,
     {toValue: this.state.currentAlpha}
   ).start();
  }

  render() {
    return (
      // 所以说，简单的动画就是用Animated.Value指定初始值，然后在Animated.timing中设置结束值，其他的交给React native让它自动创建，我们只需要调用start开始动画即可。
      <View>
      <Animated.Text style={
        {opacity: this.state.fadeAnim, //透明度动画
          transform:[//transform动画
            {
              translateY: this.state.fadeAnim.interpolate(
                {
                      inputRange: [0, 1],
                      outputRange: [60, 0] //线性插值，0对应60，0.6对应30，1对应0
                }),
            },
          {
            scale:this.state.fadeAnim
          },],
      }}>
          Welcome to React Native!
      </Animated.Text>
      <LoginButton name='开始' onPressCallback={()=> this.startAnimation()}/>
      </View>
    );
  }
}
