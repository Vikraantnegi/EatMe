import React from 'react';
import { View, Text } from 'react-native';
import { AuthLayout } from './AuthLayout';

const SignIn = () => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <AuthLayout
                title="Let's Sign You In"
                subTitle=""
                titleContainerStyle={{  }}
            >

            </AuthLayout>
        </View>
    )
}

export default SignIn;