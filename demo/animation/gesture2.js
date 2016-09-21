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
} from 'react-native';
var deviceHeight = require('Dimensions').get('window').height;
var deviceWidth = require('Dimensions').get('window').width;
// 手势驱动
// React Native最常用的手势就是PanResponser，
// 由于本文侧重讲解动画，所以不会特别详细的介绍PanResponser，仅仅介绍用到的几个属性和回调方法
// onStartShouldSetPanResponder: (event, gestureState) => {}//是否相应pan手势
// onPanResponderMove: (event, gestureState) => {}//在pan移动的时候进行的回调
// onPanResponderRelease: (event, gestureState) => {}//手离开屏幕
// onPanResponderTerminate: (event, gestureState) => {}//手势中断
// 其中，
// 通过event可以获得触摸de位置，时间戳等信息。
// 通过gestureState可以获取移动的距离，速度等
// 目标效果- View随着手拖动而移动，手指离开会到原点
export default
class Demo extends React.Component {
  state:{
    trans:AnimatedValueXY,
  }
  _panResponder:PanResponder;
  constructor(props) {
     super(props);
     this.state = {
       trans: new Animated.ValueXY(),
     };
     this._panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true, //响应手势
        onPanResponderMove: Animated.event(
          [null, {dx: this.state.trans.x, dy:this.state.trans.y}] // 绑定动画值
        ),
        onPanResponderRelease: ()=>{//手松开，回到原始位置
          Animated.spring(this.state.trans,{toValue: {x: 0, y: 0}}
           ).start();
        },
        onPanResponderTerminate:()=>{//手势中断，回到原始位置
          Animated.spring(this.state.trans,{toValue: {x: 0, y: 0}}
           ).start();
        },
    });
   }
  render() {
    return (
      <View>
          <Animated.View style={{width:100,
                                 height:100,
                                 borderRadius:50,
                                 backgroundColor:'red',
                                 transform:[
                                   {translateY:this.state.trans.y},
                                   {translateX:this.state.trans.x},
                                 ],
                                }}
                {...this._panResponder.panHandlers}
          >
          </Animated.View>
      </View>
    );
  }
}
