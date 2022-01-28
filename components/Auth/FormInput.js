import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { FONTS, SIZES, COLORS } from '../../constants';

const FormInput = (props) => {
  const { containerStyle, label, errorMsg="" } = {...props}

    return (
        <View style={{ ...containerStyle }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
                {errorMsg && <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>}
            </View>
        </View>
    );
};

export default FormInput;
