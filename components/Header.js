import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';

const Header = (props) => {
    const { containerStyle, title, navigation } = {...props}
    return (
        <View
            style={{ flexDirection: 'row', ...containerStyle }}
        >
            <TouchableOpacity
                style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.gray2, borderRadius: SIZES.radius }}
                onPress={() => navigation.openDrawer()}
            >
                <Image source={ icons.menu } />
            </TouchableOpacity>
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.black }}>
                    {title}
                </Text>
            </View>
        </View>
    );
};

export default Header;
