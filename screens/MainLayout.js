import React from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { connect } from 'react-redux';
import { setSelectedTab } from '../app/Sidebar/TabActions';
import { Home, Search, CartTab, Favourite, Notification } from '../screens';
import { COLORS, FONTS, SIZES, icons, constants, dummyData  } from '../constants';
import { Header } from 'react-native/Libraries/NewAppScreen';

const MainLayout = (props) => {
    const { drawerAnimationStyle, navigation, selectedTab, setSelectedTab } = {...props}
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
            <Text style={{color: 'black'}}>Main Layout</Text>
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