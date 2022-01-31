import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS } from '../../constants';

const Header = (props) => {
    const { containerStyle, title, left, right, titleStyle } = {...props}
    return (
        <View
            style={{ flexDirection: 'row', ...containerStyle }}
        >
            {left}

            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.black, ...titleStyle }}>
                    {title}
                </Text>
            </View>

            {right}
        </View>
    );
};

export default Header;
