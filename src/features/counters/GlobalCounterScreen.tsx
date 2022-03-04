import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {decrement, increment, change} from './globalCounterSlice';

export function GlobalCounterScreen() {
  const dispatch = useAppDispatch();
  const value = useAppSelector(state => state.counter.value);

  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text style={styles.title}>Count er persistað</Text>
        <Text style={styles.counterValue}>{`Global count er: ${value}`}</Text>
        <View style={styles.buttonsContainer}>
          <Button title="lækka" onPress={() => dispatch(decrement())} />
          <Button title="hækka" onPress={() => dispatch(increment())} />
        </View>
        <Button
          title="taka sjéns"
          onPress={() => dispatch(change(Math.floor(Math.random() * 11)))}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  counter: {
    alignItems: 'center',
  },
  counterValue: {
    fontSize: 20,
  },
  buttonsContainer: {
    marginVertical: 8,
    flexDirection: 'row',
    width: 160,
    justifyContent: 'space-evenly',
  },
});
