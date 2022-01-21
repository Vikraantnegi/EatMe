import React from 'react';
import { View, Text } from 'react-native';

const Notification = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text style={{ color: 'black' }}>Notification</Text>
        </View>
    )
}

export default Notification;