import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet, FlatList, TextInput } from 'react-native';

import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';
import { TranslateIngredients } from '../components/translation';
import CocktailCard from '../components/CocktailCard'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'row', 
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  card: {
    justifyContent: 'center', 
    alignItems: 'center', 
    margin: 3, 
    borderRadius: 6, 
    backgroundColor: 'blanchedalmond',
  }
})

function Ingredients({ navigation }) {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasErrors, setErrors] = useState(false);
  const [ingredients, setIngredients] = useState([])

  const [name, setName] = React.useState('');

  const fetchIngredients = async (ingredients, name) => {
    const res = await fetch(urlArg(ingredients, name));
    const data = await res
    .json()
    .then(
      res => setCocktails(res.drinks)
    );
    setLoading(false);
  }
  
  function addIngredient(item) {
    setIngredients([...ingredients, item]);
    setName('');
  }

  function erraseIngredient(item) {
    const index = ingredients.indexOf(item);
    setIngredients(ingredients.splice(index, 1))
    fetchIngredients(ingredients, name)
  }

  const urlArg = (ingredients, id) => { 
    let res = 'https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i='
    for (let i = 0; i < ingredients.length; i++) {
      if (i + 1 === ingredients.length) {
        res += ingredients[i]
      } else {
        res += ingredients[i] + ','
      }
    }
    if (id.length != 0)
      res += ',' + id;
    console.log(res);
    return res;
  }

  useEffect(() => {
    fetchIngredients(ingredients, name);
  }, [name, ingredients]);

  if (loading) {
    return <LoadingIcon />;
  } else {
    console.log(cocktails, hasErrors);
  }

  return (
    <View style={{flex: 1}}>
        <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'blanchedalmond'}}>
          <Text style={{color: 'brown', fontSize: 20}} >Ingredients</Text>
        </View>
        <View style={{margin: 10, paddingBottom: 20}}>
            <Text style={{fontSize: 18}}>Nom de votre ingredient</Text>
            <View style={{flexDirection: 'row'}}>
            <TouchableOpacity 
              style={{margin: 3, padding: 5, backgroundColor: 'blanchedalmond', borderWidth: 1, borderRadius: 6}}
              onPress={() => { addIngredient(name) }}
              >
                <Text>Ajouter</Text>
              </TouchableOpacity>
              <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, backgroundColor:'blanchedalmond'}}
              onChangeText={(text) => setName(text)}
              value={name}
            />
            </View>
        </View>
      <ScrollView>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', backgroundColor: 'chocolate', margin: 3, minWidth: 60}}>
          {
            ingredients.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={{flexWrap: 'wrap', maxHeight: 60, borderRadius: 6, backgroundColor: 'blanchedalmond', margin: 6, padding: 2}}
                  onPress={() => { erraseIngredient(item)}}>
                  <Text style={{margin: 5}}>{item}</Text>
                </TouchableOpacity>
              );
            })
          }
        </View>
        <View style={{flexDirection: 'row', backgroundColor: 'chocolate', margin: 3}}>
          <FlatList
            numColumns={2}
            data={cocktails}
            scrollEnabled={true}
            renderItem={({ item }) => 
              <CocktailCard
                sty={styles.card}
                name={item.strDrink}
                pic={item.strDrinkThumb}
                cocktail={item} 
                onPress={() => {
                  navigation.navigate('CocktailPage', {cocktailId: item})
                }} 
              />}
            contentContainerStyle={{
              justifyContent: 'flex-end',
            }}
            keyExtractor={(item, index) => 'id' + index}
          />
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

export default (StyleWrapper(Ingredients))
