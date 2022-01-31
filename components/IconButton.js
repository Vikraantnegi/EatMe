import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

const IconButton = (props) => {
    const {buttonContainerStyle, onPress, icon, iconStyle, quantity} = {...props}
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', ...buttonContainerStyle }}
            onPress={onPress}
        >
            <Image
                source={icon}
                style={{ width: 30, height: 30, tintColor: COLORS.white, ...iconStyle }}
            />
            {
                quantity && (
                    <View 
                        style={{ position: 'absolute', top: 5, right: 5, height: 15, width: 15, alignItems: 'center', borderRadius: SIZES.radius, backgroundColor: COLORS.primary }}
                    >
                        <Text
                            style={{ color: COLORS.white, ...FONTS.body5, fontSize: 10, lineHeight: 17 }}
                        >
                            {quantity}
                        </Text>
                    </View>
                )
            }
        </TouchableOpacity>
    );
};

export default IconButton;
