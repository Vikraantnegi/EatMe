import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import { COLORS } from '../../constants';

const Checkout = ({ navigation, route }) => {

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            <Text style={{ color: COLORS.black }}>Checkout</Text>
        </View>
    )
}

export default Checkout;