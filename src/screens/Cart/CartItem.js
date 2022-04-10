import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo, useContext} from 'react';
import QuantityController from '../../components/QtyController';
import {cartConstants} from '../../constants/cartConstants';
import {MainStoreContext} from '../../context/context';

function CartItem({item}) {
  const {dispatch} = useContext(MainStoreContext);
  return (
    <View key={item.id} style={styles.itemContainer}>
      <View style={styles.rowContainer}>
        <Image source={item.image} style={styles.imgStyle} />
        <View style={styles.itemContent}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productManufacturer}>{item.manufacturer}</Text>
          <Text style={styles.productPrice}>
            ${Number.parseFloat(item.price).toFixed(2)}
          </Text>
          <QuantityController item={item} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: cartConstants.REMOVE_CART,
            payload: item,
          });
        }}
        style={styles.closeContainer}>
        <Image
          style={styles.closeImg}
          resizeMode="contain"
          source={require('../../../assets/close.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  closeImg: {
    height: 14,
    width: 14,
  },
  closeContainer: {
    margin: 8,
    alignSelf: 'flex-start',
  },
  productTitle: {
    color: '#434343',
    fontSize: 16,
  },
  productPrice: {
    fontSize: 16,
    color: '#374ABE',
  },
  productManufacturer: {
    color: '#919191',
  },
  itemContent: {
    marginLeft: 10,
    height: 115,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imgStyle: {
    height: 115,
    width: 109,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    borderWidth: 0.1,
    elevation: 1,
    flexDirection: 'row',
    height: 133,
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
  },
});

export default memo(CartItem);
