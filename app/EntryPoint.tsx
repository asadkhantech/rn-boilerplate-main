/**
 * React Native App
 * Everything starts from the Entry-point
 */

import Navigator from './navigation';
import { persistor, store } from './store';
import { RootState } from './store/slice';
import React, { useEffect } from 'react';
import { ActivityIndicator, LogBox } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import DarkTheme from './theme/DarkTheme';
import DefaultTheme from './theme/DefaultTheme';
// import codePush from 'react-native-code-push';
import Categorycard from 'components/Categorycard';
import Profileheader from 'components/Profileheader';


const RootNavigation: React.FC = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);
  const theme = isDark ? DarkTheme : DefaultTheme;
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <PaperProvider theme={theme}>
      <Navigator />


    </PaperProvider>
  );
};
// const codePushOptions = {
//   updateDialog: false,
//   installMode: codePush.InstallMode.IMMEDIATE,
// };

const EntryPoint: React.FC = () => {
  // useEffect(() => {
  //   codePush.sync({installMode: codePush.InstallMode.IMMEDIATE});
  // });

  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
};
export default EntryPoint;
