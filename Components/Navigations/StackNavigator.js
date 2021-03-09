import React, { useContext, useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from "../Home"
import { View } from 'react-native';
import { UpperTabNavigation } from "../TeamStatus/UpperTabNavigator";
import LeagueIdContext from '../team/Context/mCTX';

const Stack = createStackNavigator();

const getLeague = (leagueId) => {
    switch(leagueId)
    {
      case 140:
        return {
          title : "La Liga"
        }
        case 78:
          return{
            title: "Bundesliga"
          }
      default:
        return{
          title : "La Liga"
        }
    }
}

export const  MyStackNavigator = () => {


  let LeagueCTX = useContext(LeagueIdContext);
  
    return (
      <Stack.Navigator initialRouteName="TabNav" >
        <Stack.Screen name="TabNav" component={UpperTabNavigation} options={{
            title : LeagueCTX[0] !== null ? getLeague(LeagueCTX[0]).title : 0,
            headerStyle: {
                backgroundColor: '#6802cf',
                
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: '#FFFFFF',
              
            }
        }} />
      </Stack.Navigator>
    );

 
}
