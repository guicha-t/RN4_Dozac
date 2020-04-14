import React, { useRef, useState } from 'react';

import StyleWrapper from '../HOC/styleHOC';

import { View, TouchableHighlight, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';

import LoadingIcon from './LoadingIcon';

import { globalStyle } from './GeneralStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  card: {
    width: '31%',
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 3, 
    borderRadius: 6, 
    backgroundColor: '#DEDEDE',
  }
})

export default function CocktailCard({name, pic, cocktail }) {
  if (cocktail === undefined) {
    return <LoadingIcon />;
  }
  return (
    <View style={styles.card} >
      <TouchableOpacity style={{justifyContent: 'center', alignItems:'center'}}>
        <Image
          style={{height: 70, width: 70, margin: 3}}
          source={
            pic ? {
              uri: pic + '/preview',
            } : require('../../assets/broken.png')
          }
          resizeMode="contain"
          />
        <Text style={{flexWrap: 'wrap', textAlign: 'center', }}>{name}</Text>
      </TouchableOpacity>
    </View>

  )
}