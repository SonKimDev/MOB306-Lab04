import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import React, { useState } from 'react'

const AboutScreen = () => {
    const [scaleValue] = useState(new Animated.Value(1));

    const startAnimation = () => {
      Animated.timing(scaleValue, {
        toValue: 0.8,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        resetAnimation();
      });
    };
  
    const resetAnimation = () => {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    };
  
    return (
      <View style={styles.container}>
        <Text>This is About Screen</Text>
        <TouchableOpacity onPress={startAnimation}>
          <Animated.View
            style={[styles.button, { transform: [{ scale: scaleValue }] }]}
          >
            <Text style={styles.buttonText}>Press Me</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    button: {
        backgroundColor: 'lightblue',
        padding: 20,
        borderRadius: 10,
      },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
})