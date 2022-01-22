import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES, icons } from '../constants';

const FoodCard = (props) => {
  const { containerStyle, item, ImageStyle, onPress } = {...props}
  return (
    <TouchableOpacity
        style={{ flexDirection: 'row', borderRadius: SIZES.radius, backgroundColor: COLORS.lightGray2, ...containerStyle }}
    >
        
    </TouchableOpacity>
  );
};

export default FoodCard;
