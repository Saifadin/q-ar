/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import { ViroARSceneNavigator } from 'react-viro';

// Sets the default scene you want for AR and VR
import InitialARScene from './js/HelloWorldSceneAR';
import Icon from './images/QRUMBZ_ICON.png';

var sharedProps = {
  apiKey: '75681CC2-7A90-4B0A-B46D-E4550CBFAD26',
};
var UNSET = 'UNSET';
var AR_NAVIGATOR_TYPE = 'AR';
// This determines which type of experience to launch in, or UNSET, if the user should
// be presented with a choice of AR or VR. By default, we offer the user a choice.
var defaultNavigatorType = UNSET;

export default class ViroSample extends Component {
  state = {
    navigatorType: defaultNavigatorType,
    sharedProps: sharedProps,
    marker: null,
  };

  // Presents the user with a choice of an AR or VR experience
  getExperienceSelector = () => {
    return (
      <View style={styles.outer}>
        <View style={styles.inner}>
          <TouchableHighlight onPress={this.getExperienceButtonOnPress(AR_NAVIGATOR_TYPE)}>
            <Image source={Icon} style={styles.image} />
          </TouchableHighlight>
        </View>
      </View>
    );
  };

  // This function returns an anonymous/lambda function to be used
  // by the experience selector buttons
  getExperienceButtonOnPress = navigatorType => {
    return () => {
      this.setState({
        navigatorType: navigatorType,
      });
    };
  };

  // This function "exits" Viro by setting the navigatorType to UNSET.
  exitViro = () => {
    this.setState({
      navigatorType: UNSET,
    });
  };

  onPress = () => {
    this.setState({
      marker: { text: 'Noow' },
    });
  };

  // Replace this function with the contents of _getVRNavigator() or _getARNavigator()
  // if you are building a specific type of experience.
  render() {
    const { marker } = this.state;
    return (
      <View style={styles.outer}>
        <ViroARSceneNavigator
          {...this.state.sharedProps}
          initialScene={{ scene: InitialARScene }}
          viroAppProps={{ marker }}
          vrModeEnabled={false}
        />
        <View style={styles.button}>
          <TouchableHighlight onPress={this.onPress}>
            <Image source={Icon} style={styles.image} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  outer: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 16,
    left: 0,
    right: 0,
  },
  image: {
    width: 48,
    height: 48,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 14,
  },
  buttons: {
    width: 150,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: '#ffffff',
  },
  arrows: {
    color: '#ffffff',
    fontSize: 40,
  },
});
