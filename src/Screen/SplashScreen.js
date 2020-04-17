import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Button, Icon, Divider, withBadge } from 'react-native-elements';

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
      <ButtonStyled
        title={TranslateSplashScreen('login')}
        onPress={() => navigation.navigate('Login')}
      />
      <ButtonStyled
        title={TranslateSplashScreen('signIn')}
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
}

export default StyleWrapper(SplashScreen);
