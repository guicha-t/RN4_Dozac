import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet, FlatList } from 'react-native';

import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';
import CocktailCard from '../components/CocktailCard'
import { TranslateCocktails } from '../components/translation';

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

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasErrors, setErrors] = useState(false);

  const fetchCocktails = async () => {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v2/9973533/popular.php');
    const data = await res
    .json()
    .then(
      res => setCocktails(res.drinks)
    );
    setLoading(false);
  }
  
  useEffect(() => {
    fetchCocktails();
  }, [false]);

  if (loading) {
    return <LoadingIcon />;
  } else {
    console.log(cocktails, hasErrors);
  }

  return (
    <View style={{flex: 1}}>
      <Text>Cocktails</Text>
      <FlatList
        numColumns={3}
        data={cocktails}
        scrollEnabled={true}
        renderItem={({ item }) => 
          <CocktailCard
            name={item.strDrink}
            pic={item.strDrinkThumb}
            cocktail={item} 
            onPress={() => {
              this._onPress(item)
            }} 
          />}
        contentContainerStyle={{
          justifyContent: 'space-between',
          alignItems: 'stretch'
        }}
        keyExtractor={(item, index) => index}
      />

    </View>
  );
}

export default (StyleWrapper(Cocktails))
