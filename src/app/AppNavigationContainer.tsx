import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../features/home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GlobalCounterScreen} from '../features/counters/GlobalCounterScreen';
import {LocalCounterScreen} from '../features/counters/LocalCounterScreen';
import {StandingsScreen} from '../features/standings/StandingsScreen';

type BottomTabParamList = {
  HomeStack: undefined;
  Standings: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export function AppNavigationContainer() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
        }}>
        <BottomTab.Screen name="HomeStack" component={HomeStackScreen} />
        <BottomTab.Screen name="Standings" component={StandingsScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export type HomeStackParamList = {
  Home: undefined;
  ReduxCounter: undefined;
  LocalCounter: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="ReduxCounter" component={GlobalCounterScreen} />
      <HomeStack.Screen name="LocalCounter" component={LocalCounterScreen} />
    </HomeStack.Navigator>
  );
}
