import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';
import { Header } from '../../components';
import IconButton from '../../components/IconButton';
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants';

const FoodDetail = () => {

    const [foodItem, setFooditem] = useState(dummyData.vegBiryani)

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

            <ScrollView>
                <View style={{ marginTop: SIZES.radius, marginBottom: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                    <View
                        style={{ height: 190, borderRadius: 15, backgroundColor: COLORS.lightGray2 }}
                    >
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: SIZES.base, paddingHorizontal: SIZES.radius }}
                        >
                            <View
                                style={{ flexDirection: 'row' }}
                            >
                                <Image
                                    source={icons.calories}
                                    style={{ width: 30, height: 30 }}
                                />
                                <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>{foodItem?.calories}  Calories</Text>
                            </View>

                            <Image
                                source={icons.love}
                                style={{ width: 20, height: 20, tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray }}
                            />
                        </View>

                        <Image
                            source={foodItem?.image}
                            resizeMode='contain'
                            style={{ width: "100%", height: 170 }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default FoodDetail;