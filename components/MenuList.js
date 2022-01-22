import { View, Text } from 'react-native';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { COLORS, dummyData, FONTS, SIZES } from '../constants';

const MenuList = (props) => {

    const { setSelectedMenu, handleChangeCategory, selectedCategoryId, selectedMenuType } = {...props}

    const handleMenuClick = (id) => {        
        setSelectedMenu(id)
        handleChangeCategory(selectedCategoryId, id)
    }

    return (
        <FlatList
            horizontal
            data={dummyData.menu}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => `${item.id}`}
            contentContainerStyle={{ marginTop: 30, marginBottom: 20 }}
            renderItem={({item, index}) => {
                return(
                    <TouchableOpacity
                        onPress={() => handleMenuClick(item.id)}
                        style={{ marginLeft: SIZES.padding, marginRight: index === dummyData.menu.length - 1 ? SIZES.padding : 0 }}
                    >
                        <Text
                            style={{ color: selectedMenuType == item.id ? COLORS.primary : COLORS.black, ...FONTS.h3 }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )
            }}
        />
    );
};

export default MenuList;
