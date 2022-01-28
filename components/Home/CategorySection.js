import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, FONTS, SIZES } from '../../constants';

const CategorySection = (props) => {
    const { data, selected, onSelect, handleChange, selectedMenuType } = {...props}
    const handleClick = (id) => {
        onSelect(id);
        handleChange(id, selectedMenuType);
    }
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
                        onPress={() => handleClick(item.id)}
                    >
                        <View
                            style={{ flexDirection: 'row', alignItems: 'center' }}
                        >
                            <Image
                                source={item.icon}
                                style={{ marginTop: 5, height: 50, width: 50 }}
                            />
                            <Text
                                style={{ color: selected == item.id ? COLORS.white : COLORS.darkGray, marginRight: SIZES.base, ...FONTS.h3 }}
                            >
                                {item.name}
                            </Text>
                        </View>
                    </TouchableOpacity>    
                )
            }}
        />
    );
};

export default CategorySection;
