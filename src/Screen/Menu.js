import React, { useRef, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';


import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';

import Ingredients from './Ingredients';
import Cocktails from './Cocktails';
import Profile from './Profile';

import { TranslateMenu } from '../components/translation';

const Tab = createBottomTabNavigator();


const TabItem = ({id}) => (
  <Text>
    <TranslateMenu id={id} />
  </Text>
)

function Menu({ loading }) {
  // if (loading) {
  //   return <LoadingIcon />;
  // } else {
  // }


  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Ingredients" component={Ingredients} 
        options={{
          tabBarLabel: ({ color, size }) => <Text>{TranslateMenu("ingredients")}</Text>,
          tabBarIcon: ({ color, size }) => <FontAwesome name="bar-chart-o" size={size} color={color} />
        }}
      />
      <Tab.Screen name="Cocktails" component={Cocktails} 
        options={{
          tabBarLabel: ({ color, size }) => <Text>{TranslateMenu("cocktails")}</Text>,
          tabBarIcon: ({ color, size }) => <FontAwesome5 name="tshirt" size={size} color={color} />
        }}
      />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarLabel: ({ color, size }) => <Text>{TranslateMenu("profile")}</Text>,
          tabBarIcon: ({ color, size }) => <FontAwesome name="play-circle-o" size={size} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}

export default (StyleWrapper(Menu))
