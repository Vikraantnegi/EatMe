import React, {useState, useRef, useEffect} from 'react';
import { View, Text, Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'
import LinearGradient from 'react-native-linear-gradient'
import { dummyData } from '../../constants';

const Map = ({ navigation }) => {

    const mapView = useRef()

    const [region, setRegion] = useState(null)
    const [toLoc, setToLoc] = useState(null)
    const [fromLoc, setFromLoc] = useState(null)
    const [angle, setAngle] = useState(0)
    
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

            </MapView>
        </View>
    )
}

export default Map;