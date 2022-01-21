import React, { useEffect } from 'react';
import { Text, Image, TouchableWithoutFeedback } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { COLORS, FONTS, SIZES  } from '../constants';


const TabButton = (props) => {
    const { label, icon, isSelected, onPress } = {...props};

    const tabFlex = useSharedValue(1)
    const tabColor = useSharedValue(COLORS.white)

    const flexStyle = useAnimatedStyle(() => {
        return {
            flex: tabFlex.value
        }
    })

    const colorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: tabColor.value
        }
    })

    useEffect(() => {
        if(isSelected){
            tabFlex.value = withTiming(4, { duration: 500 })
            tabColor.value = withTiming(COLORS.primary, { duration: 500 }) 
        } else{
            tabFlex.value = withTiming(1, { duration: 500 })
            tabColor.value = withTiming(COLORS.white, { duration: 500 })
        }
    }, [isSelected])

    return (
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <Animated.View
                style={[{ flex: 1, alignItems: 'center', justifyContent: 'center' }, flexStyle]}
            >
                <Animated.View
                    style={[{ flexDirection: 'row', width: '80%', height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }, colorStyle]}
                >
                    <Image
                        source={icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: isSelected ? COLORS.white : COLORS.gray
                        }}
                    />
                    {
                        isSelected &&
                            <Text
                                numberOfLines={1}
                                style={{
                                    marginLeft: SIZES.base,
                                    color: isSelected ? COLORS.white : COLORS.gray,
                                    ...FONTS.h3
                                }}
                            >
                                {label}
                            </Text>
                    }
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

export default TabButton;