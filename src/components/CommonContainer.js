import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import ProductCard from '../screens/Home/ProductCard';

export default function CommonContainer({navigation, title, items}) {
  return (
    <View style={styles.topSpace}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {items.map((value, index) => (
          <ProductCard
            key={index}
            navigation={navigation}
            value={value}
            index={index}
            items={items}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 10,
    color: '#434343',
  },
  topSpace: {
    marginTop: 18,
  },
});
