import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';
import { SearchComponent } from '../../components';
import { FONTS, SIZES, icons, dummyData, COLORS } from '../../constants';

const Home = () => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <SearchComponent />
               
        </View>
    )
}

export default Home;