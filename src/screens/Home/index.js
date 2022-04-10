import {
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, {useContext} from 'react';
import {MainStoreContext} from '../../context/context';
import CommonContainer from '../../components/CommonContainer';

const Home = ({navigation}) => {
  const {categories, productList} = useContext(MainStoreContext);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <Text style={styles.title}>Categories</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {categories.map((value, index) => (
            <ImageBackground
              key={index}
              source={value.image}
              style={{
                ...styles.categoryCard,
                marginLeft: index && 15,
              }}>
              <Text style={styles.categoryTitle}>{value.title}</Text>
            </ImageBackground>
          ))}
        </ScrollView>
        <CommonContainer
          navigation={navigation}
          title={'Featured'}
          items={productList.filter(e => e.type === 'Featured')}
        />
        <CommonContainer
          navigation={navigation}
          title={'Best Sell'}
          items={productList.filter(e => e.type === 'BestSell')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {marginLeft: 22},
  drawer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    color: '#434343',
  },
  categoryCard: {
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    height: 64,
    width: 114,
    borderRadius: 6,
  },
  categoryTitle: {
    color: 'white',
  },
});
