import React, { useEffect, useState } from 'react'
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
          leagueId: leagueId,
          title : "La Liga"
        }
        case 78:
          return{
            leagueId: leagueId,
            title: "Bundesliga"
          }
      default:
        return{
          leagueId,
          title : "La Liga"
        }
    }
}

export const  MyStackNavigator = () => {

 

  useEffect(
    () => {
      
    },
    []
  )


  
    return (
      <Stack.Navigator initialRouteName="TabNav" >
        <Stack.Screen name="TabNav" component={UpperTabNavigation} options={{
            title : 'kjjhjh',
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
