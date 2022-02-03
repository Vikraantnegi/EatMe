import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { COLORS, dummyData, FONTS, icons, SIZES } from '../../constants';
import { Header } from '../../components';
import IconButton from '../../components/Food/IconButton';
import CardItem from '../../components/Card/CardItem';
import TextButton from '../../components/Home/TextButton';

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

                <View style={{ marginTop: SIZES.padding }}>
                  <Text style={{ color: COLORS.black, ...FONTS.h3 }}>Add New Card</Text>
                  {dummyData.allCards.map((item, index) => {
                      return (
                          <CardItem
                              key={`NewCard-${item.id}`}
                              item={item}
                              isSelected={`${selectedCard?.key}-${selectedCard?.id}` === `NewCard-${item.id}`}
                              onPress={() => setSelectedCard({...item, key: 'NewCard'})}
                          />
                      )
                  })}
                </View>
            </ScrollView>

            <View style={{ paddingTop: SIZES.radius, paddingBottom: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                <TextButton
                    disabled={selectedCard === null}
                    buttonContainerStyle={{ height: 60, borderRadius: SIZES.radius, backgroundColor: selectedCard === null ? COLORS.gray : COLORS.primary }}
                    label={selectedCard?.key === "NewCard" ? "Add" : "Continue"}
                    onPress={() =>  selectedCard?.key === "NewCard" ? navigation.navigate('AddCard', { selectedCard: selectedCard }) : navigation.navigate('Checkout', { selectedCard: selectedCard })}
                />
            </View>
        </View>
    );
};

export default MyCard;
