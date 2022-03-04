import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {HomeStackParamList} from '../../app/AppNavigationContainer';

type Props = StackScreenProps<HomeStackParamList, 'Home'>;

export function HomeScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heima er best!</Text>
      <Button
        title="Fara á counter með local state"
        onPress={() => navigation.navigate('LocalCounter')}
      />
      <Button
        title="Fara á counter með global state"
        onPress={() => navigation.navigate('ReduxCounter')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '40%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
  },
});
