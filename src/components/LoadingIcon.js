import * as React from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function LoadingIcon() {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
