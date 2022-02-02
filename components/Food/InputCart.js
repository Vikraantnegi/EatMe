import { View, Text } from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import IconButton from './IconButton';

const InputCart = (props) => {
    const { containerStyle, value=1, onAdd, onMinus } = {...props}
    return (
        <View
            style={{ flexDirection: 'row', height: 60, width: 130, backgroundColor: COLORS.lightGray2, borderRadius: SIZES.radius, ...containerStyle }}
        >
            <IconButton
                containerStyle={{ width: 50, alignItems: 'center', justifyContent: 'center' }}
                icon={icons.minus}
                iconStyle={{ height: 25, width: 25, tintColor: value > 1 ? COLORS.primary : COLORS.gray }}
                onPress={onMinus}
            />
            <View
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ color: COLORS.black, ...FONTS.h2 }}>{value}</Text>
            </View>
            <IconButton
                containerStyle={{ width: 50, alignItems: 'center', justifyContent: 'center' }}
                icon={icons.plus}
                iconStyle={{ height: 25, width: 25, tintColor: COLORS.primary }}
                onPress={onAdd}
            />
        </View>
    );
};

export default InputCart;
