import { View, Text } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SectionHeader = (props) => {
    const { onPress, title } = {...props}
    return (
        <View
            style={{ flexDirection: 'row', marginHorizontal: SIZES.padding, marginVertical: 20 }}
        >
            <Text 
                style={{ flex: 1, ...FONTS.h3, color: COLORS.black }}
            >
                {title}
            </Text>

            <TouchableOpacity
                activeOpacity={0.6}
                onPress={onPress}
            >
                <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
                    Show All
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default SectionHeader;
