import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AuthLayout from '../../components/Auth/AuthLayout';
import FormInput from '../../components/Auth/FormInput';
import { COLORS, icons, SIZES } from '../../constants';
import { utils } from '../../utils'

const SignIn = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ emailError, setEmailError ] = useState('')
    const [ showPass, setShowPass ] = useState(false)

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
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View style={{ justifyContent: 'center' }}>
                            <Image source={ email === "" || (email !== "" || emailError == "") ? icons.correct : icons.cros } style={{ height: 20, width: 20, tintColor: email === "" || (email !== "" || emailError == "") ? COLORS.green : COLORS.red }} />
                        </View>
                    }
                />
            </View>
        </AuthLayout>
    )
}

export default SignIn;