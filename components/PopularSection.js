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
                            containerStyle={{ height: 180, width: SIZES.width*0.85, marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == data.length - 1 ? SIZES.padding : 0, paddingRight: SIZES.radius, alignItems: 'center' }}
                            imageStyle={{ height: 150, width: 150, marginTop: 35 }}
                            item={item}
                            onPress={() => console.log('FoodRecommended')}
                        />
                    )
                }}
            />
        </View>
    );
};

export default PopularSection;
