import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollViewBase, ScrollView } from 'react-native';
import AuthLayout from '../../components/Auth/AuthLayout';
import CustomSwitch from '../../components/Auth/CustomSwitch';
import FormInput from '../../components/Auth/FormInput';
import TextButton from '../../components/Home/TextButton'
import { COLORS, FONTS, icons, SIZES } from '../../constants';
import { utils } from '../../utils'

const SignUp = (props) => {

    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ nameError, setnameError ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')
    const [ showPass, setShowPass ] = useState(false)

    return (
        <AuthLayout
            title="Getting Started"
            subTitle="Create an account to Continue!"
            titleContainerStyle={{ marginTop: SIZES.radius }}
        >
            <ScrollView
                style={{ flex: 1, marginTop: SIZES.radius }}
            >
                <FormInput
                    label="Email"
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
                    label="Username"
                    containerStyle={{ marginTop: SIZES.radius }}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={nameError}
                    appendComponent={
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={ username == "" || (username != "" && nameError == "") ? icons.correct : icons.cross } style={{ height: 20, width: 20, tintColor: username == "" ? COLORS.gray : (username != "" && nameError == "") ? COLORS.green : COLORS.red }} />
                        </View>
                    }
                />

                <FormInput
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{ marginTop: SIZES.radius }}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity 
                            style={{ width: 40, alignItems: 'flex-end', justifyContent: 'center' }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image source={!showPass ? icons.eye_close : icons.eye} style={{ height: 20, width: 20, tintColor: COLORS.gray }} />
                        </TouchableOpacity>
                    }
                />

                <TextButton
                    label="Sign Up"
                    disabled={!(email !== "" && password !== "" && username !="" && emailError === "" && passwordError === "" && nameError === "")}
                    buttonContainerStyle={{ height: 55, alignItems: 'center', marginTop: SIZES.padding, borderRadius: SIZES.radius,
                        backgroundColor: !(email !== "" && password !== "" && username !="" && emailError === "" && passwordError === "" && nameError === "") ? COLORS.transparentPrimary : COLORS.primary 
                    }}
                    labelStyle={{ ...FONTS.body4 }}
                    onPress={() => props.navigation.navigate('Otp')}
                />

                <View
                    style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: SIZES.radius }}
                >
                    <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>Already have an account? </Text>
                    <TextButton 
                        label="Sign In!"
                        buttonContainerStyle={{ backgroundColor: null }}
                        labelStyle={{ color: COLORS.primary, ...FONTS.h3 }}
                        onPress={() => props.navigation.goBack()}
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
            </ScrollView>
        </AuthLayout>
    )
}

export default SignUp;