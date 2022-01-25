import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../constants';

const TextButton = (props) => {
    const {label, labelStyle, buttonContainerStyle, onPress} = {...props}
    return (
        <TouchableOpacity
            style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary, ...buttonContainerStyle }}
            onPress={onPress}
        >
            <Text
                style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default TextButton;
