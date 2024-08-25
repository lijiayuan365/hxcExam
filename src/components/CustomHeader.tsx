import React, {useState} from 'react';
import {StyleSheet} from'react-native';
import {
  Button,
  View,
  Text,
  Grid,
  Icon,
  WingBlank,
  Carousel,
} from '@ant-design/react-native';

const CustomHeader = ({navigation, title}: any) => {
  const back = () => {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Icon onPress={back} name="left" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  title: {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
})

export default CustomHeader;