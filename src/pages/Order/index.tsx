import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {View, SearchBar} from '@ant-design/react-native';
import CustomHeader from '@/components/CustomHeader';

const Order = ({navigation, route}: any) => {
  const {title} = route.params;

  const OrderList = () => {
    return (
      <View>
        <Text>OrderList</Text>
      </View>
    )
  }

  const search = (value: string) => {
    console.log('====================================');
    console.log(value);
    console.log('====================================');
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader navigation={navigation} title={title} />
      <SearchBar onSubmit={search} placeholder="搜索" />
      <View style={styles.content}>Order</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Order;
