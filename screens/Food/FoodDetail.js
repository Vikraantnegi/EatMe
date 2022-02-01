import React, { useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Header } from '../../components';
import TextButton from '../../components/Home/TextButton';
import IconButton from '../../components/Food/IconButton';
import IconLabel from '../../components/Food/IconLabel';
import LineDivider from '../../components/Food/LineDivider';
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../../constants';
import Rating from '../../components/Food/Rating';

const FoodDetail = () => {

    const [foodItem, setFooditem] = useState(dummyData.vegBiryani)
    const [selectedSize, setSelectedSize] = useState("")

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
                <View 
                    style={{ marginTop: SIZES.radius, marginBottom: SIZES.padding, paddingHorizontal: SIZES.padding }}
                >
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

                    <View
                        style={{ marginTop: SIZES.padding }}
                    >
                        <Text style={{ color: COLORS.black, ...FONTS.h1 }}>{foodItem?.name}</Text>
                        <Text style={{ color: COLORS.darkGray, marginTop: SIZES.base, textAlign: 'justify', ...FONTS.body3 }}>{foodItem?.description}</Text>
                    </View>

                    <View
                        style={{ marginTop: SIZES.padding, flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <IconLabel
                            containerStyle={{ backgroundColor: COLORS.primary }}
                            icon={icons.star}
                            label="4.5"
                            labelStyle={{ color: COLORS.white }}
                        />
                        <IconLabel
                            containerStyle={{ marginLeft: SIZES.radius, paddingHorizontal: 0 }}
                            icon={icons.clock}
                            iconStyle={{ tintColor: COLORS.black }}
                            label="30 mins"
                            labelStyle={{ color: COLORS.black }}
                        />
                        <IconLabel
                            containerStyle={{ marginLeft: SIZES.radius, paddingHorizontal: 0 }}
                            icon={icons.dollar}
                            iconStyle={{ tintColor: COLORS.black }}
                            label="Free Shipping"
                            labelStyle={{ color: COLORS.black }}
                        />
                    </View>
                    <View
                        style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}
                    >
                        <Text style={{ ...FONTS.h3, color: COLORS.black }}>Sizes: </Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: SIZES.padding }}>
                            {dummyData.sizes.map((item, index) => {
                                return (
                                    <TextButton
                                        key={`sizes-${index}`}
                                        buttonContainerStyle={{ width: 55, height: 55, margin: SIZES.base, borderWidth: 1, borderRadius: SIZES.radius, 
                                            borderColor: selectedSize === item.id ? COLORS.primary : COLORS.gray2, backgroundColor: selectedSize === item.id ? COLORS.primary : null 
                                        }}
                                        label={item.label}
                                        labelStyle={{ color: selectedSize === item.id ? COLORS.white : COLORS.gray2, ...FONTS.body2 }}
                                        onPress={() => setSelectedSize(item.id)}
                                    />
                                );
                            })}
                        </View>
                    </View>
                </View>

                <LineDivider />

                <View
                    style={{ flexDirection: 'row', marginVertical: SIZES.padding, paddingHorizontal: SIZES.padding, alignItems: 'center' }}
                >
                    <Image source={images.profile} style={{ width: 50, height: 50, borderRadius: SIZES.radius }} />
                    <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: 'center' }}>
                        <Text style={{ ...FONTS.h3, color: COLORS.black }}>Totoya Food</Text>
                        <Text style={{ ...FONTS.body4, color: COLORS.gray }}>1.2 km away from you</Text>
                    </View>
                    <Rating
                        rating={4}
                        iconStyle={{ marginLeft: 3 }}
                    />
                </View>
            </ScrollView>

            <LineDivider />

            <View style={{ flexDirection: 'row', height: 120, alignItems: 'center', paddingHorizontal: SIZES.padding, paddingBottom: SIZES.radius }}>
                
            </View>
        </View>
    )
}

export default FoodDetail;