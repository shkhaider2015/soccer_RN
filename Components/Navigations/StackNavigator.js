import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from "../Home"
import { View } from 'react-native';
import { UpperTabNavigation } from "../TeamStatus/UpperTabNavigator";

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

export const  MyStackNavigator = ({ route, navigation }) => {

  const { leagueId } = route.params;
  

  console.log("MyStackNavigation: LeagueId : ", leagueId)


  if(leagueId === 0)
  {
    return <View> Id = 0 </View>
  }
  else
  {
    return (
      <Stack.Navigator initialRouteName="TabNav" >
        <Stack.Screen name="TabNav" component={UpperTabNavigation} initialParams={{leagueId: leagueId}} options={{
            title : getLeague(leagueId).title,
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

 
}