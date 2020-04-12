import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet, FlatList } from 'react-native';

import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';
import { TranslateCocktails } from '../components/translation';

function Cocktails({loading}) {
  if (loading) {
    return <LoadingIcon />;
  } else {

  }

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start'}}>
        <Text>Cocktails</Text>
    </View>
  );
}

export default (StyleWrapper(Cocktails))
