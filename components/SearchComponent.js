import { View, Text, Image, TextInput } from 'react-native';
import React from 'react';
import { COLORS, SIZES, icons, FONTS } from '../constants';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchComponent = ({onOpen}) => {
  return (
    <View
        style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginHorizontal: SIZES.padding, marginVertical: 1.5*SIZES.base, paddingHorizontal: SIZES.radius, borderRadius: SIZES.radius, backgroundColor: COLORS.lightGray2 }}
    >
        <Image
            source={icons.search}
            style={{ height: 20, width: 20, tintColor: COLORS.black }}
        />

        <TextInput
            style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3, color: COLORS.black, paddingBottom: 5 }}
            placeholder="Search Food..."
            placeholderTextColor={COLORS.gray2}
        />

        <TouchableOpacity
            activeOpacity={0.6}
            onPress={onOpen}
        >
            <Image
                source={ icons.filter }
                style={{ height: 20, width: 20, tintColor: COLORS.black }}
            />
        </TouchableOpacity>  
    </View>
  );
};

export default SearchComponent;
