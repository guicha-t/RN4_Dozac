import React, { useEffect, useState } from 'react';

import StyleWrapper from '../HOC/styleHOC';

import { View, ScrollView, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Button, Card } from 'react-native-elements';

import LoadingIcon from '../components/LoadingIcon';

import { globalStyle } from '../components/GeneralStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { TouchableHighlight } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'blanchedalmond',
  }
})

const urlOneCocktail = (id) => { return 'https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i='+id}

export default function CocktailPage({route, navigation, cocktailId }) {
    const [cocktail, setCocktail] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasErrors, setErrors] = useState(false);

    const fetchCocktails = async (id) => {
        const res = await fetch(urlOneCocktail(id));
        const data = await res
        .json()
        .then(
        res => setCocktail(res.drinks)
        );
        setLoading(false);
    }

    useEffect(() => {
        fetchCocktails(route.params === undefined ? 11007 : route.params.cocktailId.idDrink);
    }, [route.params]);


  if (cocktailId === undefined && cocktail.length === 0) {
    return <LoadingIcon />;
  }
  console.log("cocktail", cocktailId)
  return (
    <View style={styles.card} >
        <ScrollView style={{backgroundColor: 'blanchedalmond'}}>
            <Image
                style={{height: 300, width: width }}
                source={
                    cocktail[0].strDrinkThumb ? {
                    uri: cocktail[0].strDrinkThumb,
                    } : require('../../assets/broken.png')
                }
            resizeMode="contain"
            />
            <View style={{margin: 3, padding: 5, backgroundColor: 'blanchedalmond', borderWidth: 1, borderRadius: 6}}>
                <Text style={{color: 'brown', margin: 3, marginLeft: 10, marginRight: 10}}>{cocktail[0].strDrink}</Text>
            </View>

            { cocktail[0].strIngredient1 && cocktail[0].strMeasure1 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient1}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure1}</Text>
                </View>
            }
            { cocktail[0].strIngredient2 && cocktail[0].strMeasure2 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient2}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure2}</Text>
                </View>
            }
            { cocktail[0].strIngredient3 && cocktail[0].strMeasure3 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient3}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure3}</Text>
                </View>
            }
            { cocktail[0].strIngredient4 && cocktail[0].strMeasure4 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient4}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure4}</Text>
                </View>
            }
            { cocktail[0].strIngredient5 && cocktail[0].strMeasure5 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient5}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure5}</Text>
                </View>
            }

            { cocktail[0].strIngredient6 && cocktail[0].strMeasure6 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient6}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure6}</Text>
                </View>
            }
            { cocktail[0].strIngredient7 && cocktail[0].strMeasure7 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient7}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure7}</Text>
                </View>
            }
            { cocktail[0].strIngredient8 && cocktail[0].strMeasure8 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient8}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure8}</Text>
                </View>
            }
            { cocktail[0].strIngredient9 && cocktail[0].strMeasure9 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient9}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure9}</Text>
                </View>
            }
            { cocktail[0].strIngredient10 && cocktail[0].strMeasure10 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient10}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure10}</Text>
                </View>
            }
            { cocktail[0].strIngredient11 && cocktail[0].strMeasure11 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient11}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure11}</Text>
                </View>
            }
            { cocktail[0].strIngredient12 && cocktail[0].strMeasure12 &&
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strIngredient12}</Text>
                    <Text style={{color: '#7a0f0f'}}>{cocktail[0].strMeasure12}</Text>
                </View>
            }

            <View>
                <Text style={{color: 'brown', margin: 3, marginLeft: 10, marginRight: 10}}>{cocktail[0].strGlass}</Text>
            </View>
            <View>
                <Text style={{color: 'brown', margin: 3, marginLeft: 10, marginRight: 10}}>{cocktail[0].strInstructions}</Text>
            </View>
        </ScrollView>
    </View>

  )
}