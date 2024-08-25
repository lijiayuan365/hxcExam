import {RoutesConfig} from '@/types';
import BottomTab from '@/route/BottomTab';
import Order from '@/pages/Order';

export const routesConfig: RoutesConfig[] = [
  {
    name: 'BottomTab',
    component: BottomTab,
    options: {headerShown: false},
  },
  {
    name: 'Order',
    component: Order,
    options: {headerShown: false},
  },
];
