import React, {useState} from 'react';
import {Alert, TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Button,
  View,
  Text,
  Grid,
  Icon,
  WingBlank,
  Carousel,
} from '@ant-design/react-native';

const Home: React.FC = () => {
  const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: `Name${i}`,
  }));

  const GridItem = ({data}: any) => {
    const handle = () => {
      Alert.alert('Alert', 'Alert', [{text: 'OK'}]);
      console.log('====================================');
      console.log('ccc');
      console.log('====================================');
    };
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TouchableOpacity onPress={handle} style={styles.gridItem}>
          <Icon name="bell" />
          <View>{data.text}</View>
        </TouchableOpacity>
      </View>
    );
  };

  const SwipeBanner = () => {
    const [actIndex, setActIndex] = useState(0);
    const [list, setList] = useState([{text: '1', color: 'red'}, {text: '2', color: 'green'}, {text: '3', color:'blue'}])
    return (
      <Carousel style={swiperStyles.wrapper} selectedIndex={actIndex} autoplay infinite>
        {list.map((item: any) => (
          <View key={item.text} style={{backgroundColor: item.color, flex: 1}}>
            <Text>{item.text}</Text>
          </View>
        ))}
      </Carousel>
    );
  };
  return (
    <View style={{backgroundColor: '#eee'}}>
      <View style={styles.topArea}>
        <SwipeBanner />
        <WingBlank>
          <View style={styles.subTitle}>常用功能</View>
        </WingBlank>
        {/* <WingBlank> */}
        <View style={{marginHorizontal: 7}}>
          <Grid
            data={data}
            hasLine={false}
            columnNum={4}
            itemStyle={{height: 40}}
            renderItem={(item: any, index: any) => (
              <GridItem key={index} data={item} />
            )}
          />
        </View>
      </View>
      {/* </WingBlank> */}
      <WingBlank>
        <View style={styles.subTitle}>
          <View style={styles.subTitle}>代办事项</View><View style={styles.dot}>10</View>
        </View>
      </WingBlank>
      <View style={styles.waitArea}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>暂无待办事项</Text>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  topArea: {
    backgroundColor: '#999',
    paddingBottom: 10,
  },
  subTitle: {
    marginVertical: 10,
    fonSize: 24,
    fontWeight: '800',
    flexDirection: 'row',
  },
  dot: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  gridItem: {
    
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 7,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  waitArea: {
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 15,
    // marginBottom: 100,
  },
});
const swiperStyles = {
  wrapper: {
    height: 200,
    backgroundColor: '#fff',
    borderradius: 5,
  }
}
export default Home;
