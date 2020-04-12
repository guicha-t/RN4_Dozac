import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Screen/Menu';
import Header from './components/Header'
import SplashScreen from './Screen/SplashScreen';
import Login from './Screen/Login';
import SignIn from './Screen/SignIn';
import LoadingIcon from './components/LoadingIcon';

const Stack = createStackNavigator();

export default function Router({ loading }) {

  // if (loading) {
  //   return <LoadingIcon />;
  // } else {
  // }

  const connected = true;

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#152654',
        },
        headerMode: "screen",
      }}
    >
      { connected ? (
        <>
          <Stack.Screen name="Menu" component={Menu} 
            options={{ header: props => <Header {...props} /> }}
          />
        </>
        ) : (
        <>
          <Stack.Screen name="SplashScreen" component={SplashScreen} 
            options={{ header: props => null }}
          />
          <Stack.Screen name="Login" component={Login} 
            options={{ header: props => <Header {...props} /> }}
          />
          <Stack.Screen name="SignIn" component={SignIn} 
            options={{ header: props => <Header {...props} /> }}
          />
        </>
        )
      }
    </Stack.Navigator>
  );
}
