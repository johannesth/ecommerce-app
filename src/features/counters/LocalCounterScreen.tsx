import React, {useState} from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

export function LocalCounterScreen() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text style={styles.title}>
          Count resettast ef component unmountast
        </Text>
        <Text style={styles.counterValue}>{`Count er: ${count}`}</Text>
        <View style={styles.buttonsContainer}>
          <Button
            title="lækka"
            onPress={() => setCount(prevCount => prevCount - 1)}
          />
          <Button
            title="hækka"
            onPress={() => setCount(prevCount => prevCount + 1)}
          />
        </View>
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
    marginBottom: 12,
    textAlign: 'center',
    paddingHorizontal: 40,
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
