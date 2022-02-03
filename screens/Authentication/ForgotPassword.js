import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import TextButton from '../../components/Home/TextButton';
import AuthLayout from '../../components/Auth/AuthLayout';
import { utils } from '../../utils'

const ForgotPassword = () => {
    
    const [ email, setEmail ] = useState('')
    const [ emailError, setEmailError ] = useState('')

    return (
        <AuthLayout
            title="Password Recovery"
            subTitle="Please enter your email address to recover your password"
            titleContainerStyle={{ marginTop: SIZES.padding*2 }}
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
                            <Image source={ email == "" || (email != "" && emailError == "") ? icons.correct : icons.cross } 
                                style={{ height: 20, width: 20, 
                                    tintColor: email === "" ? COLORS.gray : (email !== "" && emailError == "") ? COLORS.green : COLORS.red
                                }}  
                            />
                        </View>
                    }
                />
            </View>

            <TextButton
                disabled={!(email !="" && emailError == "")}
                label="Send Email"
                buttonContainerStyle={{ height: 55, alignItems: 'center', borderRadius: SIZES.radius, backgroundColor: !(email !="" && emailError == "") ? COLORS.primary : COLORS.transparentPrimary, marginTop: SIZES.padding }}
                onPress={() => props.navigation.goBack()}
            />
        </AuthLayout>
    )
}

export default ForgotPassword;