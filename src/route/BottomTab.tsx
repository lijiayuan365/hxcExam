import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '@/types';
import Home from '@/pages/Home';
import Mine from '@/pages/Mine';
import {color} from '@/config';
import IconFont from '@/iconfont';

const Tab = createBottomTabNavigator<BottomTabParamList>();

const BottomTab: React.FC = () => {
  const tabbarList = [
    {name: 'Home', label: '首页', icon: 'index', component: Home},
    {name: 'Mine', label: '我的', icon:'mine', component: Mine},
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.primary[400],
        headerTitleAlign:'center'
      }}
      backBehavior={'none'}>
      {
        tabbarList.map((item) => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{
              tabBarLabel: item.label,
              headerTitle: item.label,
              tabBarIcon: ({color, size}) => (<IconFont name={item.icon} size={size} color={color} />),
            }}
          />
        ))
      }
    </Tab.Navigator>
  );
};

export default BottomTab;
