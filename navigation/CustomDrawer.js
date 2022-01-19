import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { MainLayout } from '../screens'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'
import Animated from 'react-native-reanimated'
import { connect } from 'react-redux'
import { setSelectedTab } from '../app/Sidebar/TabActions'
import { bindActionCreators } from 'redux'

const Drawer = createDrawerNavigator();

const CustomDrawerItem = (props) => {
    const {label, icon, isSelected, onPress} = {...props}
    return(
        <TouchableOpacity
            opacity={0.6}
            style={{ flexDirection: 'row', height: 40, marginBottom: SIZES.base, alignItems: 'center', paddingLeft: SIZES.radius, borderRadius: SIZES.base, 
                backgroundColor: isSelected ? COLORS.transparentBlack1 : null }}
            onPress={() => onPress()}
        >
            <Image source={icon} style={{ height: 20, width: 20, tintColor: COLORS.white }} />
            <Text style={{ marginLeft: 15, color: COLORS.white, ...FONTS.h3 }}>{label}</Text>
        </TouchableOpacity>
    )
}

const CustomDrawerContent = (props) => {
    const { navigation, selectedTab, setSelectedTab } = {...props};
    return (
        <DrawerContentScrollView
            scrollEnabled={true}
            contentContainerStyle={{ flex: 1 }}
        >
            <View style={{ flex: 1, paddingHorizontal: SIZES.radius }}>
                <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => navigation.closeDrawer()}
                    >
                        <Image source={icons.cross} style={{height: 35, width: 35, tintColor: COLORS.white}} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={{ flexDirection: 'row', marginTop: SIZES.radius, alignItems: 'center' }}
                    onPress={() => navigation.navigate("Profile")}
                >
                    <Image source={dummyData.myProfile?.profile_image} style={{ height: 50, width: 50, borderRadius: SIZES.radius }} />
                    <View style={{ marginLeft: SIZES.radius }}>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{dummyData.myProfile?.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>View Your Profile</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flex: 1, marginTop: SIZES.padding }}>
                    <CustomDrawerItem
                        label={constants.screens.home}
                        icon={icons.home}
                        isSelected={ selectedTab === constants.screens.home }
                        onPress={() => {
                            setSelectedTab(constants.screens.home)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem
                        label={constants.screens.my_wallet}
                        icon={icons.wallet}
                        isSelected={ selectedTab === constants.screens.my_wallet }
                        onPress={() => {
                            setSelectedTab(constants.screens.my_wallet)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon={icons.notification}
                        isSelected={ selectedTab === constants.screens.notification }
                        onPress={() => {
                            setSelectedTab(constants.screens.notification)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                        isSelected={ selectedTab === constants.screens.favourite }
                        onPress={() => {
                            setSelectedTab(constants.screens.favourite)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <View style={{ height: 1, marginLeft: SIZES.radius, marginVertical: SIZES.radius, backgroundColor: COLORS.lightGray1 }} />
                    <CustomDrawerItem
                        label={constants.screens.track}
                        icon={icons.location}
                        isSelected={ selectedTab === constants.screens.track }
                        onPress={() => {
                            setSelectedTab(constants.screens.track)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem
                        label={constants.screens.coupons}
                        icon={icons.coupon}
                        isSelected={ selectedTab === constants.screens.coupons }
                        onPress={() => {
                            setSelectedTab(constants.screens.coupons)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem
                        label={constants.screens.settings}
                        icon={icons.setting}
                        isSelected={ selectedTab === constants.screens.settings }
                        onPress={() => {
                            setSelectedTab(constants.screens.settings)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem
                        label={constants.screens.invite}
                        icon={icons.profile}
                        isSelected={ selectedTab === constants.screens.invite }
                        onPress={() => {
                            setSelectedTab(constants.screens.invite)
                            navigation.navigate("MainLayout")
                        }}
                    />
                    <CustomDrawerItem
                        label={constants.screens.help}
                        icon={icons.help}
                        isSelected={ selectedTab === constants.screens.help }
                        onPress={() => {
                            setSelectedTab(constants.screens.help)
                            navigation.navigate("MainLayout")
                        }}
                    />
                </View>
                <View
                    style={{ marginBottom: SIZES.padding }}
                >
                    <CustomDrawerItem
                        label="Logout"
                        icon={icons.logout}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    )
}

const CustomDrawer = (props) => {
    const { selectedTab, setSelectedTab } = {...props}
    const [progress, setProgress] = useState(new Animated.Value(0))
    const scale = Animated.interpolateNode(progress, {
        inputRange: [0,1],
        outputRange: [1, 0.8]
    })
    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [0,1],
        outputRange: [1, 26]
    })
    const animatedStyle = { borderRadius, transform: [{ scale }] }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <Drawer.Navigator
                drawerType="slide"
                overlayColor="transparent"
                drawerStyle={{ flex: 1, width: '65%', paddingRight: 20, backgroundColor: 'transparent' }}
                sceneContainerStyle={{ backgroundColor: 'transparent' }}
                initialRouteName="MainLayout"
                drawerContent={props => {
                    setTimeout(() => {
                        setProgress(props.progress);
                    }, 0)
                    return(
                        <CustomDrawerContent 
                            navigation={props.navigation}
                            setSelectedTab={setSelectedTab}
                            selectedTab={selectedTab}
                        />
                    )
                }}
            >
                <Drawer.Screen name="MainLayout">
                    {props => <MainLayout {...props} drawerAnimationStyle={animatedStyle} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}

function mapStateToProps(state){
    return{
        selectedTab: state.tabs.selectedtab
    }
}

function mapDispatchToProps(dispatch){
    return{
        setSelectedTab: (selectedTab) => {return dispatch(setSelectedTab(selectedTab))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
