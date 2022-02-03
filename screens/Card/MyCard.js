import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { COLORS, dummyData, icons, SIZES } from '../../constants';
import { Header } from '../../components';
import IconButton from '../../components/Food/IconButton';
import CardItem from '../../components/Card/CardItem';

const MyCard = ({ navigation }) => {

    const [ selectedCard, setSelectedCard ] = useState(null)

    return (
        <View
            style={{ flex: 1, backgroundColor: COLORS.white }}
        >
            <Header
                title="MY CARDS"
                containerStyle={{ height: 50, marginHorizontal: SIZES.padding, marginTop: 20 }}
                left={
                    <IconButton
                        icon={icons.back}
                        buttonContainerStyle={{ width: 40, height: 40, borderWidth: 1, borderRadius: SIZES.radius, borderColor: COLORS.gray2, backgroundColor: COLORS.white }}
                        iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray2 }}
                        onPress={() => navigation.goBack()}
                    />
                }
                right={
                    <View style={{ width: 40 }} />
                }
            />

            <ScrollView
                contentContainerStyle={{ flexGrow: 1, marginTop: SIZES.radius, paddingHorizontal: SIZES.padding, paddingBottom: SIZES.radius }}
            >
                {dummyData.myCards.map((item, index) => {
                    return (
                        <CardItem
                            key={`MyCard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` === `MyCard-${item.id}`}
                            onPress={() => setSelectedCard({...item, key: 'MyCard'})}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
};

export default MyCard;
