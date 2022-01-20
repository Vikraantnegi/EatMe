import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../app/Sidebar/TabActions';
import { Home, Search, CartTab, Favourite, Notification } from '../screens';
import { COLORS, FONTS, SIZES, icons, constants, dummyData  } from '../constants';
import { Header } from '../components'
import LinearGradient from 'react-native-linear-gradient'

const MainLayout = (props) => {
    const { drawerAnimationStyle, navigation, selectedTab, setSelectedTab } = {...props}

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
                containerStyle={{ height: 50, paddingHorizontal: SIZES.padding, marginTop: 40, aignItems: 'center' }}
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
                <Text style={{color: COLORS.black}}>Main Layout</Text>
            </View>
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