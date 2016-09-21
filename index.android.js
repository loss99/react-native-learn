/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  ToolbarAndroid,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Navigator from './app/navigator';
import Animation from './demo/animation/animation';
import FadeIn from './demo/animation/FadeIn';
import Animation2 from './demo/animation/animation2';
import Gesture from './demo/animation/gesture';
import Gesture2 from './demo/animation/gesture2';
import LayoutAnimation from './demo/animation/LayoutAnimation';

AppRegistry.registerComponent('AwesomeProject', () => LayoutAnimation);
