import { View, Animated, Modal, TouchableWithoutFeedback } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { COLORS, SIZES } from '../constants';

const FilterModal = (props) => {
    const { isVisible, onClose } = {...props}
    const [showFilterModal, setFilterModal] = useState(isVisible)
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300
        }).start(() => onClose());
    };

    useEffect(() => {
        if(showFilterModal){
            fadeIn()
        } else{
            fadeOut()
        }
    }, [showFilterModal])

    const modalHeight = fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height - 680]
    })
    
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View
                style={{ flex: 1, backgroundColor: COLORS.transparentBlack7 }}
            >
                <TouchableWithoutFeedback
                    onPress={() => setFilterModal(false)}
                >
                    <View
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                    />
                </TouchableWithoutFeedback>
                <Animated.View
                    style={{ position: 'absolute', left: 0, top: modalHeight, width: '100%', height: '100%', padding: SIZES.padding, 
                        borderTopRightRadius: SIZES.radius, borderTopLeftRadius: SIZES.radius, backgroundColor: COLORS.white 
                    }}
                >

                </Animated.View>
            </View>
        </Modal>
    );
};

export default FilterModal;
