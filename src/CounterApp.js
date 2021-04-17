/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
// import type {Node} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const CounterApp = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  return (
    <View style={styles.container}>
      <View style={styles.second_container}>
        <TouchableOpacity onPress={() => dispatch({type: 'INCREASE_COUNTER'})}>
          <Text styles={{fontSize: 20}}>Increase</Text>
        </TouchableOpacity>
        <Text styles={{fontSize: 20}}>{counter}</Text>
        <TouchableOpacity onPress={() => dispatch({type: 'DECREASE_COUNTER'})}>
          <Text styles={{fontSize: 20}}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white' /*because it it white in the other case*/,
  },
  second_container: {
    flexDirection: 'row',
    width: 200,
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
});

export default CounterApp;
