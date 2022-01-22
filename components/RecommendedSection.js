import { View, Text } from 'react-native';
import React from 'react';
import SectionHeader from './SectionHeader';

const RecommendedSection = () => {
  return (
    <View>
      <SectionHeader
        title="Recommended"
        onPress={() => console.log('Show all Recommended')}
      />

    </View>
  );
};

export default RecommendedSection;
