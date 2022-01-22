import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { SearchComponent, FoodCard } from '../../components';
import { FONTS, SIZES, icons, dummyData, COLORS } from '../../constants';

const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState(1)
    const [selectedMenu, setSelectedMenu] = useState(1)
    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        handleChangeMenu( selectedCategory, selectedMenu );
    }, [selectedCategory, selectedMenu])

    const handleChangeMenu = (categoryId, menuId) => {
        let selectedMenu = dummyData.menu.find(a => a.id === menuId)
        setMenuList(selectedMenu?.list.filter( a => a.categories.includes(categoryId)))
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
                        <FoodCard
                            containerStyle={{ height: 130, alignItems: 'center', marginHorizontal: SIZES.padding, marginBottom: SIZES.radius }}
                            imageStyle={{ marginTop: 20, height: 110, width: 110 }}
                            item={item}
                            onPress={() => console.log('FoodCard')}    
                        />
                    )
                }}
            />
        </View>
    )
}

export default Home;