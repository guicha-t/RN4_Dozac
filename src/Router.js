import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { connect } from 'react-redux';

import Menu from './Screen/Menu';
import Header from './components/Header'
import SplashScreen from './Screen/SplashScreen';
import Login from './Screen/Login';
import SignIn from './Screen/SignIn';
import LoadingIcon from './components/LoadingIcon';
import CocktailPage from './Screen/CocktailPage'

const Stack = createStackNavigator();

function Router({route, navigation, loading, connected }) {
  React.useEffect(() => {
  }, [connected]);

  if (loading) {
    return <LoadingIcon />;
  } else {
    console.log(connected)
  }
  // if (loading) {
  //   return <LoadingIcon />;
  // } else {
  // }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#152654',
        },
        headerMode: "none",
      }}
    >
        <>
          <Stack.Screen name="SplashScreen" component={SplashScreen} 
            options={{ header: props => null, headerShown: false }}
          />
          <Stack.Screen name="Login" component={Login} 
            options={{ header: props => <Header {...props} />, headerShown: false }}
          />
          <Stack.Screen name="SignIn" component={SignIn} 
            options={{ header: props => <Header {...props} />, headerShown: false }}
          />
          <Stack.Screen name="Menu" component={Menu} 
            options={{ header: props => null,  headerShown: false, headerMode: "none" }}
          />
        </>
    </Stack.Navigator>
  );
}

const mapStateToProps = state => ({
  connected: state.user.connected
});

const mapDispatchToProps = dispatch => {
  return {
    getConnected: () => dispatch({ type: "CONNECTED"}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router)
