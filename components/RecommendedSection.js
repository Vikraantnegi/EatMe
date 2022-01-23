import { View, Text, FlatList } from 'react-native';
import React from 'react';
import SectionHeader from './SectionHeader';
import FoodCard from './FoodCard';
import { SIZES } from '../constants';

const RecommendedSection = (props) => {
    const { data } = {...props}
    return (
        <View>
            <SectionHeader
                title="Recommended"
                onPress={() => console.log('Show all Recommended')}
            />
            <FlatList
                data={data}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => {
                    return(
                        <FoodCard
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

export default RecommendedSection;
