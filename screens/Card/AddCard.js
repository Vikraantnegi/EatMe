import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, icons, SIZES, images, FONTS, dummyData } from '../../constants';
import { Header } from '../../components';
import IconButton from '../../components/Food/IconButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FormInput from '../../components/Auth/FormInput';
import { utils } from '../../utils';
import TextButton from '../../components/Home/TextButton';

const AddCard = (props) => {
    const { navigation, route } = {...props}

    const [ selectedCard, setSelectedCard ] = useState(route.params.selectedCard)
    const [ cardNumber, setCardNumber ] = useState("")
    const [ cardNumberError, setCardNumberError ] = useState("")
    const [ cardName, setCardName ] = useState("")
    const [ cardNameError, setCardNameError ] = useState("")
    const [ expiry, setExpiry ] = useState("")
    const [ expiryError, setExpiryError ] = useState("")
    const [ cvv, setCVV ] = useState("")
    const [ cvvError, setCVVError ] = useState("")
    const [ remember, setremember ] = useState(false)

    const addCardEnabled = (cardNumber !== "" && cardNumberError == "" && cardName !== "" && cardNameError == "" && expiryError == "" && expiry !== "" && cvv !== "" && cvvError == "");

    return (
      <View
          style={{ flex: 1, backgroundColor: COLORS.white }}
      >
          <Header
              title="ADD NEW CARD"
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
              contentContainerStyle={{ flexGrow: 1, paddingHorizontal: SIZES.padding }}
          >
              <ImageBackground
                source={images.card}
                style={{ height: 200, width: "100%", marginTop: SIZES.radius, borderRadius: SIZES.radius, overflow: 'hidden' }}
              >
                  <Image source={selectedCard?.icon} resizeMode='contain' style={{ position: 'absolute', top: 20, right: 20, width: 80, height: 40 }} />
                  <View style={{ position: 'absolute', bottom: 20, left: 0, right: 0, paddingHorizontal: SIZES.padding }}>
                      <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{cardName || dummyData.myProfile.name}</Text>
                      <View style={{ flexDirection: 'row' }}>
                          <Text style={{ flex: 1, color: COLORS.white, ...FONTS.body3 }}>{ cardNumber || "XXXX XXXX XXXX XXXX" }</Text>
                          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>{ expiry || "MM/YY" }</Text>
                      </View>
                  </View>
              </ImageBackground>

              <View style={{ marginTop: SIZES.padding*2 }}>
                  <FormInput
                      label="Card Number"
                      keyboardType="number-pad"
                      value={cardNumber}
                      onChange={(value) => {
                          utils.validateInput(value, 19, setCardNumberError)
                          setCardNumber(value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim()) /* First s is for space, second regex -> d is for digits */ 
                      }}
                      errorMsg={cardNumberError}
                      maxLength={19}
                      appendComponent={
                          <View style={{ justifyContent: 'center' }}>
                              <Image 
                                  source={ cardNumber == "" || (cardNumber != "" && cardNumberError == "") ? icons.correct : icons.cross } 
                                  style={{ height: 20, width: 20, tintColor: cardNumber === "" ? COLORS.gray : (cardNumber !== "" && cardNumberError == "") ? COLORS.green : COLORS.red }} 
                              />
                          </View>
                      }
                  />

                  <FormInput
                      label="Card Holder Name"
                      value={cardName}
                      onChange={(value) => {
                          utils.validateInput(value, 1, setCardNameError)
                          setCardName(value) 
                      }}
                      errorMsg={cardNameError}
                      appendComponent={
                          <View style={{ justifyContent: 'center' }}>
                              <Image 
                                  source={ cardName == "" || (cardName != "" && cardNameError == "") ? icons.correct : icons.cross } 
                                  style={{ height: 20, width: 20, tintColor: cardName === "" ? COLORS.gray : (cardName !== "" && cardNameError == "") ? COLORS.green : COLORS.red }} 
                              />
                          </View>
                      }
                  />

                  <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                      <FormInput
                          label="Expiry Date"
                          value={expiry}
                          placeholder="MM/YY"
                          maxLength={5}
                          containerStyle={{ flex: 1 }}
                          onChange={(value) => {
                              utils.validateInput(value, 5, setExpiryError)
                              setExpiry(value)
                          }}
                          errorMsg={expiryError}
                          appendComponent={
                              <View style={{ justifyContent: 'center' }}>
                                  <Image 
                                      source={ expiry == "" || (expiry != "" && expiryError == "") ? icons.correct : icons.cross } 
                                      style={{ height: 20, width: 20, tintColor: expiry === "" ? COLORS.gray : (expiry !== "" && expiryError == "") ? COLORS.green : COLORS.red }} 
                                  />
                              </View>
                          }
                      />
                      
                      <FormInput
                          keyboardType="number-pad"
                          label="CVV"
                          value={cvv}
                          placeholder="CVV"
                          maxLength={3}
                          containerStyle={{ flex: 1, marginLeft: SIZES.radius }}
                          onChange={(value) => {
                              utils.validateInput(value, 3, setCVVError)
                              setCVV(value)
                          }}
                          errorMsg={cvvError}
                          appendComponent={
                              <View style={{ justifyContent: 'center' }}>
                                  <Image 
                                      source={ cvv == "" || (cvv != "" && cvvError == "") ? icons.correct : icons.cross } 
                                      style={{ height: 20, width: 20, tintColor: cvv === "" ? COLORS.gray : (cvv !== "" && cvvError == "") ? COLORS.green : COLORS.red }} 
                                  />
                              </View>
                          }
                      />
                  </View>
                  <View style={{ marginTop: SIZES.padding, alignItems: 'flex-start' }}>
                      <TouchableOpacity
                          activeOpacity={0.6}
                          style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}
                          onPress={() => setremember(!remember)}
                      >
                          <Image 
                              source={remember ? icons.check_on : icons.check_off}
                              style={{ marginLeft: 5, width: 20, height: 20 }}
                          />

                          <Text style={{ marginLeft: SIZES.radius, color: remember ? COLORS.primary : COLORS.gray, ...FONTS.body3 }}>
                              Remember this card details!
                          </Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </KeyboardAwareScrollView>
          <View style={{ paddingTop: SIZES.radius, paddingBottom: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                <TextButton
                    disabled={!addCardEnabled}
                    label="Add Card"
                    buttonContainerStyle={{ height: 60, borderRadius: SIZES.radius, backgroundColor: addCardEnabled ? COLORS.primary : COLORS.transparentPrimary }}
                    onPress={() => navigation.goBack()}
                />
          </View>
      </View>
    );
};

export default AddCard;
