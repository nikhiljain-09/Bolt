import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ProductCard({navigation, value, index, items}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('Product', {
          product: value,
        })
      }
      style={styles(index, items).margin}>
      <ImageBackground
        source={value.image}
        style={styles(index, items).productCard}
      />
      <Text style={styles(index, items).productPrice}>
        ${Number.parseFloat(value.price).toFixed(2)}
      </Text>
      <Text style={styles(index, items).productTitle}>{value.title}</Text>
    </TouchableOpacity>
  );
}

const styles = (index, items) =>
  StyleSheet.create({
    margin: {
      marginLeft: index && 15,
      marginRight: index === items.length - 1 ? 15 : 0,
    },
    productCard: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 180,
      width: 150,
      borderRadius: 9,
    },
    productPrice: {
      color: 'black',
      marginTop: 8,
    },
    productTitle: {
      color: 'black',
    },
  });
