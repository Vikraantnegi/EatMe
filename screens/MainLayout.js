import React from 'react';
import {
    View,
    Text
} from 'react-native';

const MainLayout = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={{color: 'black'}}>Main Layout</Text>
        </View>
    )
}

export default MainLayout;