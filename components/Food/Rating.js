import { View, Text } from 'react-native';
import React from 'react';
import { COLORS, icons } from '../../constants';

const Rating = (props) => {
    const { rating, iconStyle, activeColor = COLORS.orange, inactiveColor = COLORS.lightOrange3 } = {...props}
    return (
        <View
            style={{ flexDirection: 'row' }}
        >
            <Image source={icons.star} style={{ tintColor: rating >=1 ? activeColor : inactiveColor, width: 15, height: 15, ...iconStyle }} />
            <Image source={icons.star} style={{ tintColor: rating >=2 ? activeColor : inactiveColor, width: 15, height: 15, ...iconStyle }} />
            <Image source={icons.star} style={{ tintColor: rating >=3 ? activeColor : inactiveColor, width: 15, height: 15, ...iconStyle }} />
            <Image source={icons.star} style={{ tintColor: rating >=4 ? activeColor : inactiveColor, width: 15, height: 15, ...iconStyle }} />
            <Image source={icons.star} style={{ tintColor: rating >=5 ? activeColor : inactiveColor, width: 15, height: 15, ...iconStyle }} />
        </View>
    );
};

export default Rating;
