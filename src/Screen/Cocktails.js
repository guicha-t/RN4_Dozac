/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';

import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';
import CocktailCard from '../components/CocktailCard';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  card: {
    width: '31%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    borderRadius: 6,
    backgroundColor: 'blanchedalmond',
  },
});

const urlFamous = 'https://www.thecocktaildb.com/api/json/v2/9973533/popular.php';
const urlRandom = 'https://www.thecocktaildb.com/api/json/v2/9973533/random.php';

function Cocktails({ navigation }) {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCocktails = async url => {
    const res = await fetch(url || urlFamous);
    await res.json().then(res => setCocktails(res.drinks));
    setLoading(false);
  };

  useEffect(() => {
    fetchCocktails();
  }, [false]);

  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blanchedalmond',
        }}
      >
        <Text style={{ color: 'brown', fontSize: 20 }}>Cocktails</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            margin: 3,
            padding: 5,
            backgroundColor: 'blanchedalmond',
            borderWidth: 1,
            borderRadius: 6,
          }}
          onPress={() => {
            fetchCocktails(urlFamous);
          }}
        >
          <Text style={{ color: 'brown', margin: 3, marginLeft: 10, marginRight: 10 }}>
            les 20 les plus populaires
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            margin: 3,
            padding: 5,
            backgroundColor: 'blanchedalmond',
            borderWidth: 1,
            borderRadius: 6,
          }}
          onPress={() => {
            fetchCocktails(urlRandom);
          }}
        >
          <Text style={{ color: 'brown', margin: 3, marginLeft: 10, marginRight: 10 }}>
            Aléatoire
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        numColumns={3}
        data={cocktails}
        scrollEnabled
        renderItem={({ item }) => (
          <CocktailCard
            sty={styles.card}
            name={item.strDrink}
            pic={item.strDrinkThumb}
            cocktail={item}
            onPress={() => {
              navigation.navigate('CocktailPage', { cocktailId: item });
            }}
          />
        )}
        contentContainerStyle={{
          justifyContent: 'space-between',
          alignItems: 'stretch',
        }}
        keyExtractor={(item, index) => `id${index}`}
      />
    </View>
  );
}

export default StyleWrapper(Cocktails);
