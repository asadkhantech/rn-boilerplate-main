import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import Home from 'screens/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigation from './BottomTabNavigation';

const Drawer = createDrawerNavigator();
const DrawerNavigations = () => {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            defaultStatus="open"
            screenOptions={{
                drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
                headerShown: false
            }}>
            <Drawer.Screen name="BottomNav" component={BottomTabNavigation} options={{ headerShown: false }} />
        </Drawer.Navigator>
    );
};
export default DrawerNavigations;
