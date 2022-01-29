import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../../constants';

const TextButton = (props) => {
    const {label, labelStyle, disabled, buttonContainerStyle, onPress, icon, iconPosition="Right", iconStyle} = {...props}
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary, ...buttonContainerStyle }}
            onPress={onPress}
            disabled={disabled}
        >
            {icon && iconPosition === 'Left' &&
                <Image
                    source={icon}
                    style={{ marginLeft: 5, width: 20, height: 20, ...iconStyle }}
                />
            }
            <Text
                style={{ color: COLORS.white, ...FONTS.h3, ...labelStyle }}
            >
                {label}
            </Text>
            {icon && iconPosition === 'Right' &&
                <Image
                    source={icon}
                    style={{ marginLeft: 5, width: 15, height: 15, ...iconStyle }}
                />
            }
        </TouchableOpacity>
    );
};

export default TextButton;
