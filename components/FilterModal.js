import { View, Animated, Modal, TouchableWithoutFeedback, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { COLORS, constants, FONTS, icons, SIZES } from '../constants';
import TwoPointSlider from './TwoPointSlider';
import TextButton from './TextButton';

const FilterModal = (props) => {
    const { isVisible, onClose } = {...props}
    const [showFilterModal, setFilterModal] = useState(isVisible)
    const [deliveryTime, setTime] = useState(0);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        }).start(() => onClose());
    };

    useEffect(() => {
        if(showFilterModal){
            fadeIn()
        } else{
            fadeOut()
        }
    }, [showFilterModal])

    const modalHeight = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height + 30, SIZES.height - 600]
    })

    const FilterSection = (props) => {
        const { containerStyle, title, children } = {...props};
        return(
            <View
                style={{ marginTop: SIZES.padding, ...containerStyle }}
            >
                <Text style={{ ...FONTS.h3, color: COLORS.black }}>{title}</Text>
                {children}
            </View>
        )
    }
    
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View
                style={{ flex: 1, backgroundColor: COLORS.transparentBlack7 }}
            >
                <TouchableWithoutFeedback
                    onPress={() => setFilterModal(false)}
                >
                    <View
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                    />
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{ position: 'absolute', left: 0, top: modalHeight, width: '100%', height: '100%', padding: SIZES.padding, 
                        borderTopRightRadius: SIZES.radius, borderTopLeftRadius: SIZES.radius, backgroundColor: COLORS.white 
                    }}
                >
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                        <Text
                            style={{ flex: 1, ...FONTS.h3, fontSize: 18, color: COLORS.black }}
                        >
                            Filter Your Search
                        </Text>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={{ borderWidth: 2, borderRadius: 10, borderColor: COLORS.gray2 }}
                            onPress={() => setFilterModal(false)}
                        >
                            <Image
                                source={icons.cross}
                                style={{ width: 30, height: 30, tintColor: COLORS.gray2 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 250 }}
                    >
                        <FilterSection
                            title="Distance"
                        >
                            <View
                                style={{ alignItems: 'center' }}
                            >
                                <TwoPointSlider
                                    values={[3,10]}
                                    min={1}
                                    max={20}
                                    postfix="km"
                                    onValuesChange={(values) => console.log(values)}
                                />
                            </View>
                        </FilterSection>

                        <FilterSection
                            title="Delivery Time"
                            containerStyle={{ marginTop: 40 }}
                        >
                            <View
                                style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: SIZES.radius }}
                            >
                                {constants.delivery_time.map((item, index) => {
                                    return(
                                        <TextButton
                                            key={`delivery-time-${index}`}
                                            label={item.label}
                                            labelStyle={{ color: item.id == deliveryTime ? COLORS.white : COLORS.gray, ...FONTS.body3 }}
                                            buttonContainerStyle={{ width: "30%", height: 50, margin: 5, alignItems: 'center', borderRadius: SIZES.base,
                                                backgroundColor: deliveryTime == item.id ? COLORS.primary : COLORS.lightGray2
                                            }}
                                            onPress={() => setDeliveryTime(item.id)}
                                        />
                                    )
                                })}
                            </View>
                        </FilterSection>

                        <FilterSection
                            title="Pricing Range"
                        >
                            <View
                                style={{ alignItems: 'center' }}
                            >
                                <TwoPointSlider
                                    values={[10, 50]}
                                    min={1}
                                    max={100}
                                    prefix="$"
                                    postfix=""
                                    onValuesChange={(values) => console.log(values)}
                                />
                            </View>
                        </FilterSection>

                        <FilterSection
                            title="Rating"
                        >
                            <View
                                
                            >

                            </View>
                        </FilterSection>

                        <FilterSection
                            title="Tags"
                        >
                            <View
                                
                            >

                            </View>
                        </FilterSection>
                    </ScrollView>
                </Animated.View>
            </View>
        </Modal>
    );
};

export default FilterModal;
