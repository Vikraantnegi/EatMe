import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Header } from '../../components';
import IconButton from '../../components/IconButton';
import { COLORS, icons, SIZES } from '../../constants';

const FoodDetail = () => {
    return (
        <View 
            style={{ flex: 1, backgroundColor: COLORS.white }}
        >
            <Header
                title="DETAILS"
                containerStyle={{ height: 50, marginHorizontal: SIZES.padding, marginTop: 20 }}
                left={
                    <IconButton 
                        icon={icons.back}
                        buttonContainerStyle={{ width: 40, height: 40, borderWidth: 1, borderRadius: SIZES.radius, borderColor: COLORS.gray2, backgroundColor: COLORS.white }}
                        iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
                        onPress={() => console.log('Back')}
                    />
                }
                right={
                    <IconButton
                        buttonContainerStyle={{ width: 40, height: 40, borderRadius: SIZES.radius, backgroundColor: COLORS.lightOrange2 }}
                        icon={icons.cart}
                        iconStyle={{ width: 20, height: 20, tintColor: COLORS.black }}
                        onPress={() => console.log('Cart')}
                        quantity={3}
                    />
                }
            />

        </View>
    )
}

export default FoodDetail;