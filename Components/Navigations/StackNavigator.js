import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from "../Home"

const Stack = createStackNavigator();

const getLeague = (leagueId) => {
    switch(leagueId)
    {
      case 140:
        return {
          leagueId: leagueId,
          title : "La Liga"
        }
    }
}

export const  MyStackNavigator = ({ route, navigation }) => {

  const { leagueId } = route.params;


  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home} options={{
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