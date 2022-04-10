import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AddressContainer({subTotalAmount, totalAmount}) {
  function PriceContent({title, content}) {
    return (
      <View style={styles.subTotalContent}>
        <Text style={styles.secondaryText}>{title}</Text>
        <Text style={styles.amountText}>$ {content}</Text>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.addressText}>
        Shewrapara, Mirpur, Dhaka-1216 House no: 938 Road no: 9
      </Text>
      <View style={styles.divider} />
      <View>
        <PriceContent title={'Subtotal'} content={subTotalAmount} />
        <PriceContent title={'Discount'} content={'5%'} />
        <PriceContent title={'Shipping'} content={'10'} />
      </View>
      <View style={styles.divider} />
      <View style={styles.subTotalContent}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.amountText}>$ {totalAmount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
