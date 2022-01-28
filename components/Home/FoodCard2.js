import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, icons } from '../../constants';

const FoodCard2 = (props) => {
    const { containerStyle, item, onPress } = {...props}
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onPress}
            style={{ width: 200, padding: SIZES.radius, alignItems: 'center', borderRadius: SIZES.radius, backgroundColor: COLORS.lightGray2, ...containerStyle }}
        >
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image 
                        source={icons.calories}
                        style={{ width: 30, height: 30 }}
                    />
                    <Text 
                        style={{ color: COLORS.darkGray2, ...FONTS.body5 }} 
                    >
                        {item.calories} Calories
                    </Text>
                </View>
                <Image 
                    source={icons.love}
                    style={{ width: 20, height: 20, tintColor: item.isFavourite ? COLORS.primary : COLORS.gray }}
                />
            </View>
            <View
                style={{ height: 150, width: 150, alignItems: 'center', justifyContent: 'center' }}
            >
                <Image
                    style={{ height: "100%", width: "100%" }}
                    source={item.image}
                />
            </View>
            <View
                style={{ alignItems: 'center', marginTop: -25 }}
            >
                <Text
                    style={{ ...FONTS.h3, color: COLORS.black }}
                >
                    {item.name}
                </Text>
                <Text
                    style={{ ...FONTS.body5, textAlign: 'center', color: COLORS.darkGray2 }}
                >
                    {item.description}
                </Text>
                <Text
                    style={{ ...FONTS.h2, marginTop: SIZES.base/2, color: COLORS.black }} 
                >
                    ${item.price}
                </Text>
            </View>
    
        </TouchableOpacity>
    );
  };
  

export default FoodCard2;
