import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Image, FlatList } from 'react-native';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../app/Sidebar/TabActions';
import { Home, Search, Cart, Favourite, Notification } from '../screens';
import { COLORS, SIZES, icons, constants, dummyData  } from '../constants';
import { Header, TabButton } from '../components'
import LinearGradient from 'react-native-linear-gradient'

const MainLayout = (props) => {
    const { drawerAnimationStyle, navigation, selectedTab, setSelectedTab } = {...props}
    const flatlistRef = useRef();

    useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, [])

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                ...drawerAnimationStyle
            }}
        >
            <Header
                containerStyle={{ height: 50, paddingHorizontal: SIZES.padding, marginTop: 20, alignItems: 'center' }}
                title={selectedTab.toUpperCase()}
                left={
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: COLORS.gray2, borderRadius: SIZES.radius }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image source={ icons.menu } />
                    </TouchableOpacity>
                }
                right={
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={{ width: 40, height: 40, borderRadius: SIZES.radius }}
                        onPress={() => navigation.navigate("Profile")}
                    >
                        <Image source={dummyData.myProfile?.profile_image} style={{ height: 50, width: 50, borderRadius: SIZES.radius }} />
                    </TouchableOpacity>
                }
            />

            <View
                style={{ flex: 1 }}
            >
                <FlatList
                    ref={flatlistRef}
                    horizontal
                    scrollEnabled={false}
                    snapToAlignment='center'
                    snapToInterval={SIZES.width}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item, index}) => {
                        return (
                            <View
                                style={{ height: SIZES.height, width: SIZES.width }}
                            >
                                {item.label == constants.screens.home && <Home />}
                                {item.label == constants.screens.search && <Search />}
                                {item.label == constants.screens.cart && <Cart />}
                                {item.label == constants.screens.favourite && <Favourite />}
                                {item.label == constants.screens.notification && <Notification />}
                            </View>
                        )
                    }}
                />
            </View>

            {/* Footer */}
            <View
                style={{ height: 100, justifyContent: 'flex-end' }}
            >
                <LinearGradient
                    start={{ x:0, y: 0 }}
                    end={{ x: 0, y: 4 }}
                    colors={[ COLORS.transparent, COLORS.lightGray1 ]}
                    style={{ position: 'absolute', top: -20, left: 0, right: 0, height: 100, borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
                />
                <View
                    style={{ flex: 1, flexDirection: 'row', paddingHorizontal: SIZES.radius, paddingBottom: 10, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: COLORS.white }}
                >
                    <TabButton 
                        label={constants.screens.home}
                        icon={icons.home}
                        isSelected={selectedTab === constants.screens.home}
                        onPress={() => setSelectedTab(constants.screens.home)}
                        flatlistRef={flatlistRef}
                        tabId={0}
                    />
                    <TabButton 
                        label={constants.screens.search}
                        icon={icons.search}
                        isSelected={selectedTab === constants.screens.search}
                        onPress={() => setSelectedTab(constants.screens.search)}
                        flatlistRef={flatlistRef}
                        tabId={1}
                    />
                    <TabButton 
                        label={constants.screens.cart}
                        icon={icons.cart}
                        isSelected={selectedTab === constants.screens.cart}
                        onPress={() => setSelectedTab(constants.screens.cart)}
                        flatlistRef={flatlistRef}
                        tabId={2}
                    />
                    <TabButton 
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        isSelected={selectedTab === constants.screens.favourite}
                        onPress={() => setSelectedTab(constants.screens.favourite)}
                        flatlistRef={flatlistRef}
                        tabId={3}
                    />
                    <TabButton 
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isSelected={selectedTab === constants.screens.notification}
                        onPress={() => setSelectedTab(constants.screens.notification)}
                        flatlistRef={flatlistRef}
                        tabId={4}
                    />
                </View>
            </View>
        </Animated.View>
    )
}

function mapStateToProps(state){
    return {
        selectedTab: state.tabs.selectedTab
    }
}

function mapDispatchToProps(dispatch){
    return {
        setSelectedTab: (selectedTab) => dispatch(setSelectedTab(selectedTab))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);