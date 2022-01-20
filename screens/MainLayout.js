import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../app/Sidebar/TabActions';
import { Home, Search, CartTab, Favourite, Notification } from '../screens';
import { COLORS, FONTS, SIZES, icons, constants, dummyData  } from '../constants';
import { Header } from '../components'

const MainLayout = (props) => {
    const { drawerAnimationStyle, navigation, selectedTab, setSelectedTab } = {...props}

    useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, [])

    return (
        <Animated.View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                ...drawerAnimationStyle
            }}
        >
            <Header
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center'
                }}
                title={selectedTab.toUpperCase()}
                navigation={navigation}
            />
            <View
                style={{ flex: 1 }}
            >
                <Text style={{color: COLORS.black}}>Main Layout</Text>
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