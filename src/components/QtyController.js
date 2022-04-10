import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext} from 'react';
import {MainStoreContext} from '../context/context';
import {cartConstants} from '../constants/cartConstants';

export default function QuantityController({item}) {
  const {dispatch} = useContext(MainStoreContext);
  return (
    <View style={styles.qtyContainer}>
      <TouchableOpacity
        onPress={() => {
          if (item.quantity > 1) {
            dispatch({
              type: cartConstants.DECREASE,
              payload: item,
            });
          } else {
            dispatch({
              type: cartConstants.REMOVE_CART,
              payload: item,
            });
          }
        }}>
        <Text style={styles.qtyButton}>-</Text>
      </TouchableOpacity>
      <Text style={styles.qtyButton}>{item.quantity}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: cartConstants.INCREASE,
            payload: {
              ...item,
              quantity: 1,
            },
          });
        }}>
        <Text style={styles.qtyButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  qtyButton: {
    fontSize: 16,
    color: 'black',
    padding: 8,
  },
  qtyContainer: {
    borderRadius: 4,
    backgroundColor: '#F6F6F6',
    width: 114,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
