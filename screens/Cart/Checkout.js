import React, { useState } from 'react';
import { View, Text, } from 'react-native';
import { Header } from '../../components';
import CardItem from '../../components/Card/CardItem';
import BillingComponent from '../../components/Cart/BillingComponent';
import IconButton from '../../components/Food/IconButton';
import { COLORS, dummyData, icons, SIZES } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Checkout = ({ navigation, route }) => {
    const [ selectedCard, setSelectedCard ] = useState(route.params.selectedCard)

    return (
        <View
            style={{ flex: 1, backgroundColor: COLORS.white }}
        >
            <Header
                title="CHECKOUT"
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
            <KeyboardAwareScrollView
                keyboardDismissMode='on-drag'
                extraScrollHeight={-200}
                contentContainerStyle={{ flexGrow: 1, paddingHorizontal: SIZES.padding, paddingBottom: 20 }}
            >
                {selectedCard && dummyData.myCards.map((item, index) => {
                    return (
                        <CardItem
                            key={`MyCard-${item.id}`}
                            item={item}
                            isSelected={`${selectedCard?.key}-${selectedCard?.id}` === `MyCard-${item.id}`}
                            onPress={() => setSelectedCard({...item, key: 'MyCard'})}
                        />
                    )
                })}
            </KeyboardAwareScrollView>
            
            <BillingComponent
                subTotal={37.97}
                shippingFee={0.00}
                onPress={() => navigation.navigate('MyCard')}
            />
        </View>
    )
}

export default Checkout;