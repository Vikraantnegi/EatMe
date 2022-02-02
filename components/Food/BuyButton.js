import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../../constants';

const BuyButton = (props) => {
    const {label, labelStyle, buttonContainerStyle, onPress, label1, label1Style} = {...props}
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary, ...buttonContainerStyle }}
            onPress={onPress}
        >
            <Text
                style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}
            >
                {label}
            </Text>

            <Text
                style={{ color: COLORS.white, flex: 1, textAlign: 'right', ...FONTS.h3, ...label1Style }}
            >
                {label1}
            </Text>
        </TouchableOpacity>
    );
};

export default BuyButton;
