import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { SearchComponent, FoodCard, MenuList, RecommendedSection, PopularSection, CategorySection, FilterModal } from '../../components';
import { FONTS, SIZES, icons, dummyData, COLORS } from '../../constants';

const Home = () => {

    const [selectedCategory, setSelectedCategory] = useState(1)
    const [selectedMenu, setSelectedMenu] = useState(1)
    const [recommendedMeals, setRecommended] = useState([])
    const [popularMeals, setPopular] = useState([])
    const [menuList, setMenuList] = useState([])
    const [showFilterModal, setShowFilter] = useState(false);

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

    const deliveryHeader = () => {
        return(
            <View
                style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}
            >
                <Text
                    style={{ color: COLORS.primary, ...FONTS.body3 }}
                >
                    DELIVERY TO
                </Text>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={{ flexDirection: 'row', marginTop: SIZES.base, alignItems: 'center' }}
                >
                    <Text style={{ color: COLORS.black, ...FONTS.h3 }} >{ dummyData.myProfile.address }</Text>
                    <Image source={icons.down_arrow} style={{ marginLeft: SIZES.base, height: 20, width: 20 }} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View
            style={{ flex: 1 }}
        >
            <SearchComponent onOpen={() => setShowFilter(true)} />
            {
                showFilterModal &&             
                    <FilterModal
                        isVisible={showFilterModal}
                        onClose={() => setShowFilter(false)}
                    />
            }
            <FlatList
                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {deliveryHeader()}
                        <CategorySection
                            data={dummyData.categories}
                            selected={selectedCategory}
                            onSelect={setSelectedCategory}
                            handleChange={handleChangeMenu}
                            selectedMenuType={selectedMenu}
                        />
                        {popularMeals.length > 0 &&
                            <PopularSection
                                data={popularMeals}
                            />
                        }
                        {recommendedMeals.length > 0 &&
                            <RecommendedSection
                                data={recommendedMeals}
                            />
                        }
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
                ListFooterComponent={
                    <View style={{ height: 200 }} />
                }
            />
        </View>
    )
}

export default Home;