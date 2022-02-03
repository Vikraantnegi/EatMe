import { View, Text, ImageBackground, Image } from 'react-native';
import React, { useState } from 'react';
import { COLORS, icons, SIZES, images, FONTS, dummyData } from '../../constants';
import { Header } from '../../components';
import IconButton from '../../components/Food/IconButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddCard = (props) => {
    const { navigation, route } = {...props}
    const [ selectedCard, setSelectedCard ] = useState(route.params.selectedCard)
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
                      <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{dummyData.myProfile.name}</Text>
                      <View style={{ flexDirection: 'row' }}>
                          <Text style={{ flex: 1, color: COLORS.white, ...FONTS.body3 }}>XXXX XXXX XXXX XXXX</Text>
                          <Text style={{ color: COLORS.white, ...FONTS.body3 }}>MM/YY</Text>
                      </View>
                  </View>
              </ImageBackground>
          </KeyboardAwareScrollView>
      </View>
    );
};

export default AddCard;
