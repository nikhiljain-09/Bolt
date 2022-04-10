import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function CountDown({navigation}) {
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    if (counter === 0) {
      navigation.goBack();
    } else {
      const timer =
        counter > 0 &&
        setInterval(() => {
          setCounter(counter - 1);
        }, 1000);
      return () => clearInterval(timer);
    }
  }, [counter, navigation]);

  return (
    <View style={styles.countDownContainer}>
      <Text style={styles.countDownText}>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  countDownContainer: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countDownText: {fontSize: 24, color: 'white'},
});
