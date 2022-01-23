import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { SearchComponent, FoodCard, MenuList, RecommendedSection, PopularSection, CategorySection } from '../../components';
import { FONTS, SIZES, icons, dummyData, COLORS } from '../../constants';

const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState(1)
    const [selectedMenu, setSelectedMenu] = useState(1)
    const [recommendedMeals, setRecommended] = useState([])
    const [popularMeals, setPopular] = useState([])
    const [menuList, setMenuList] = useState([])

    useEffect(() => {
        handleChangeMenu( selectedCategory, selectedMenu );
    }, [selectedCategory, selectedMenu])

    const handleChangeMenu = (categoryId, menuId) => {
        let popular = dummyData.menu.find(a => a.name == "Popular")
        let recommended = dummyData.menu.find(a => a.name == "Recommended")
        let selectedMenu = dummyData.menu.find(a => a.id === menuId)

        setPopular(popular?.list.filter(a => a.categories.includes(categoryId)))
        setRecommended(recommended?.list.filter(a => a.categories.includes(categoryId)))
        setMenuList(selectedMenu?.list.filter( a => a.categories.includes(categoryId)))
    }

    return (
        <View
            style={{ flex: 1 }}
        >
            <SearchComponent />

            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        <CategorySection
                            data={dummyData.categories}
                            selected={selectedCategory}
                            onSelect={setSelectedCategory}
                            handleChange={handleChangeMenu}
                            selectedMenuType={selectedMenu}
                        />
                        <PopularSection
                            data={popularMeals}
                        />
                        <RecommendedSection
                            data={recommendedMeals}
                        />
                        <MenuList
                            selectedMenuType={selectedMenu}
                            setSelectedMenu={setSelectedMenu}
                            handleChangeCategory={handleChangeMenu}
                            selectedCategoryId={selectedCategory}
                        />
                    </View>
                }
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