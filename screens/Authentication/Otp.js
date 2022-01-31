import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AuthLayout from '../../components/Auth/AuthLayout';
import { COLORS, FONTS, SIZES } from '../../constants';
import TextButton from '../../components/Home/TextButton';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Otp = (props) => {

    const [timer, setTimer] = useState(120)
    useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prev => {
                if(prev > 0){
                    return prev - 1;
                } else{
                    return prev;
                }
            })
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <AuthLayout
            title="OTP Authentication"
            subTitle="An authentication code has been sent!"
            titleContainerStyle={{ marginTop: SIZES.padding*2 }}
        >
            <View
                style={{ flex: 1, marginTop: SIZES.padding*2 }}
            >
                <OTPInputView
                    pinCount={4}
                    style={{ width: '100%', height: 50 }}
                    codeInputFieldStyle={{ width: 65, height: 65, borderRadius: SIZES.radius, backgroundColor: COLORS.lightGray2, color: COLORS.black, ...FONTS.h3 }}
                    onCodeFilled={(code) => {
                        console.log(code)
                    }}
                />

                <View
                    style={{ flexDirection: 'row', justifyContent: 'center', marginTop: SIZES.padding }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }} >Didn't receive the code?</Text>
                    <TextButton
                        label={`Resend (${timer}s)`}
                        disabled={!(timer === 0)}
                        buttonContainerStyle={{ marginLeft: SIZES.base, backgroundColor: null }}
                        labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
                        onPress={() => setTimer(120)}
                    />
                </View>
            </View>
            <View>
                <TextButton
                    label="Continue"
                    buttonContainerStyle={{ height: 50, alignItems: 'center', borderRadius: SIZES.radius, backgroundColor: COLORS.primary }}
                    onPress={() => props.navigation.navigate('Home')}
                />
                <View
                    style={{ marginTop: SIZES.padding, alignItems: 'center' }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>By signing up, you agree to our</Text>
                    <TextButton
                        label="Terms and Conditions"
                        buttonContainerStyle={{ backgroundColor: null }}
                        labelStyle={{ color: COLORS.primary, ...FONTS.body3 }}
                        onPress={() => console.log('T&C')}
                    />
                </View>
            </View>
        </AuthLayout>
    )
}

export default Otp;