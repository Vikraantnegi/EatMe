import React, { useRef, useState } from 'react';
import { View, Text, ImageBackground, Image, Animated } from 'react-native';
import { constants, images, FONTS, SIZES, COLORS } from '../../constants'
import TextButton from '../../components/TextButton'

const OnBoarding = ({navigation}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef()

    const onViewChangeRef = useRef(({ viewableItems, changed }) => {
        setCurrentIndex(viewableItems[0].index)
    })

    const Dots = () => {
        const dotPosition = Animated.divide(scrollX, SIZES.width)
        return(
            <View
                style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 96 }}
            >
                {
                    constants.onboarding_screens.map((item, index) => {
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.lightOrange, COLORS.primary, COLORS.lightOrange],
                            extrapolate: 'clamp'
                        }) 
                        const dotWidth = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [10, 30, 10],
                            extrapolate: 'clamp'
                        }) 
                        return(
                            <Animated.View
                                key={`dot-${index}`}
                                style={{ borderRadius: 5, marginHorizontal: 6, width: dotWidth, height: 10, backgroundColor: dotColor }}
                            />
                        )
                    })
                }
            </View>
        )
    }

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
            </View>
            
            {
                currentIndex < constants.onboarding_screens.length - 1 &&
                    <View
                        style={{ position: 'absolute', zIndex: 10, bottom: 0, left: 0, right: 0, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: SIZES.padding, marginVertical: SIZES.padding }}
                    >
                        <TextButton
                            label="Skip"
                            buttonContainerStyle={{ backgroundColor: null }}
                            labelStyle={{ color: COLORS.darkGray2 }}
                            onPress={() => navigation.replace("SignIn")}
                        />
                        <TextButton
                            label="Next"
                            buttonContainerStyle={{ height: 60, width: 200, borderRadius: SIZES.radius }}
                            onPress={() => {
                                flatListRef?.current?.scrollToIndex({
                                    index: currentIndex + 1,
                                    animated: true
                                })
                            }}
                        />
                    </View>
            }

            {
                currentIndex == constants.onboarding_screens.length - 1 &&
                    <View
                        style={{ position: 'absolute', zIndex: 10, bottom: 0, left: 0, right: 0, paddingHorizontal: SIZES.padding, marginVertical: SIZES.padding }}
                    >
                        <TextButton
                            label="Let's Get Started"
                            buttonContainerStyle={{ height: 60, width: "100%", borderRadius: SIZES.radius }}
                            onPress={() => navigation.replace('SignIn')}
                        />
                    </View>
            }

            <Animated.FlatList
                ref={flatListRef}
                horizontal
                pagingEnabled
                data={constants.onboarding_screens}
                scrollEventThrottle={16}
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event(
                    [
                        {nativeEvent: { contentOffset: { x: scrollX }}}
                    ],
                    { useNativeDriver: false }
                )}
                onViewableItemsChanged={onViewChangeRef.current}
                keyExtractor={(item) => `${item.id}`}
                renderItem={({item, index}) => {
                    return(
                        <View
                            style={{ width: SIZES.width }}
                        >
                            <View
                                style={{ flex: 3 }}
                            >
                                <ImageBackground
                                    source={item.backgroundImage}
                                    style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', width: "100%", height: "100%" }}
                                >
                                    <Image
                                        source={item.bannerImage}
                                        resizeMode='contain'
                                        style={{ width: SIZES.width * 0.8, height: SIZES.width*0.8, marginBottom: -SIZES.padding }}
                                    />
                                </ImageBackground>
                            </View>
                            <View
                                style={{ flex: 1, marginTop: 30, alignItems: 'center', justifyContent: 'center', paddingHorizontal: SIZES.radius }}
                            >
                                <Text style={{ ...FONTS.h1, fontSize: 25, color: COLORS.black }}>{item.title}</Text>
                                <Text style={{ marginTop: SIZES.radius, textAlign: 'center', color: COLORS.darkGray, paddingHorizontal: SIZES.padding, ...FONTS.body3 }}>{item.description}</Text>
                            </View>
                            <View
                                style={{ height: 160 }}
                            >
                                <View
                                    style={{ flex: 1, justifyContent: 'center' }}
                                >
                                    <Dots />
                                </View> 
                            </View>
                        </View>
                    )
                }}
            />
            
        </View>
    )
}

export default OnBoarding;