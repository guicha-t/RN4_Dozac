import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet, FlatList } from 'react-native';

import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';
import { TranslateIngredients } from '../components/translation';

import { useState, useEffect } from 'react';
import axios from 'axios';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  }
})

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasErrors, setErrors] = useState(false);

  const fetchIngredients = async () => {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533//list.php?i=list');
    const data = await res
    .json()
    .then(
      res => setIngredients(res.drinks)
    );
    setLoading(false);
  }
  
  useEffect(() => {
    fetchIngredients();
  }, [false]);

  if (loading) {
    return <LoadingIcon />;
  } else {
    console.log(ingredients, hasErrors);
  }

  return (
    <View style={{flex: 1}}>
      <Text>Ingredients</Text>
      <FlatList
        data={ingredients}
        scrollEnabled={true}
        renderItem={({ item }) => 
          <View style={{flex:1, borderRadius: 6, backgroundColor: '#ffc848', margin: 6, padding: 2}}>
            <Text style={{margin: 5}}>{item.strIngredient1}</Text>
          </View>
        }
        contentContainerStyle={{
          justifyContent: 'space-between',
          alignItems: 'stretch'
        }}
        keyExtractor={(item, index) => index}
      />

    </View>
  );
}

export default (StyleWrapper(Ingredients))
