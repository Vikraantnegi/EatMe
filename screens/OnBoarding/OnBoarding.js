import React from 'react';
import { View, Text, ImageBackground, Image, Animated } from 'react-native';
import { constants, images, FONTS, SIZES, COLORS } from '../../constants'

const OnBoarding = () => {
    return (
        <View
            style={{ flex: 1 }}
        >
            <View
                style={{ position: 'absolute', top: SIZES.height > 800 ? 50 : 25, left: 0, right: 0, alignItems: 'center', justifyContent: 'center' }}
            >
                <Image
                    source={images.logo_02}
                    resizeMode='contain'
                    style={{ width: SIZES.width*0.5, height: 100 }}
                />

                <Animated.FlatList
                    horizontal
                    pagingEnabled
                    data={constants.onboarding_screens}
                    scrollEventThrottle={16}
                    snapToAlignment="center"
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({item, index}) => {
                        return(
                            <View
                            
                            >
                            </View>
                        )
                    }}
                />
            </View>
            
        </View>
    )
}

export default OnBoarding;