import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {AppNavigationContainer} from './AppNavigationContainer';
import {store} from './store';

let App = () => {
  return (
    <Provider store={store}>
      <AppNavigationContainer />
    </Provider>
  );
};

export default App;
