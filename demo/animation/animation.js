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
class Animation extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
      grassTransY : new Animated.Value(Dimensions.get('window').height/2),
           bigDogeTrans : new Animated.ValueXY({
               x: 100,
               y: 298
           })
    };
  }
  render(): ReactElement {
    return (
      <Animated.Image                         // 可选的基本组件类型: Image, Text, View
        source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [                        // `transform`是一个有序数组（动画按顺序执行）
            {scale: this.state.bounceValue},  // 将`bounceValue`赋值给 `scale`
          ]
        }}
      />
    );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // 设置一个较大的初始值
    // Animated.spring(                          // 可选的基本动画类型: spring, decay, timing
    //   this.state.bounceValue,                 // 将`bounceValue`值动画化
    //   {
    //     toValue: 0.8,                         // 将其值以动画的形式改到一个较小值
    //     friction: 1,                          // Bouncier spring
    //   }
    // ).start();                                // 开始执行动画
    Animated.sequence([            // 首先执行decay动画，结束后同时执行spring和twirl动画
  Animated.decay(this.state.bigDogeTrans, {   // 滑行一段距离后停止
    velocity: {x: gestureState.vx, y: gestureState.vy}, // 根据用户的手势设置速度
    deceleration: 0.997,
  }),
  Animated.parallel([          // 在decay之后并行执行：
    Animated.spring(this.state.bigDogeTrans, {
      toValue: {x: 0, y: 0}    // 返回到起始点开始
    }),
    Animated.timing(grassTransY, {   // 同时开始旋转
      toValue: 360,
    }),
  ]),
]).start();                    // 执行这一整套动画序列
  }
}
