/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { connect } from 'react-redux';

import Menu from './Screen/Menu';
import SplashScreen from './Screen/SplashScreen';
import Login from './Screen/Login';
import SignIn from './Screen/SignIn';
import LoadingIcon from './components/LoadingIcon';

const Stack = createStackNavigator();

function Router({ loading, connected }) {
  React.useEffect(() => {}, [connected]);

  if (loading) {
    return <LoadingIcon />;
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#152654',
        },
        headerMode: 'none',
      }}
    >
      <>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ header: () => null, headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ header: () => null, headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ header: () => null, headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ header: () => null, headerShown: false, headerMode: 'none' }}
        />
      </>
    </Stack.Navigator>
  );
}

const mapStateToProps = state => ({
  connected: state.user.connected,
});

const mapDispatchToProps = dispatch => {
  return {
    getConnected: () => dispatch({ type: 'CONNECTED' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);
