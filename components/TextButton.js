import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../constants';

const TextButton = (props) => {
    const {label, labelStyle, buttonContainerStyle, onPress, icon, iconStyle} = {...props}
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary, ...buttonContainerStyle }}
            onPress={onPress}
        >
            <Text
                style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}
            >
                {label}
            </Text>
            {icon &&
                <Image
                    source={icon}
                    style={{ marginLeft: 5, width: 20, height: 20, ...iconStyle }}
                />
            }
        </TouchableOpacity>
    );
};

export default TextButton;
