import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { SearchComponent } from '../../components';
import { FONTS, SIZES, icons, dummyData, COLORS } from '../../constants';

const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState(1)
    const [selectedMenu, setSelectedMenu] = useState(1)
    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        handleChangeMenu( selectedCategory, selectedMenu );
    })

    const handleChangeMenu = (categoryId, menuId) => {
        let selectedMenu = dummyData.menu.find(a => a.id === menuId)
        setMenuList(selectedMenu?.list.filter( a => a.category.includes(categoryId)))
    }

    return (
        <View
            style={{
                flex: 1
            }}
        >
            <SearchComponent />
            
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => {
                    return(
                        <Text>
                            {item.name}
                        </Text>
                    )
                }}
            />
        </View>
    )
}

export default Home;