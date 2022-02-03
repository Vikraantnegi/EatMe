import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Header } from '../../components';
import IconButton from '../../components/Food/IconButton';
import { COLORS, icons, SIZES, dummyData, FONTS } from '../../constants';
import InputCart from '../../components/Food/InputCart';

const MyCart = ({ navigation }) => {

    const [myCartList, setMyCart] = useState(dummyData.myCart)

    const updateQuantity = (newQty, id) => {
        let newCartList = myCartList.map( item => (
            item.id === id ? { ...item, qty: newQty } : item
        ))
        setMyCart(newCartList)
    }

    const removeCart = (id) => {
        let newCartList = [...myCartList]
        const index = newCartList.findIndex(cart => cart.id === id)
        newCartList.splice(index, 1)
        setMyCart(newCartList)
    }

    return (
        <View
            style={{ flex: 1, backgroundColor: COLORS.white }}
        >
            <Header
                title="MY CART"
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
                    <IconButton
                        buttonContainerStyle={{ width: 40, height: 40, borderRadius: SIZES.radius, backgroundColor: COLORS.lightOrange2 }}
                        icon={icons.cart}
                        iconStyle={{ width: 20, height: 20, tintColor: COLORS.black }}
                        onPress={() => console.log('Cart')}
                        quantity={1}
                    />
                }
            />

            <SwipeListView
                data={myCartList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{ marginTop: SIZES.radius, paddingHorizontal: SIZES.padding, paddingBottom: SIZES.padding*2 }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <View
                        style={{ height: 100, backgroundColor: COLORS.lightGray2, ...styles.cartItemContainer }}
                    >
                        <View style={{ width: 90, height: 100, marginLeft: -10 }}>
                            <Image source={data.item.image} resizeMode='contain' style={{ width: '100%', height: '100%', position: 'absolute', top: 10 }} />
                        </View>
                        <View style={{ flex: 1 }} >
                            <Text style={{ color: COLORS.black, ...FONTS.body3 }}>{data.item.name}</Text>
                            <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>${data.item.price}</Text>
                        </View>
                        <InputCart
                            containerStyle={{ height: 50, width: 125, backgroundColor: COLORS.white }}
                            value={data.item.qty}
                            onAdd={() => updateQuantity(data.item.qty + 1, data.item.id)}
                            onMinus={() => data.item.qty > 1 ? updateQuantity(data.item.qty - 1, data.item.id) : null}
                        />
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <IconButton 
                        buttonContainerStyle={{ flex: 1, justifyContent: 'flex-end', backgroundColor: COLORS.primary, ...styles.cartItemContainer }}
                        icon={icons.delete_icon}
                        iconStyle={{ marginRight: 10 }}
                        onPress={() => removeCart(data.item.id)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }
})

export default MyCart;