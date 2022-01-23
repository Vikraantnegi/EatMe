import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, SIZES } from '../constants';

const CategorySection = (props) => {
    const { data, selected, onPress } = {...props}
    return (
        <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item, index}) => {
                return(
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={{ flexDirection: 'row', height: 55, marginTop: SIZES.padding, marginLeft: index == 0 ? SIZES.padding : SIZES.radius, 
                            marginRight: index == data.length - 1 ? SIZES.padding : 0, paddingHorizontal: SIZES.base, borderRadius: SIZES.radius, 
                            backgroundColor: selected == item.id ? COLORS.primary : COLORS.lightGray2     
                        }}
                        onPress={() => onPress(item.id)}
                    >

                    </TouchableOpacity>    
                )
            }}
        />
    );
};

export default CategorySection;
