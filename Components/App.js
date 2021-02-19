import 'react-native-gesture-handler';
import React from 'react';
import { NavigationDrawer } from './Drawer/NavigationDrawer';
import { NavigationContainer } from "@react-navigation/native";


const App = () =>
{
    return <NavigationContainer>
        <NavigationDrawer />
    </NavigationContainer>
}

export default App;