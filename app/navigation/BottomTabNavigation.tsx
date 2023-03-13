import * as React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'react-native-paper';
import { BottomBar } from './BottomBar';
import Wishlist from 'screens/Wishlist';
import Searchscreen from 'screens/Searchscreen';
import Filter from 'screens/Filter';
import Cart from 'screens/Cart';

const Tab = createBottomTabNavigator();
const BottomTabNavigation = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={(props) => <BottomBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}

      />

      <Tab.Screen
        name="Profile"
        component={Profile}
      />

      <Tab.Screen
        name="Wishlist"
        component={Wishlist}
      />
      <Tab.Screen
        name="Search"
        component={Searchscreen}
      />

      <Tab.Screen
        name="Filter"
        component={Filter}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
      />

    </Tab.Navigator>
  );
};
export default BottomTabNavigation;
