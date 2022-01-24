import { View, Text, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../constants';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const FilterModal = (props) => {
    const { isVisible, onClose } = {...props}
    const [showFilterModal, setFilterModal] = useState(isVisible)

    useEffect(() => {
        if(!showFilterModal){
            onClose();
        }
    }, [showFilterModal])
    
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

                </TouchableWithoutFeedback>
            </View>
        </Modal>
    );
};

export default FilterModal;
