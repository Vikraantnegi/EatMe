import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { COLORS, icons, SIZES, FONTS, constants } from '../../constants';
import Header from '../../components/Home/Header'
import IconButton from '../../components/Food/IconButton';
import LineDivider from '../../components/Food/LineDivider';


const DeliveryStatus = ({ navigation }) => {
    const [current, setCurrent] = useState(0)
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
            
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingHorizontal: SIZES.padding }}>
                    <Text style={{ ...FONTS.h3 }}>Track Order</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>HR01001</Text>
                </View>
                <LineDivider lineStyle={{ backgroundColor: COLORS.lightGray2 }} />
                <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                    {constants.track_order_status.map((item, index) => {
                        return (
                            <View key={`status-${index}`}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: -5 }}>
                                    <Image
                                        source={icons.check_circle}
                                        style={{ width: 40, height: 40, tintColor: index <= current ? COLORS.primary : COLORS.lightGray1 }}
                                    />
                                    <View style={{ marginLeft: SIZES.radius }}>
                                        <Text style={{ color: COLORS.black, ...FONTS.h3 }}>{item.title}</Text>
                                        <Text style={{ color: COLORS.gray, ...FONTS.b4 }}></Text>
                                    </View>
                                    {
                                        index < constants.track_order_status.length - 1 && <View>
                                            { index < current && <View style={{ height: 50, width: 3, marginLeft: 18, backgroundColor: COLORS.primary, zIndex: -1 }} /> }
                                            { index >= current && <Image source={icons.dotted_line} resizeMode='cover' style={{ height: 50, width: 4, marginLeft: 17 }} /> }
                                        </View>
                                    }
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

export default DeliveryStatus;