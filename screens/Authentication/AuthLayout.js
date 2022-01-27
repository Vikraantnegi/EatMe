import { View, Text, Image } from 'react-native';
import React from 'react';
import { constants, images, FONTS, SIZES, COLORS } from '../../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AuthLayout = ({ title, subTitle, titleContainerStyle, children }) => {
    return (
        <View
            style={{ flex: 1, paddingVertical: SIZES.padding }}
        >
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                contentContainerStyle={{ flex: 1, paddingHorizontal: SIZES.padding }}
            >
                
            </KeyboardAwareScrollView>
        </View>
    )
}

export default AuthLayout;
