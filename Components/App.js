import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationDrawer } from './Drawer/NavigationDrawer';
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import LeagueIdContext from './team/Context/mCTX';


const App = () =>
{
    let LeagueState = useState(null)
    return <NavigationContainer>
        <LeagueIdContext.Provider value={LeagueState}>

        <Provider store={Store} >
        <NavigationDrawer />
        </Provider>
        </LeagueIdContext.Provider>
    </NavigationContainer>
}

export default App;