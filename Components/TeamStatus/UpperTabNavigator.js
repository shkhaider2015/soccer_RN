import React from 'react'
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TeamStatus } from "./TeamStatus";
import { Laliga } from "../laliga/laliga";
import { About } from "../About";
import { Fixtures } from "../team/Fixtures/Fixtures";
import { StandingTableUI } from "../team/Standings/StandingTableUI";

const Tab = createMaterialTopTabNavigator();

const  UpperTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="TeamStatus" 
    tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: { 
          fontSize: 12 
        },
        style: { 
          backgroundColor: 'powderblue' 
        },
      }}
    >
        <Tab.Screen name="Laliga" component={Fixtures} options={{ tabBarLabel : "Fixtures"}} />
      <Tab.Screen name="TeamStatus" component={StandingTableUI} options={{ tabBarLabel : "Standings"}} />
      <Tab.Screen name="About" component={About} options={{ tabBarLabel : "Table"}} />
    </Tab.Navigator>
  );
}

export {UpperTabNavigation}