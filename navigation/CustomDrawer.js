import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { MainLayout } from '../screens'
import { COLORS, FONTS, SIZES, constants, icons, dummyData } from '../constants'
import Animated from 'react-native-reanimated'
import { connect } from 'react-redux'
import { setSelectedTab } from '../app/Tabs/TabActions'
import { bindActionCreators } from 'redux'

const Drawer = createDrawerNavigator();

const CustomDrawerItem = (props) => {
    const {label, icon, isSelected, onPress} = {...props}
    return(
        <TouchableOpacity
            opacity={0.6}
            style={{ flexDirection: 'row', height: 40, marginBottom: SIZES.base, alignItems: 'center', paddingLeft: SIZES.radius, borderRadius: SIZES.base, 
                backgroundColor: isSelected ? COLORS.transparentBlack1 : nul }}
            onPress={() => onPress}
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
                    onPress={() => console.log('Profile')}
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
                    />
                    <CustomDrawerItem
                        label={constants.screens.notification}
                        icon={icons.notification}
                    />
                    <CustomDrawerItem
                        label={constants.screens.favourite}
                        icon={icons.favourite}
                    />
                    <View style={{ height: 1, marginLeft: SIZES.radius, marginVertical: SIZES.radius, backgroundColor: COLORS.lightGray1 }} />
                    <CustomDrawerItem
                        label="Track Your Order"
                        icon={icons.location}
                    />
                    <CustomDrawerItem
                        label="Coupons"
                        icon={icons.coupon}
                    />
                    <CustomDrawerItem
                        label="Settings"
                        icon={icons.setting}
                    />
                    <CustomDrawerItem
                        label="Invite a Friend"
                        icon={icons.profile}
                    />
                    <CustomDrawerItem
                        label="Help Center"
                        icon={icons.help}
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
                            setSelectedTab={props.setSelectedTab}
                            selectedTab={props.selectedTab}
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
