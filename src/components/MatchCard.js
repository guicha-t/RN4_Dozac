import React, { useRef, useState } from 'react';

import StyleWrapper from '../HOC/styleHOC';

import { View, TouchableHighlight, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-elements';

import LoadingIcon from './LoadingIcon';

import { globalStyle } from './GeneralStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    borderRadius: 6,
    margin: 10,
  },
  container: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: globalStyle.colors.primaryLighter,
    minHeight: 40,
    borderRadius: 6,
  },
  scoreText: {
    textAlign: 'center',
    color: globalStyle.colors.secondary,
    fontSize: 20,
  },
  littleText: {
    color: globalStyle.colors.primary,
    fontSize: 12,
  },
  scoreBar: {
    marginLeft: 3,
    marginRight: 3,
    color: globalStyle.colors.primaryDark,
    fontSize: 20,
  }
})

export default function MatchCard({match, index}) {
  return (
    <View style={styles.touchable} key={match.id}>
      <TouchableOpacity style={styles.container}>

      <Image
        style={{height: 30, width: 30, margin: 3}}
        source={require('../../assets/mojito.png')}
        resizeMode="contain"
        />
      <Text>{match.teamHome.name}</Text>
      <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.scoreText}>{match.scoreHome}</Text>
          <Text style={styles.scoreBar}>/</Text>
          <Text style={styles.scoreText}>{match.scoreAway}</Text>
        </View>
        <View>
          <Text style={styles.littleText}>{match.startDate}</Text>
        </View>
      </View>
      <Text>{match.teamAway.name}</Text>

      <Image
        style={{height: 30, width: 30, margin: 3}}
        source={require('../../assets/mojito.png')}
        resizeMode="contain"
        />
      </TouchableOpacity>
    </View>

  )
}