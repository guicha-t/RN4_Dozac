/* eslint-disable no-unused-vars */
import React from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import LoadingIcon from './LoadingIcon';

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
