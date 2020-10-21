import React, { Component, useState } from 'react';
import { Text, View, Animated, TouchableOpacity, StyleSheet } from 'react-native';

class AnimatedScreen extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View style={stylesAnimated.container}>
        <Animated.View
          style={[
            stylesAnimated.fadingContainer,
            {
              opacity: this.state.fadeAnim, // Bind opacity to animated value
            },
          ]}>
          <Text style={stylesAnimated.fadingText}>Fading View!</Text>
        </Animated.View>

        <View style={stylesAnimated.buttonRow}>
          <TouchableOpacity onPress={this.fadeIn}>
            <Text>Hiện</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.fadeOut}>
            <Text>Ẩn</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const stylesAnimated = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'red',
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});

export default AnimatedScreen;
