import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'flex-start'
  },
  linearGradient: {
    flex: 1,
  },
  pubContainer : {
    flex: 0.2,
    maxHeight: 70,
  },
  pub: {
    flex: 1,
    backgroundColor: 'grey'
  },
})

const StyleWrapper = Wrapped => (props) => {
  let { open, message, ...rest } = props;
  if (open === undefined) {
      open = false;
  }
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#e25a19', '#ff864d', '#fb9d71']} style={styles.linearGradient}>

        <Wrapped {...rest} />

      </LinearGradient>
    </View>
  )
}

export default StyleWrapper
