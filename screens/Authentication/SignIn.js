import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AuthLayout from '../../components/Auth/AuthLayout';
import CustomSwitch from '../../components/Auth/CustomSwitch';
import FormInput from '../../components/Auth/FormInput';
import TextButton from '../../components/Home/TextButton'
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { utils } from '../../utils'

const SignIn = (props) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ showPass, setShowPass ] = useState(false)
    const [ saveMe, setSave ] = useState(false)

    return (
        <AuthLayout
            title="Let's Sign You In"
            subTitle="Welcome back, You've been missed!"
        >
            <View
                style={{ flex: 1, marginTop: SIZES.padding*2 }}
            >
                <FormInput
                    label="Email"
                    value={email}
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={ email == "" || (email != "" && emailError == "") ? icons.correct : icons.cross } style={{ height: 20, width: 20, tintColor: email === "" ? COLORS.gray : (email !== "" && emailError == "") ? COLORS.green : COLORS.red }} />
                        </View>
                    }
                />

                <FormInput
                    label="Password"
                    value={password}
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{ marginTop: SIZES.radius }}
                    onChange={(value) => setPassword(value)}
                    appendComponent={
                        <TouchableOpacity 
                            style={{ width: 40, alignItems: 'flex-end', justifyContent: 'center' }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image source={!showPass ? icons.eye_close : icons.eye} style={{ height: 20, width: 20, tintColor: COLORS.gray }} />
                        </TouchableOpacity>
                    }
                />

                <View style={{ flexDirection: 'row', marginTop: SIZES.radius, justifyContent: 'space-between', alignItems: 'center' }}>
                    <CustomSwitch
                        value={saveMe}
                        onChange={() => setSave(!saveMe)}
                    />
                    <TextButton
                        label="Forgot Password ?"
                        buttonContainerStyle={{ backgroundColor: null }}
                        labelStyle={{ color: COLORS.gray, ...FONTS.body4 }}
                        onPress={() => props.navigation.navigate('ForgotPassword')}
                    />
                </View>

                <TextButton
                    label="Sign In"
                    disabled={!(email !== "" && password !== "" && emailError === "")}
                    buttonContainerStyle={{ height: 55, alignItems: 'center', marginTop: SIZES.padding, borderRadius: SIZES.radius,
                        backgroundColor: !(email !== "" && password !== "" && emailError === "") ? COLORS.transparentPrimary : COLORS.primary 
                    }}
                    labelStyle={{ ...FONTS.body4 }}
                    onPress={() => props.navigation.navigate('Home')}
                />

                <View
                    style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: SIZES.radius }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Don't have an account? </Text>
                    <TextButton 
                        label="Sign Up!"
                        buttonContainerStyle={{ backgroundColor: null }}
                        labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
                        onPress={() => props.navigation.navigate('SignUp')}
                    />
                </View>
                <TextButton
                    label="Continue with Facebook"
                    buttonContainerStyle={{ height: 50, alignItems: 'center', borderRadius: SIZES.radius, backgroundColor: COLORS.blue }}
                    labelStyle={{ marginLeft: SIZES.radius, color: COLORS.white }}
                    icon={icons.fb}
                    iconPosition="Left"
                    iconStyle={{ tintColor: COLORS.white }}
                    onPress={() => console.log("Facebook")}
                />
                <TextButton
                    label="Continue with Google"
                    buttonContainerStyle={{ height: 50, alignItems: 'center', borderRadius: SIZES.radius, marginTop: SIZES.radius, backgroundColor: COLORS.lightGray2 }}
                    labelStyle={{ marginLeft: SIZES.radius, color: COLORS.black }}
                    icon={icons.google}
                    iconPosition="Left"
                    iconStyle={{ tintColor: null }}
                    onPress={() => console.log("Google")}
                />
            </View>
        </AuthLayout>
    )
}

export default SignIn;