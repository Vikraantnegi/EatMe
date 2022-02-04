import React, { useEffect } from 'react';
import { View, Text, Image, BackHandler } from 'react-native';
import { COLORS, FONTS, icons, images, SIZES } from '../../constants'
import TextButton from '../../components/Home/TextButton';

const Success = ({ navigation }) => {

    useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            return true
        })
        return () => backHandler.remove()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white, paddingHorizontal: SIZES.padding }}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={images.success} style={{ width: 150, height: 150 }} />
                <Text style={{ color: COLORS.black, ...FONTS.h1, marginTop: SIZES.padding }}>Congratulations!</Text>
                <Text style={{ color: COLORS.darkGray, ...FONTS.body3, textAlign: 'center', marginTop: SIZES.base }}>Payment was successfully made!</Text>
            </View>
            <TextButton
                label="Done"
                buttonContainerStyle={{ height: 55, marginBottom: SIZES.padding, borderRadius: SIZES.radius }}
                onPress={() => navigation.navigate('DeliveryStatus')}
            />
        </View>
    )
}

export default Success