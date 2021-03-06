import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Home} from "../Home"

const Stack = createStackNavigator();

export const  MyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home} options={{
          title : "La Liga",
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