'use strict';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ViroARScene, ViroConstants } from 'react-viro';

import Plane from './Plane';

export default class HelloWorldSceneAR extends Component {
  state = {
    text: 'Searching',
  };

  onInitialized = state => {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text: 'Searching',
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  };

  render() {
    const {
      arSceneNavigator: {
        viroAppProps: { marker },
      },
    } = this.props;

    return (
      <ViroARScene onTrackingUpdated={this.onInitialized}>
        {marker && <Plane text={marker.text} scale={[0.5, 0.5, 0.5]} position={[0.5, 1, -3.5]} />}
      </ViroARScene>
    );
  }
}

HelloWorldSceneAR.propTypes = {
  arSceneNavigator: PropTypes.any,
};

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
