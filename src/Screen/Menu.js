import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text} from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';


import StyleWrapper from '../HOC/styleHOC';

import Ingredients from './Ingredients';
import Cocktails from './Cocktails';
import Profile from './Profile';
import CocktailPage from './CocktailPage';

import { TranslateMenu } from '../components/translation';

const Tab = createBottomTabNavigator();

function Menu({ navigation }) {
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
      <Tab.Screen name="CocktailPage" component={CocktailPage}
        options={{
          tabBarLabel: ({ color, size }) => <Text>{TranslateMenu("detail")}</Text>,
          tabBarIcon: ({ color, size }) => <FontAwesome name="info" size={size} color={color} />
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
