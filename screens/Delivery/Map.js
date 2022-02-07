import React, {useState, useRef, useEffect} from 'react';
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, constants, dummyData, FONTS, icons, images, SIZES } from '../../constants';
import { utils } from '../../utils';
import IconButton from '../../components/Food/IconButton';

const Map = ({ navigation }) => {

    const mapView = useRef()

    const [region, setRegion] = useState(null)
    const [toLoc, setToLoc] = useState(null)
    const [fromLoc, setFromLoc] = useState(null)
    const [angle, setAngle] = useState(0)
    const [ready, setReady] = useState(false)
    const [duration, setDuration] = useState("")
    
    useEffect(() => {
        let initialRegion = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
        }

        let destination = {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922,
        }

        setRegion(initialRegion)
        setToLoc(destination)
        setFromLoc(dummyData.fromLocs[1])
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapView}
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                initialRegion={region}
            >
                {
                    fromLoc && <Marker
                        key={'fromLoc'}
                        coordinate={fromLoc}
                        tracksViewChanges={false}
                        icon={icons.navigator1}
                        rotation={angle}
                        anchor={{ x: 0.5, y: 0.5 }}
                    />
                }
                {
                    toLoc && <Marker
                        key={'toLoc'}
                        coordinate={toLoc}
                        tracksViewChanges={false}
                        icon={icons.location_pin}
                        rotation={angle}
                        anchor={{ x: 0.5, y: 0.5 }}
                    />
                }
                <MapViewDirections
                    origin={fromLoc}
                    destination={toLoc}
                    apikey={constants.GOOGLE_MAP_API_KEY}
                    strokeWidth={5}
                    strokeColor={COLORS.primary}
                    optimizeWaypoints={true}
                    onReady={(result) => {
                        setDuration(Math.ceil(result.duration))
                        if(!ready){
                            mapView.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: SIZES.width*0.1,
                                    bottom: 400,
                                    top: SIZES.height*0.1,
                                    left: SIZES.width*0.1,
                                }
                            })
                            if(result.coordinates.length >= 2){
                                let angle = utils.calculateAngle(result.coordinates)
                                setAngle(angle)
                            }
                            setReady(true)
                        }
                    }}
                />
            </MapView>
            <>
                <IconButton
                    icon={icons.back}
                    buttonContainerStyle={{ position: 'absolute', top: SIZES.padding*2, left: SIZES.padding, ...styles.buttonStyle }}
                    iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray }}
                    onPress={() => navigation.goBack()}
                />
                <View style={{  position: 'absolute', top: SIZES.padding*2, right: SIZES.padding }}>
                    <IconButton
                        icon={icons.globe}
                        buttonContainerStyle={{ ...styles.buttonStyle }}
                        iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray }}
                        onPress={() => navigation.goBack()}
                    />
                    <IconButton
                        icon={icons.focus}
                        buttonContainerStyle={{ ...styles.buttonStyle, marginTop: SIZES.radius }}
                        iconStyle={{ width: 20, height: 20, tintColor: COLORS.gray }}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </>
            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={[COLORS.transparent, COLORS.lightGray1]}
                    style={{ position: 'absolute', top: -20, left: 0, right: 0, height: Platform.OS ==='ios' ? 200 : 50 }}
                />
                <View
                    style={{ padding: SIZES.padding, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: COLORS.white }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={icons.clock} style={{ width: 40, height: 40, tintColor: COLORS.black }} />
                        <View style={{ marginLeft: SIZES.padding }}>
                            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Your delivery time</Text>
                            <Text style={{ color: COLORS.black, ...FONTS.h3 }}>{duration} minutes</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.padding }}>
                        <Image source={icons.focus} style={{ width: 40, height: 40, tintColor: COLORS.black }} />
                        <View style={{ marginLeft: SIZES.padding }}>
                            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Your Address</Text>
                            <Text style={{ color: COLORS.black, ...FONTS.h3 }}>723, HUDA, Sector 8, Ambala City, Ambala, HR - 134003</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: SIZES.padding, height: 70, justifyContent: 'center', borderRadius: SIZES.radius, paddingHorizontal: SIZES.radius, backgroundColor: COLORS.primary }}>
                        <Image source={images.profile} style={{ width: 40, height: 40, borderRadius: 5 }} />
                        <View style={{ flex: 1, marginLeft: SIZES.padding }}>
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Adarsh Singh</Text>
                            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>Delivery Woman</Text>
                        </View>
                        <View style={{ height: 40, width: 40, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderRadius: 55, borderColor: COLORS.white, backgroundColor: COLORS.transparentWhite1 }}>
                            <Image source={icons.call} style={{ width: 30, height: 30 }} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: 40,
        height: 40,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.gray2,
        backgroundColor: COLORS.white
    }
})

export default Map;