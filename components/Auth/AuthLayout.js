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
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={images.logo_02}
                        resizeMode='contain'
                        style={{ height: 100, width: 200 }}
                    />
                </View>

                <View style={{ marginTop: SIZES.padding, ...titleContainerStyle }}>
                    <Text style={{ textAlign: 'center', color: COLORS.black, ...FONTS.h2 }}>
                        {title}
                    </Text>
                    <Text style={{ textAlign: 'center', color: COLORS.darkGray2, marginTop: SIZES.base, ...FONTS.body3 }}>
                        {subTitle}
                    </Text>
                </View>

                {children}

            </KeyboardAwareScrollView>
        </View>
    )
}

export default AuthLayout;
