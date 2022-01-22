import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, icons } from '../constants';

const FoodCard = (props) => {
  const { containerStyle, item, imageStyle, onPress } = {...props}
  return (
    <TouchableOpacity
        activeOpacity={0.6}
        onPress={onPress}
        style={{ flexDirection: 'row', borderRadius: SIZES.radius, backgroundColor: COLORS.lightGray2, ...containerStyle }}
    >
        <View style={{ flexDirection: 'row', position: 'absolute', top: 5, right: SIZES.radius }}>
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
            style={{ ...imageStyle }}
            source={item.image}
        />
        <View
            style={{ flex: 1 }}
        >
            <Text
                style={{ ...FONTS.h3, fontSize: 17, color: COLORS.black }}
            >
                {item.name}
            </Text>
            <Text
                style={{ ...FONTS.body4, color: COLORS.darkGray2 }}
            >
                {item.description}
            </Text>
            <Text
                style={{ ...FONTS.h2, marginTop: SIZES.base, color: COLORS.black }} 
            >
                ${item.price}
            </Text>
        </View>

    </TouchableOpacity>
  );
};

export default FoodCard;
