import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './src/saga/request';
import Router from './src/Router';

import rootReducer from './src/store/reducers';

const sagaMiddleware = createSagaMiddleware();
// const reduxDevTools =
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/*
let store = createStore(
    rootReducer,
 compose(applyMiddleware(sagaMiddleware), reduxDevTools));
*/
const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watcherSaga);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}
