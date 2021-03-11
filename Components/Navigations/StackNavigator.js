import React, { useContext, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from "../Home"
import { View } from 'react-native';
import { UpperTabNavigation } from "../TeamStatus/UpperTabNavigator";
import LeagueIdContext from '../team/Context/mCTX';
import { GetLeague } from "../Utility/UI";

const Stack = createStackNavigator();

export const MyStackNavigator = () => {


  const mCTX = useContext(LeagueIdContext);

  return (
    <Stack.Navigator initialRouteName="TabNav" >
      <Stack.Screen name="TabNav" component={UpperTabNavigation} options={{
        title: mCTX[0] !== null ? GetLeague(mCTX[0]).title : "",
        headerStyle: {
          backgroundColor: mCTX[0] !== null ? GetLeague(mCTX[0]).color : "",

        },
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#FFFFFF',

        }
      }} />
    </Stack.Navigator>
  );


}
