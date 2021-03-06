import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { FONTS, SIZES, COLORS } from '../../constants';

const FormInput = (props) => {
  const { containerStyle, inputContainerStyle, label, placeholder, inputStyle, prependComponent, appendComponent, onChange, secureTextEntry,
    keyboardType="default", autoCompleteType="off", autoCapitalize="none", errorMsg="", value="", maxLength } = {...props}

    return (
        <View style={{ ...containerStyle }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
                <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
            </View>
            <View
                style={{ flexDirection: 'row', height: 55, paddingHorizontal: SIZES.padding, 
                    marginTop: SIZES.base, borderRadius: SIZES.radius, backgroundColor: COLORS.lightGray2,
                    ...inputContainerStyle 
                }}
            >
                {prependComponent}
                <TextInput
                    style={{ flex: 1, color: COLORS.black, ...inputStyle }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    onChangeText={(text) => onChange(text)}
                    value={value} // Value added for Card, Check for Auth
                    maxLength={maxLength}
                />
                {appendComponent}
            </View>
        </View>
    );
};

export default FormInput;
