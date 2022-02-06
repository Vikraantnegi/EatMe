import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, icons, SIZES, FONTS } from '../../constants';
import Header from '../../components/Home/Header'
import IconButton from '../../components/Food/IconButton';

const DeliveryStatus = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white}}>
            <Header
                title="DELIVERY STATUS"
                containerStyle={{ height: 50, marginHorizontal: SIZES.padding, marginTop: 20 }}
                left={
                    <IconButton
                        icon={icons.back}
                        buttonContainerStyle={{ width: 40, height: 40, borderWidth: 1, borderRadius: SIZES.radius, borderColor: COLORS.gray2, backgroundColor: COLORS.white }}
                        iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
                        onPress={() => navigation.goBack()}
                    />
                }
                right={
                    <View style={{ width: 40 }} />
                }
            />

            <View style={{ marginTop: SIZES.radius, paddingHorizontal: SIZES.padding }}>
                <Text style={{ textAlign: 'center', color: COLORS.gray, ...FONTS.body4 }}>Estimated Delivery</Text>
                <Text style={{ color: COLORS.black, ...FONTS.h2, textAlign: 'center' }}>05 Feb 2022 / 06:30PM</Text>
            </View>

            
        </View>
    )
}

export default DeliveryStatus;