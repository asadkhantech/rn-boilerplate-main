import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from './../screens/ForgotPassword';
import Login from './../screens//Login';
import * as React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from './../store/slice';
import ThemeController from '../components/ThemeController';
import BottomTabNavigation from './BottomTabNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'react-native-paper';
import Drawer from './Drawer';
import Signup from 'screens/Signup';
import Code from 'screens/Code';
import NewPassword from 'screens/NewPassword';
import Getstart from 'screens/Getstart';
import Profile from 'screens/Profile';
import Wishlist from 'screens/Wishlist';
import Filter from 'screens/Filter';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();
const AppDrawer = createDrawerNavigator();

const homeOptions: any = {
  headerRight: () => <ThemeController />,
};

const AuthNavigator = () => {
  //   const {t} = useTranslation();
  const theme = useTheme();
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false

      }}
      initialRouteName="Start">
      <Stack.Screen
        name={'Login'}
        component={Login}


      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}


      />
      <Stack.Screen
        name="Signup"
        component={Signup}


      />
      <Stack.Screen
        name="Code"
        component={Code}
      />

      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
      />

      <Stack.Screen
        name="Start"
        component={Getstart}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
      />



    </AuthStack.Navigator>
  );
};

const LoggedInNavigator = () => {
  const theme = useTheme();

  return (
    <AppDrawer.Navigator drawerContent={() => <Drawer />}
      screenOptions={{ headerShown: false }}
    >
      <AppDrawer.Screen
        name={'Home'}
        component={BottomTabNavigation}
      />
    </AppDrawer.Navigator>
  );
};
const App: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <NavigationContainer>
      <StatusBar />
      {isLoggedIn ? <LoggedInNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default App;
