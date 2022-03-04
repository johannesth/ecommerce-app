import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useAppSelector} from '../../app/hooks';

export function StandingsScreen() {
  const value = useAppSelector(state => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Global count`}</Text>
      <Text style={styles.count}>{`${value}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
  },
  count: {
    fontSize: 44,
    fontWeight: '600',
  },
});
