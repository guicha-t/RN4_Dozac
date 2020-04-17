import React from 'react';

import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Button, Icon, Divider, withBadge } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import { TranslateRouter } from './translation';
import { headerStyle } from './GeneralStyles';
import LoadingIcon from './LoadingIcon';

const MessagesBadge = withBadge(5)(Icon);
const MessagesIcon = () => <MessagesBadge type="font-awesome" name="bell" size={24} color="#fff" />;

export default function Header({ scene, previous, navigation }) {
  return (
    <View style={headerStyle.container}>
      {previous ? (
        <Button
          type="clear"
          icon={<Icon name="chevron-left" type="font-awesome" color="#fff" />}
          onPress={navigation.goBack}
        />
      ) : (
        <Button
          type="clear"
          icon={<MessagesIcon name="chevron-left" type="font-awesome" color="#fff" />}
          onPress={navigation.goBack}
        />
      )}
      <Image
        style={{ height: 30, width: 30 }}
        source={require('../../assets/mojito.png')}
        resizeMode="contain"
      />
      <Image
        style={{ height: 30, width: 30 }}
        source={require('../../assets/mojito.png')}
        resizeMode="contain"
      />
    </View>
  );
}
