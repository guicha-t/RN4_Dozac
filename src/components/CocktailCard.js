import React, { useRef, useState } from 'react';

import { View, TouchableHighlight, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StyleWrapper from '../HOC/styleHOC';

import LoadingIcon from './LoadingIcon';

import { globalStyle } from './GeneralStyles';
// import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({});

export default function CocktailCard({ name, pic, cocktail, onPress, sty }) {
  if (cocktail === undefined) {
    return <LoadingIcon />;
  }
  return (
    <View style={sty}>
      <TouchableOpacity
        style={{ justifyContent: 'center', alignItems: 'center' }}
        onPress={onPress}
      >
        <Image
          style={{ height: 70, width: 70, margin: 3 }}
          source={
            pic
              ? {
                  uri: `${pic}/preview`,
                }
              : require('../../assets/broken.png')
          }
          resizeMode="contain"
        />
        <View>
          <Text style={{ flexWrap: 'wrap', textAlign: 'center', color: 'brown' }}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
