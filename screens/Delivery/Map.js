import React, {useState, useRef, useEffect} from 'react';
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, constants, dummyData, icons, SIZES } from '../../constants';
import { utils } from '../../utils';

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
        <View style={{ flex: 1 }}
        >
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
            
        </View>
    )
}

export default Map;