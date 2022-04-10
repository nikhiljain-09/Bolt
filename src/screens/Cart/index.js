import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {MainStoreContext} from '../../context/context';
import {cartConstants} from '../../constants/cartConstants';
import CartItem from './CartItem';
import AddressContainer from './AddressContainer';
import CountDown from './CountDown';
const Cart = ({navigation}) => {
  const {cartState, dispatch} = useContext(MainStoreContext);
  const [subTotalAmount, setSubTotalAmount] = useState(0);
  useEffect(() => {
    var amount = 0;
    cartState.map(e => {
      amount = amount + e.price * e.quantity;
    });
    setSubTotalAmount(amount);
  }, [cartState]);
  const totalAmount = subTotalAmount - subTotalAmount * 0.05 + 10;
  return (
    <View style={styles.container}>
      {cartState.length > 0 ? (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <View style={styles.topContent}>
                <Text style={styles.title}>Checkout</Text>
                {cartState.length > 0 && <CountDown navigation={navigation} />}
              </View>
            }
            ListFooterComponent={
              <AddressContainer
                totalAmount={totalAmount}
                subTotalAmount={subTotalAmount}
              />
            }
            style={styles.flatListContainer}
            data={cartState}
            renderItem={({item, index}) => <CartItem key={index} item={item} />}
          />
          <TouchableOpacity
            onPress={() => {
              dispatch({
                type: cartConstants.EMPTY_CART,
              });
              Alert.alert('Status', 'Order Confirmed!');
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Confirm order</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.emptyText}>No Items Added!</Text>
      )}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  topContent: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#323232',
    alignSelf: 'flex-start',
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
  },
  addressText: {
    paddingLeft: 20,
    color: 'black',
    fontSize: 18,
    paddingBottom: 10,
    paddingTop: 5,
  },
  divider: {
    height: 2,
    backgroundColor: '#979797',
    opacity: 0.13,
    width: '100%',
  },
  subTotalContent: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalText: {
    color: '#585B5E',
    fontSize: 16,
  },
  secondaryText: {
    color: '#919191',
    fontSize: 16,
  },
  amountText: {
    fontSize: 16,
    color: '#434343',
  },
  button: {
    width: '100%',
    marginBottom: 10,
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
  emptyText: {
    color: 'black',
    fontSize: 18,
  },
});
