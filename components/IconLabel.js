import { View, Text } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';

const IconLabel = (props) => {
    const { containerStyle, label, labelStyle, icon, iconStyle } = {...props}
    return (
        <View
            style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, paddingVertical: SIZES.base, borderRadius: SIZES.radius, ...containerStyle }}
        >
            <Image
                source={icon}
                style={{ width: 20, height: 20, ...iconStyle }}
            />
            <Text 
                style={{ marginLeft: SIZES.base, color: COLORS.black, ...FONTS.body3, ...labelStyle }}
            >
                {label}
            </Text>
        </View>
    );
};

export default IconLabel;
