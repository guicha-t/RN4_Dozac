/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import StyleWrapper from '../HOC/styleHOC';

import LoadingIcon from '../components/LoadingIcon';

import { TranslateSplashScreen } from '../components/translation';

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    minHeight: 40,
    maxWidth: 400,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 6,
    backgroundColor: '#DEDEDE',
    margin: 5,
    paddingRight: 10,
    paddingLeft: 10,
  },
  ButtonText: {
    textAlign: 'center',
    color: '#152654',
    fontSize: 20,
  },
});

const ButtonStyled = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Icon type="font-awesome" name="info" color="#517fa4" style={{ margin: 10 }} />
      <Text style={styles.ButtonText} type="clear">
        {props.title}
      </Text>
      <Icon type="font-awesome" name="chevron-right" color="#517fa4" />
    </TouchableOpacity>
  );
};

function SplashScreen({ navigation, loading }) {
  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <View style={styles.buttonContainer}>
      <View style={{ flex: 0.4, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Image source={require('../../assets/Cocktail.png')} style={{ width: 240, height: 240 }} />
      </View>
      <View style={{ flex: 0.4, justifyContent: 'center' }}>
        <ButtonStyled
          title={TranslateSplashScreen('login')}
          onPress={() => navigation.navigate('Login')}
        />
        <ButtonStyled
          title={TranslateSplashScreen('signIn')}
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
      <View style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'center' }}>
        <Text style={{ fontSize: 8, color: '#696969' }}>
          Romain GADRAT - Thomas GUICHARD - Artem VATOUTINE
        </Text>
      </View>
    </View>
  );
}

export default StyleWrapper(SplashScreen);
