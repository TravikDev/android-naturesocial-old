import { useRef, useState } from "react";
import { Animated } from "react-native/types";

export const AnimButton = () => {
    const [buttonVisible, setButtonVisible] = useState(true);
    const fadeAnim = useRef(new Animated.Value(1)).current;

    const handlePress = () => {
        Animated.timing(fadeAnim, {
            toValue: buttonVisible ? 0 : 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => setButtonVisible(!buttonVisible));
    };
}