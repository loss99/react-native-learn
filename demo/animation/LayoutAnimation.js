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
// LayoutAnimation详解
//
// 配置相关
//
// //配置下一次切换的效果，其中config可配置的包括duration（时间），create（配置新的View），update（配置更新的View）
// static configureNext(config, onAnimationDidEnd?)
// //configureNext的方便方法
// static create(duration, type, creationProp) #
//
// 属性
//
// 对应三种时间函数
//
// easeInEaseOut: CallExpression #
// linear: CallExpression #
// spring: CallExpression #
//

export default
class Demo extends React.Component {
  state: {
      marginBottom:number,
  };
  constructor(props) {
     super(props);
     this.state = {//设置初值
       marginBottom:0
     };
   }
  _textUp(){
    LayoutAnimation.spring();
    this.setState({marginBottom:this.state.marginBottom + 100})
  }
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity onPress = {()=>this._textUp()}
                      style={{  width:120,
                                height:40,
                                alignItems:'center',
                                marginBottom:this.state.marginBottom,
                                justifyContent:'center',
                                backgroundColor:'#00ffff',
                                borderRadius:20}}>
          <Text>Text UP</Text>
      </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
