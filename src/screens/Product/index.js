import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {MainStoreContext} from '../../context/context';
import {cartConstants} from '../../constants/cartConstants';
import QuantityController from '../../components/QtyController';

export default function Product({route}) {
  const {id, image, title, price} = route.params.product;
  const {cartState, dispatch} = useContext(MainStoreContext);
  const cartItem = cartState.filter(e => {
    return e.id === id;
  });
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={image} />
        <View style={styles.content}>
          <Text style={styles.title}> {title}</Text>
          <Text style={styles.price}>
            $ {Number.parseFloat(price).toFixed(2)}
          </Text>
        </View>
      </View>
      {cartItem.length > 0 && <QuantityController item={cartItem[0]} />}
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          if (cartItem.length <= 0) {
            dispatch({
              type: cartConstants.ADD_TO_CART,
              payload: {
                ...route.params.product,
                quantity: 1,
              },
            });
          } else {
            dispatch({
              type: cartConstants.REMOVE_CART,
              payload: {
                ...route.params.product,
              },
            });
          }
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>
          {cartItem.length > 0 ? 'Remove from cart' : 'Add to cart'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: '700',
  },
  price: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
  button: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#667EEA',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
});
