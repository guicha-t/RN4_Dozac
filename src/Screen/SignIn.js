import React from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet, FlatList } from 'react-native';

import StyleWrapper from '../HOC/styleHOC';
import LoadingIcon from '../components/LoadingIcon';
import { TranslateSignIn } from '../components/translation';

function SignIn({loading}) {
  if (loading) {
    return <LoadingIcon />;
  } else {

  }

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start'}}>
        <Text>SignIn</Text>
    </View>
  );
}

export default (StyleWrapper(SignIn))
