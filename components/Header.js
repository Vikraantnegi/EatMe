import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES, icons, dummyData } from '../constants';

const Header = (props) => {
    const { containerStyle, title, left, right } = {...props}
    return (
        <View
            style={{ flexDirection: 'row', ...containerStyle }}
        >
            {left}

            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.black }}>
                    {title}
                </Text>
            </View>

            {right}
        </View>
    );
};

export default Header;
