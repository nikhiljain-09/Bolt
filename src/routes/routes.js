import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Product from '../screens/Product';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {MainStoreContext} from '../context/context';

const Stack = createNativeStackNavigator();

export default function Routes() {
  const {cartState} = useContext(MainStoreContext);
  // created navigation stack container
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={({navigation}) => ({
            headerShadowVisible: false,
            title: '',
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <Text style={styles().cartText}>
                  <Text> 🛒 </Text>
                  <Text style={styles(cartState.length <= 0).cartCount}>
                    {cartState.length}
                  </Text>
                </Text>
              </TouchableOpacity>
            ),
            headerLeft: () => (
              <Image
                style={styles().drawer}
                source={require('../../assets/drawer.png')}
              />
            ),
          })}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerShadowVisible: false,
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={styles().backIcon}
                  source={require('../../assets/backIcon.png')}
                />
              </TouchableOpacity>
            ),
          })}
          name="Cart"
          component={Cart}
        />
        <Stack.Screen
          options={({navigation, route}) => ({
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            title: route.params.product.title,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="contain"
                  style={styles().backIcon}
                  source={require('../../assets/backIcon.png')}
                />
              </TouchableOpacity>
            ),
          })}
          name="Product"
          component={Product}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = showRed =>
  StyleSheet.create({
    backIcon: {
      width: 40,
    },
    cartText: {color: 'black', fontSize: 20},
    cartCount: {
      color: showRed ? 'red' : 'green',
      fontWeight: '500',
    },
    drawer: {
      marginLeft: 10,
    },
  });
