import { View, Text, FlatList } from 'react-native';
import React from 'react';
import SectionHeader from './SectionHeader';
import FoodCard2 from './FoodCard2';
import { SIZES } from '../constants';

const PopularSection = (props) => {
    const { data } = {...props}
    return (
        <View>
            <SectionHeader
                title="Popular Near You"
                onPress={() => console.log('Show all Popular')}
            />
            <FlatList
                data={data}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                    return(
                        <FoodCard2
                            containerStyle={{ marginLeft: index == 0 ? SIZES.padding : 18, marginRight: index == data.length - 1 ? SIZES.padding : 0 }}
                            item={item}
                            onPress={() => console.log('Popular')}
                        />
                    )
                }}
            />
        </View>
    );
};

export default PopularSection;
