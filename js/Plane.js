import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { ViroFlexView, ViroImage, ViroText } from 'react-viro';

import ProfileImage from './res/btn_mode_objects_on.png';

class Plane extends Component {
  render() {
    const { position, scale } = this.props;

    return (
      <ViroFlexView position={position} scale={scale} height={2} width={2} style={styles.plane}>
        <ViroFlexView style={styles.profile}>
          <ViroImage source={ProfileImage} style={styles.avatar} />
          <ViroFlexView style={styles.description}>
            <ViroText style={styles.name} text="Peter McKinnon" />
            <ViroText style={styles.date} text="5 hours ago" />
          </ViroFlexView>
        </ViroFlexView>
        <ViroFlexView style={styles.second}>
          <ViroText style={styles.message} text="I visited this place yesterday and it was amazing. Somebody wants to go there again with me?" />
        </ViroFlexView>
      </ViroFlexView>
    );
  }
}

Plane.propTypes = {
  position: PropTypes.any,
  scale: PropTypes.any,
};

export default Plane;

var styles = StyleSheet.create({
  plane: {
    backgroundColor: '#f25b0f',
    flexDirection: 'column',
    padding: 0.01,
  },
  profile: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 0.4,
    alignItems: 'center',
  },
  avatar: {
    height: 0.4,
    width: 0.4,
    marginRight: 0.03,
  },
  description: {
    flex: 3,
    flexDirection: 'column',
  },
  name: {
    flex: 1,
    color: '#000000',
    fontSize: 15,
  },
  date: {
    flex: 1,
    color: '#222222',
    fontSize: 11,
  },
  second: {
    backgroundColor: '#dddddd',
    flex: 2,
    padding: 0.05,
  },
  message: {
    flex: 1,
    color: '#000000',
    fontSize: 20,
  },
});
