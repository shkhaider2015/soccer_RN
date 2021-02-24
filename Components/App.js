import 'react-native-gesture-handler';
import React from 'react';
import { NavigationDrawer } from './Drawer/NavigationDrawer';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";


const App = () =>
{
    return <NavigationContainer>
        <Provider store={Store} >
        <NavigationDrawer />
        </Provider>
    </NavigationContainer>
}

export default App;