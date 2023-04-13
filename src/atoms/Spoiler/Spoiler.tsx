import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

/* @ts-ignore */
export const Spoiler = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);

    Animated.timing(animation, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const rotateAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const heightAnimation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  return (
    <View>
      <TouchableOpacity onPress={toggleExpansion}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Animated.Text style={{ transform: [{ rotate: rotateAnimation }] }}>
            {isExpanded ? '▼' : '►'}
          </Animated.Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 10 }}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
      <Animated.View style={{ height: heightAnimation, overflow: 'hidden' }}>
        {children}
      </Animated.View>
    </View>
  );
};