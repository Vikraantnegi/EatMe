import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Header } from '../../components';
import CardItem from '../../components/Card/CardItem';
import BillingComponent from '../../components/Cart/BillingComponent';
import IconButton from '../../components/Food/IconButton';
import FormInput from '../../components/Auth/FormInput'
import { COLORS, dummyData, icons, SIZES, FONTS } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Checkout = ({ navigation, route }) => {
    const [ selectedCard, setSelectedCard ] = useState(route.params.selectedCard)

    return (
        <View
            style={{ flex: 1, backgroundColor: COLORS.white }}
        >
            <Header
                title="CHECKOUT"
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
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                extraScrollHeight={-200}
                contentContainerStyle={{ flexGrow: 1, paddingHorizontal: SIZES.padding, paddingBottom: 20 }}
            >
                <CardItem
                    key={`MyCard-${selectedCard.id}`}
                    item={selectedCard}
                    isSelected={true}
                />

                <View style={{ marginTop: SIZES.padding }} >
                    <Text style={{ color: COLORS.black, ...FONTS.h3 }}>Delivery Address</Text>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.radius, paddingVertical: SIZES.radius, paddingHorizontal: SIZES.padding, borderWidth: 2, borderRadius: SIZES.radius, borderColor: COLORS.lightGray2 }}
                    >
                        <Image source={icons.location1} style={{ width: 30, height: 30, marginRight: 10 }} />
                        <Text style={{ marginLeft: SIZES.radius, width: '85%', color: COLORS.black, ...FONTS.body3 }}>723, HUDA, Sector 8, Ambala City, Ambala, HR - 134003</Text>
                    </View>
                </View>

                <View style={{ marginTop: SIZES.padding }} >
                    <Text style={{ color: COLORS.black, ...FONTS.h3 }}>Add Coupon</Text>
                    <FormInput
                        inputContainerStyle={{ marginTop: 0, paddingRight: 0, paddingLeft: SIZES.padding, borderWidth: 2, borderColor: COLORS.lightGray2, backgroundColor: COLORS.white, overflow: 'hidden' }}
                        placeholder="Coupon Code"
                        appendComponent={
                            <View style={{ width: 60, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.primary }}>
                                <Image source={icons.discount} style={{ width: 40, height: 40 }} />
                            </View>
                        }
                    />
                </View>
            </KeyboardAwareScrollView>
            
            <BillingComponent
                subTotal={37.97}
                shippingFee={0.00}
                onPress={() => navigation.navigate('MyCard')}
            />
        </View>
    )
}

export default Checkout;